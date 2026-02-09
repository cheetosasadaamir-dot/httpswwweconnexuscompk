import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { gmail } = await req.json();

    if (!gmail) {
      return new Response(
        JSON.stringify({ error: "Gmail is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      // Still return success - the application was saved, just notification failed
      return new Response(
        JSON.stringify({ success: true, notified: false }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(resendApiKey);

    const emailResult = await resend.emails.send({
      from: "EconNexus <onboarding@resend.dev>",
      to: ["unifom7@gmail.com"],
      subject: `New Freemium Pack Application: ${gmail}`,
      html: `
        <h2>New Freemium Pack Application</h2>
        <p>A new user has applied for the Freemium Pack:</p>
        <p><strong>Gmail:</strong> ${gmail}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        <p>Go to your admin portal at <code>/admin-nexus-approval</code> to approve or reject this application.</p>
      `,
    });

    console.log("Resend API response:", JSON.stringify(emailResult));

    if (emailResult.error) {
      console.error("Resend error:", JSON.stringify(emailResult.error));
      return new Response(
        JSON.stringify({ success: true, notified: false, error: emailResult.error }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, notified: true, emailId: emailResult.data?.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in freemium-notify:", error);
    return new Response(
      JSON.stringify({ success: true, notified: false, error: String(error) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
