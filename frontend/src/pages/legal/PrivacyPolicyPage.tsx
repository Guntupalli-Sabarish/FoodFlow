import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import { Shield, ChevronRight } from "lucide-react";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="space-y-3 scroll-mt-24">
    <h2 className="text-lg font-bold text-foreground border-l-4 border-brand-500 pl-4">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-2 pl-4">{children}</div>
  </section>
);

const toc = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "third-parties", label: "Third-Party Services" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "cookies", label: "Cookies" },
  { id: "children", label: "Children's Privacy" },
  { id: "security", label: "Security" },
  { id: "contact", label: "Contact Us" },
];

export const PrivacyPolicyPage = () => {
  usePageTitle("Privacy Policy");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
      {/* Hero */}
      <div className="mb-10 rounded-2xl border border-border bg-gradient-to-br from-brand-500/10 to-brand-500/5 p-8 flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-brand-500/15">
          <Shield className="h-6 w-6 text-brand-500" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: <strong>September 26, 2026</strong> · Effective: September 26, 2026
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
            FoodFlow ("we", "our", "us") is committed to protecting your personal data. This policy explains what
            information we collect, how we use it, and your rights under applicable law including India's Digital
            Personal Data Protection (DPDP) Act, 2023.
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
                <ChevronRight className="h-3 w-3 text-brand-500" />
                {label}
              </a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-10">
          <Section id="information-we-collect" title="1. Information We Collect">
            <p>We collect only the data necessary to provide our food ordering service:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Account information:</strong> Name, email address, and profile picture provided via Google
                OAuth when you register or sign in.
              </li>
              <li>
                <strong>Order data:</strong> Delivery address, order history, and payment method selection (we do not
                store card or bank details).
              </li>
              <li>
                <strong>Device & usage data:</strong> IP address, browser type, pages visited, and timestamps —
                collected automatically through server logs to ensure service security.
              </li>
              <li>
                <strong>Preferences:</strong> Theme settings and notification preferences stored locally on your
                device.
              </li>
            </ul>
            <p>We do <strong>not</strong> collect date of birth, phone number, or payment card details.</p>
          </Section>

          <Section id="how-we-use" title="2. How We Use Your Information">
            <p>We use your personal data only for these purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Creating and managing your FoodFlow account</li>
              <li>Processing and delivering your food orders</li>
              <li>Sending order confirmation and status notifications to your email</li>
              <li>Preventing fraud and maintaining the security of our platform</li>
              <li>Complying with applicable legal obligations</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal data to any third party for marketing
              purposes.
            </p>
          </Section>

          <Section id="third-parties" title="3. Third-Party Services">
            <p>FoodFlow uses the following third-party processors that may handle your personal data:</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Service</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Data Shared</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Google OAuth 2.0</td>
                    <td className="px-4 py-3">Authentication &amp; sign-in</td>
                    <td className="px-4 py-3">Name, email, profile photo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Vercel</td>
                    <td className="px-4 py-3">Frontend hosting</td>
                    <td className="px-4 py-3">IP address, request logs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Google's use of data is governed by the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </Section>

          <Section id="data-retention" title="4. Data Retention">
            <p>We retain your personal data for as long as your account is active or as needed to provide services.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Account data: retained until you delete your account</li>
              <li>Order history: retained for 3 years for legal and dispute resolution purposes</li>
              <li>Server logs: retained for 90 days, then automatically purged</li>
            </ul>
            <p>
              You may request deletion of your account and all associated data at any time via your{" "}
              <Link to="/profile" className="text-brand-600 hover:underline">
                Profile page
              </Link>
              .
            </p>
          </Section>

          <Section id="your-rights" title="5. Your Rights">
            <p>
              Under the Digital Personal Data Protection (DPDP) Act, 2023 (India) and other applicable laws, you have
              the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we hold about you
              </li>
              <li>
                <strong>Correct:</strong> Update inaccurate or incomplete personal data
              </li>
              <li>
                <strong>Delete:</strong> Request erasure of your personal data ("right to be forgotten")
              </li>
              <li>
                <strong>Withdraw consent:</strong> Revoke any consent you have given at any time
              </li>
              <li>
                <strong>Grievance redressal:</strong> Lodge a complaint with our Data Protection Officer
              </li>
            </ul>
            <p>
              To exercise these rights, visit your{" "}
              <Link to="/profile" className="text-brand-600 hover:underline">
                Profile &amp; Settings
              </Link>{" "}
              or email us at{" "}
              <a href="mailto:privacy@foodflow.app" className="text-brand-600 hover:underline">
                privacy@foodflow.app
              </a>
              .
            </p>
          </Section>

          <Section id="cookies" title="6. Cookies">
            <p>
              We use cookies to maintain your session and remember your preferences. See our full{" "}
              <Link to="/cookie-policy" className="text-brand-600 hover:underline">
                Cookie Policy
              </Link>{" "}
              for details and opt-out options.
            </p>
          </Section>

          <Section id="children" title="7. Children's Privacy">
            <p>
              FoodFlow is not intended for children under 18 years of age. We do not knowingly collect personal data
              from children. If you believe a child has provided us with their data, please contact us immediately and
              we will delete it.
            </p>
          </Section>

          <Section id="security" title="8. Security">
            <p>
              We implement industry-standard security measures including HTTPS encryption, rate limiting, and
              JWT-based authentication to protect your data. However, no method of transmission over the internet is
              100% secure.
            </p>
          </Section>

          <Section id="contact" title="9. Contact Us">
            <p>For any privacy-related queries or to exercise your rights, contact our Data Protection Officer:</p>
            <div className="rounded-xl border border-border bg-card p-4 space-y-1 text-sm">
              <p className="font-semibold text-foreground">FoodFlow — Data Protection Officer</p>
              <p>FoodFlow HQ, Vijayawada, Andhra Pradesh 520001, India</p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@foodflow.app" className="text-brand-600 hover:underline">
                  privacy@foodflow.app
                </a>
              </p>
            </div>
            <p>
              You may also contact us via{" "}
              <a href="mailto:support@foodflow.app" className="text-brand-600 hover:underline">
                support@foodflow.app
              </a>{" "}
              for general support queries.
            </p>
          </Section>

          {/* Related links */}
          <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-2">
            <p className="text-sm font-bold text-foreground">Related policies</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/terms-of-service" className="text-sm text-brand-600 hover:underline">
                Terms of Service →
              </Link>
              <Link to="/cookie-policy" className="text-sm text-brand-600 hover:underline">
                Cookie Policy →
              </Link>
              <Link to="/refund-policy" className="text-sm text-brand-600 hover:underline">
                Refund Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
