import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Server-side rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = { maxRequests: 3, windowMs: 3600000 }; // 3 per hour per IP

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return true;
  }
  if (entry.count >= RATE_LIMIT.maxRequests) {
    return false;
  }
  entry.count++;
  return true;
}

// Basic email format validation
function isValidEmail(email: string): boolean {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limit by IP
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";
    if (!checkRateLimit(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { gmail } = await req.json();

    if (!gmail || !isValidEmail(gmail)) {
      return new Response(
        JSON.stringify({ error: "A valid email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize email input
    const sanitizedEmail = gmail.trim().toLowerCase().slice(0, 254);

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ success: true, notified: false }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(resendApiKey);

    const emailResult = await resend.emails.send({
      from: "EconNexus <onboarding@resend.dev>",
      to: [Deno.env.get("OWNER_EMAIL") || ""],
      subject: `New Freemium Pack Application: ${sanitizedEmail}`,
      html: `
        <h2>New Freemium Pack Application</h2>
        <p>A new user has applied for the Freemium Pack:</p>
        <p><strong>Gmail:</strong> ${sanitizedEmail.replace(/[<>&"']/g, '')}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        <p>Go to your admin portal at <code>/admin-nexus-approval</code> to approve or reject this application.</p>
      `,
    });

    console.log("Resend API response:", JSON.stringify(emailResult));

    if (emailResult.error) {
      console.error("Resend error:", JSON.stringify(emailResult.error));
      return new Response(
        JSON.stringify({ success: true, notified: false }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, notified: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in freemium-notify:", error);
    return new Response(
      JSON.stringify({ success: true, notified: false }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
