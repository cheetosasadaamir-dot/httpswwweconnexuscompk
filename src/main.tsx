import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { initPerformanceMonitoring, addPreconnect, addDnsPrefetch } from "./lib/performance";

// Initialize performance monitoring
initPerformanceMonitoring();

// Add resource hints for critical third-party origins
addPreconnect('https://fonts.googleapis.com');
addPreconnect('https://fonts.gstatic.com');
addDnsPrefetch('https://jvgawqkiswotvfqnoiwr.supabase.co');
addDnsPrefetch('https://ai.gateway.lovable.dev');

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
