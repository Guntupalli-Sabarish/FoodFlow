import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "foodflow-cookie-consent";

type ConsentValue = "accepted" | "declined" | null;

export const CookieConsentBanner = () => {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [visible, setVisible] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);

  // Read stored preference on mount
  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
    if (!stored) {
      // Delay banner slightly so page content loads first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
    setConsent(stored);
  }, []);

  // When banner appears, focus the accept button for keyboard users
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => acceptRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [visible]);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  if (!visible || consent !== null) return null;

  return (
    <>
      {/* Backdrop blur for mobile */}
      <div
        className="fixed inset-0 z-[998] bg-black/10 backdrop-blur-[2px] lg:hidden"
        aria-hidden="true"
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Cookie consent"
        aria-describedby="cookie-consent-description"
        className="fixed bottom-0 left-0 right-0 z-[999] animate-slide-up"
      >
        <div className="mx-auto max-w-5xl px-4 pb-4 sm:pb-6">
          <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 dark:shadow-black/50 overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 via-orange-400 to-brand-500" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5">
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center h-11 w-11 rounded-xl bg-brand-500/10">
                <Cookie className="h-5 w-5 text-brand-500" aria-hidden="true" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">We use cookies 🍪</p>
                <p
                  id="cookie-consent-description"
                  className="text-xs text-muted-foreground mt-0.5 leading-relaxed"
                >
                  We use strictly necessary cookies to keep you signed in and secure. We do not use advertising or
                  tracking cookies.{" "}
                  <Link
                    to="/cookie-policy"
                    className="text-brand-600 dark:text-brand-400 hover:underline font-medium"
                    onClick={() => setVisible(false)}
                  >
                    Learn more →
                  </Link>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecline}
                  id="cookie-consent-decline"
                  className="flex-1 sm:flex-none rounded-xl border-border text-muted-foreground hover:text-foreground hover:bg-secondary focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  Decline optional
                </Button>
                <Button
                  ref={acceptRef}
                  size="sm"
                  onClick={handleAccept}
                  id="cookie-consent-accept"
                  className="flex-1 sm:flex-none rounded-xl btn-brand-gradient border-0 text-white font-semibold focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  Accept all
                </Button>
              </div>

              {/* Dismiss (keyboard & screen reader) */}
              <button
                onClick={handleDecline}
                aria-label="Close cookie banner"
                id="cookie-consent-close"
                className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/** Returns the stored consent value for use in other components */
export const getCookieConsent = (): ConsentValue => {
  try {
    return localStorage.getItem(CONSENT_KEY) as ConsentValue;
  } catch {
    return null;
  }
};
