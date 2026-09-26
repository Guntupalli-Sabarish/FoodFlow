import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import { Cookie, ChevronRight } from "lucide-react";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="space-y-3 scroll-mt-24">
    <h2 className="text-lg font-bold text-foreground border-l-4 border-amber-500 pl-4">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-2 pl-4">{children}</div>
  </section>
);

const toc = [
  { id: "what-are-cookies", label: "What Are Cookies?" },
  { id: "categories", label: "Cookie Categories" },
  { id: "cookies-we-use", label: "Cookies We Use" },
  { id: "third-party-cookies", label: "Third-Party Cookies" },
  { id: "manage-cookies", label: "Managing Your Cookies" },
  { id: "updates", label: "Updates to This Policy" },
  { id: "contact", label: "Contact" },
];

type BadgeProps = { variant: "necessary" | "functional" | "analytics" };
const CategoryBadge = ({ variant }: BadgeProps) => {
  const styles: Record<BadgeProps["variant"], string> = {
    necessary: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    functional: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    analytics: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  };
  const labels: Record<BadgeProps["variant"], string> = {
    necessary: "Strictly Necessary",
    functional: "Functional",
    analytics: "Analytics",
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${styles[variant]}`}>
      {labels[variant]}
    </span>
  );
};

const cookies = [
  {
    name: "SESSION / JWT Token",
    purpose: "Keeps you signed in during your session. Without this, you'd need to sign in on every page.",
    duration: "Session / 7 days",
    category: "necessary" as const,
    setBy: "FoodFlow",
  },
  {
    name: "XSRF-TOKEN",
    purpose: "Cross-site request forgery protection token. Prevents malicious external sites from submitting requests on your behalf.",
    duration: "Session",
    category: "necessary" as const,
    setBy: "FoodFlow",
  },
  {
    name: "cookie-consent",
    purpose: "Stores your cookie consent preferences so we don't show the banner on every visit.",
    duration: "1 year",
    category: "necessary" as const,
    setBy: "FoodFlow",
  },
  {
    name: "theme-preference",
    purpose: "Remembers your chosen light/dark theme preference across sessions.",
    duration: "1 year",
    category: "functional" as const,
    setBy: "FoodFlow (localStorage)",
  },
  {
    name: "G_AUTHUSER_H / Google OAuth",
    purpose: "Set by Google during the sign-in flow. Used to authenticate your Google identity securely.",
    duration: "Session",
    category: "necessary" as const,
    setBy: "Google",
  },
];

export const CookiePolicyPage = () => {
  usePageTitle("Cookie Policy");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
      {/* Hero */}
      <div className="mb-10 rounded-2xl border border-border bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-8 flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-amber-500/15">
          <Cookie className="h-6 w-6 text-amber-500" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-foreground mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: <strong>September 26, 2026</strong> · Effective: September 26, 2026
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
            This Cookie Policy explains what cookies are, which ones FoodFlow uses, and how you can control them.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        {/* Table of Contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-4 space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">On this page</p>
            {toc.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <ChevronRight className="h-3 w-3 text-amber-500" />
                {label}
              </a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-10">
          <Section id="what-are-cookies" title="1. What Are Cookies?">
            <p>
              Cookies are small text files that a website stores on your device (computer, tablet, or phone) when
              you visit. They help the website remember your preferences, keep you logged in, and improve your
              experience.
            </p>
            <p>
              FoodFlow also uses <strong>localStorage</strong> (a browser-based storage mechanism) to store
              preferences like your theme setting. These are not cookies but function similarly.
            </p>
          </Section>

          <Section id="categories" title="2. Cookie Categories">
            <p>We use cookies in the following categories:</p>
            <div className="space-y-3">
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <div className="flex items-center gap-2">
                  <CategoryBadge variant="necessary" />
                  <span className="text-sm font-semibold text-foreground">Strictly Necessary</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Essential for the platform to function. You cannot opt out of these. They include authentication
                  tokens, session management, and security cookies.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <div className="flex items-center gap-2">
                  <CategoryBadge variant="functional" />
                  <span className="text-sm font-semibold text-foreground">Functional</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Remember your preferences (e.g., theme, language) to provide a personalised experience. You can
                  opt out but some features may not work as intended.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 space-y-1">
                <div className="flex items-center gap-2">
                  <CategoryBadge variant="analytics" />
                  <span className="text-sm font-semibold text-foreground">Analytics</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Help us understand how users interact with FoodFlow so we can improve the service. Currently,
                  FoodFlow does <strong>not</strong> use third-party analytics cookies.
                </p>
              </div>
            </div>
          </Section>

          <Section id="cookies-we-use" title="3. Cookies We Use">
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-3 py-3 text-left font-semibold text-foreground">Cookie Name</th>
                    <th className="px-3 py-3 text-left font-semibold text-foreground">Purpose</th>
                    <th className="px-3 py-3 text-left font-semibold text-foreground">Duration</th>
                    <th className="px-3 py-3 text-left font-semibold text-foreground">Category</th>
                    <th className="px-3 py-3 text-left font-semibold text-foreground">Set By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cookies.map((c) => (
                    <tr key={c.name} className="align-top">
                      <td className="px-3 py-3 font-mono font-medium text-foreground whitespace-nowrap">{c.name}</td>
                      <td className="px-3 py-3 text-muted-foreground max-w-[200px]">{c.purpose}</td>
                      <td className="px-3 py-3 text-muted-foreground whitespace-nowrap">{c.duration}</td>
                      <td className="px-3 py-3"><CategoryBadge variant={c.category} /></td>
                      <td className="px-3 py-3 text-muted-foreground whitespace-nowrap">{c.setBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="third-party-cookies" title="4. Third-Party Cookies">
            <p>
              When you sign in with Google, Google may set cookies on your device as part of the OAuth
              authentication flow. These cookies are governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Google's Privacy Policy
              </a>
              .
            </p>
            <p>
              FoodFlow does <strong>not</strong> use advertising cookies, tracking pixels, or marketing SDKs at this
              time.
            </p>
          </Section>

          <Section id="manage-cookies" title="5. Managing Your Cookies">
            <p>You can control and delete cookies through several methods:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Cookie consent banner:</strong> On your first visit, you can accept or decline non-essential
                cookies via the banner at the bottom of the page.
              </li>
              <li>
                <strong>Browser settings:</strong> Most browsers allow you to view, manage, block, and delete cookies.
                See your browser's help section for instructions.
              </li>
              <li>
                <strong>Opt-out tools:</strong> For Google cookies, you can visit{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  Google Account Permissions
                </a>
                .
              </li>
            </ul>
            <p className="text-xs rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 p-3 text-amber-700 dark:text-amber-300 !mt-3">
              ⚠️ Blocking strictly necessary cookies (like session tokens) will prevent you from signing in and
              using FoodFlow.
            </p>
          </Section>

          <Section id="updates" title="6. Updates to This Policy">
            <p>
              We may update this Cookie Policy to reflect changes in our practices or for legal/regulatory reasons.
              The "Last updated" date at the top will reflect any changes. We encourage you to review this page
              periodically.
            </p>
          </Section>

          <Section id="contact" title="7. Contact">
            <p>If you have questions about our cookie practices, contact us:</p>
            <div className="rounded-xl border border-border bg-card p-4 space-y-1 text-sm">
              <p className="font-semibold text-foreground">FoodFlow</p>
              <p>FoodFlow HQ, Vijayawada, Andhra Pradesh 520001, India</p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@foodflow.app" className="text-brand-600 hover:underline">
                  privacy@foodflow.app
                </a>
              </p>
            </div>
          </Section>

          {/* Related links */}
          <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-2">
            <p className="text-sm font-bold text-foreground">Related policies</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/privacy-policy" className="text-sm text-brand-600 hover:underline">
                Privacy Policy →
              </Link>
              <Link to="/terms-of-service" className="text-sm text-brand-600 hover:underline">
                Terms of Service →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
