import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { trackPageView } from "@/lib/analytics";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Track to local project
    (supabase.rpc as any)('track_page_view', { _page: location.pathname })
      .then(({ error }: { error: any }) => {
        if (error) console.error('track_page_view failed:', error);
      });
    // Track to admin dashboard
    trackPageView(location.pathname);
  }, [location.pathname]);
}
