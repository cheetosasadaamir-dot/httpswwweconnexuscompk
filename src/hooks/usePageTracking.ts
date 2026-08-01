import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { trackPageView } from "@/lib/analytics";

let geoCache: { city: string | null; country: string | null } | null = null;
let geoPromise: Promise<{ city: string | null; country: string | null }> | null = null;

function fetchGeo(): Promise<{ city: string | null; country: string | null }> {
  if (geoCache) return Promise.resolve(geoCache);
  if (geoPromise) return geoPromise;
  geoPromise = supabase.functions.invoke('geo-public')
    .then(({ data, error }) => {
      if (error || !data) {
        geoCache = { city: null, country: null };
      } else {
        geoCache = { city: data.city ?? null, country: data.country ?? null };
      }
      return geoCache;
    })
    .catch(() => {
      geoCache = { city: null, country: null };
      return geoCache;
    });
  return geoPromise;
}

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    fetchGeo().then(geo => {
      // Tracking is performed server-side via a secured edge function
      trackPageView(location.pathname, geo.city, geo.country);
    });
  }, [location.pathname]);
}
