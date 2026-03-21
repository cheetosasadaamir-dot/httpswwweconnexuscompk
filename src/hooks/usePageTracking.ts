import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    supabase.from("page_views").insert({
      page: location.pathname,
      user_id: null,
    });
  }, [location.pathname]);
}
