import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdUnitProps {
  /** AdSense ad slot ID. */
  slot: string;
  /** AdSense ad format, defaults to "auto". */
  format?: string;
  className?: string;
}

/**
 * The single AdSense placement component for the app.
 * Remounts on route change so ads refill after client-side navigation.
 */
const AdUnit = ({ slot, format = "auto", className }: AdUnitProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers and offline previews can throw here; ads are non-critical.
    }
  }, [pathname, slot]);

  return (
    <ins
      key={`${pathname}-${slot}`}
      className={cn("adsbygoogle block", className)}
      style={{ display: "block" }}
      data-ad-client="ca-pub-5959032628361233"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
};

export default AdUnit;
