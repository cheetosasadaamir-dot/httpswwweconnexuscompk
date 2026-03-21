import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export function usePageTracking() {
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    supabase.from("page_views").insert({
      page: location.pathname,
      user_id: user?.id ?? null,
    });
  }, [location.pathname, user?.id]);
}
