import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    supabase.rpc('track_page_view', { _page: location.pathname });
  }, [location.pathname]);
}
