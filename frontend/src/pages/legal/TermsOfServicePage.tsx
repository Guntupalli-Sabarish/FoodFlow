import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import { ScrollText, ChevronRight } from "lucide-react";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="space-y-3 scroll-mt-24">
    <h2 className="text-lg font-bold text-foreground border-l-4 border-brand-500 pl-4">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-2 pl-4">{children}</div>
  </section>
);

const toc = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "accounts", label: "User Accounts" },
  { id: "orders", label: "Orders & Payments" },
  { id: "restaurant-liability", label: "Restaurant Liability" },
  { id: "prohibited", label: "Prohibited Conduct" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "termination", label: "Termination" },
  { id: "limitation", label: "Limitation of Liability" },
  { id: "governing-law", label: "Governing Law" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact" },
];

export const TermsOfServicePage = () => {
  usePageTitle("Terms of Service");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
      {/* Hero */}
      <div className="mb-10 rounded-2xl border border-border bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-8 flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/15">
          <ScrollText className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: <strong>September 26, 2026</strong> · Effective: September 26, 2026
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
            Please read these Terms of Service carefully before using FoodFlow. By accessing or using our platform, you
            agree to be bound by these terms.
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
                <ChevronRight className="h-3 w-3 text-blue-500" />
                {label}
              </a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-10">
          <Section id="acceptance" title="1. Acceptance of Terms">
            <p>
              By registering for an account, placing an order, or otherwise using the FoodFlow platform
              ("Service"), you agree to these Terms of Service ("Terms") and our{" "}
              <Link to="/privacy-policy" className="text-brand-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              If you do not agree to these Terms, you must not use FoodFlow. By signing up with Google OAuth, you also
              confirm that you are at least 18 years of age.
            </p>
          </Section>

          <Section id="accounts" title="2. User Accounts">
            <p>
              FoodFlow uses Google OAuth 2.0 for authentication. You are responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Maintaining the security of your Google account credentials</li>
              <li>All activity that occurs under your FoodFlow account</li>
              <li>Providing accurate and current delivery address information</li>
              <li>Notifying us immediately of any unauthorised use of your account</li>
            </ul>
            <p>
              You may not transfer or share your account with another person. We reserve the right to suspend or
              terminate accounts that violate these Terms.
            </p>
          </Section>

          <Section id="orders" title="3. Orders & Payments">
            <p>When you place an order through FoodFlow:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Your order is a binding offer to purchase food items from the selected restaurant at the displayed
                price.
              </li>
              <li>
                All prices include applicable GST (Goods and Services Tax) as displayed at checkout. No additional
                hidden charges will apply.
              </li>
              <li>
                Currently, only Cash on Delivery (COD) is accepted. Online payment methods will be introduced in a
                future update.
              </li>
              <li>
                We reserve the right to cancel orders in cases of item unavailability, pricing errors, or suspected
                fraud, with a full refund where applicable.
              </li>
            </ul>
            <p>
              For our refund and cancellation policy, see our{" "}
              <Link to="/refund-policy" className="text-brand-600 hover:underline">
                Refund Policy
              </Link>
              .
            </p>
          </Section>

          <Section id="restaurant-liability" title="4. Restaurant Liability">
            <p>
              FoodFlow is a technology platform that connects customers with independent restaurants. FoodFlow is
              not responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The quality, safety, or accuracy of food items prepared by restaurants</li>
              <li>Allergen information — always contact the restaurant directly for allergen queries</li>
              <li>Delays or failures in delivery caused by restaurant preparation times or external factors</li>
              <li>Any food-borne illness or adverse reactions to food items</li>
            </ul>
            <p>
              Restaurants listed on FoodFlow are independently operated businesses responsible for food safety and
              compliance with FSSAI regulations.
            </p>
          </Section>

          <Section id="prohibited" title="5. Prohibited Conduct">
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use FoodFlow for any unlawful purpose or in violation of any regulations</li>
              <li>Attempt to gain unauthorised access to any part of the platform</li>
              <li>Submit false, misleading, or fraudulent orders</li>
              <li>Harass, abuse, or threaten restaurant staff or delivery personnel</li>
              <li>Circumvent, disable, or interfere with security-related features of the Service</li>
              <li>Use automated tools (bots, scrapers) to access or interact with the platform without permission</li>
            </ul>
          </Section>

          <Section id="intellectual-property" title="6. Intellectual Property">
            <p>
              All content on FoodFlow — including the logo, design, software, and text — is owned by FoodFlow or
              its licensors and is protected under applicable intellectual property laws. You may not copy,
              reproduce, or distribute any content without our prior written consent.
            </p>
          </Section>

          <Section id="termination" title="7. Termination">
            <p>
              We may suspend or terminate your access to FoodFlow at any time, with or without notice, if we
              reasonably believe you have violated these Terms. You may delete your account at any time through your{" "}
              <Link to="/profile" className="text-brand-600 hover:underline">
                Profile page
              </Link>
              .
            </p>
          </Section>

          <Section id="limitation" title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, FoodFlow and its officers, directors, employees,
              and agents shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the Service, including but not limited to loss of data, profits, or
              goodwill.
            </p>
            <p>
              Our total liability for any claim arising from these Terms shall not exceed the amount you paid to
              FoodFlow in the 90 days preceding the claim.
            </p>
          </Section>

          <Section id="governing-law" title="9. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any disputes
              arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in
              Vijayawada, Andhra Pradesh, India.
            </p>
          </Section>

          <Section id="changes" title="10. Changes to Terms">
            <p>
              We may update these Terms from time to time. We will notify you of significant changes by email or by
              displaying a prominent notice on the platform. Your continued use of FoodFlow after changes take
              effect constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section id="contact" title="11. Contact">
            <p>If you have questions about these Terms, please contact us:</p>
            <div className="rounded-xl border border-border bg-card p-4 space-y-1 text-sm">
              <p className="font-semibold text-foreground">FoodFlow Legal</p>
              <p>FoodFlow HQ, Vijayawada, Andhra Pradesh 520001, India</p>
              <p>
                Email:{" "}
                <a href="mailto:legal@foodflow.app" className="text-brand-600 hover:underline">
                  legal@foodflow.app
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
