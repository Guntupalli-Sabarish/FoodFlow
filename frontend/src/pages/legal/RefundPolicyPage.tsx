import { usePageTitle } from "@/hooks/usePageTitle";
import { Link } from "react-router-dom";
import { RefreshCw, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="space-y-3 scroll-mt-24">
    <h2 className="text-lg font-bold text-foreground border-l-4 border-emerald-500 pl-4">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-2 pl-4">{children}</div>
  </section>
);

const toc = [
  { id: "eligibility", label: "Eligibility for Refund" },
  { id: "non-refundable", label: "Non-Refundable Scenarios" },
  { id: "how-to-request", label: "How to Request a Refund" },
  { id: "process", label: "Refund Process & Timeline" },
  { id: "cancellations", label: "Order Cancellations" },
  { id: "contact", label: "Contact Support" },
];

export const RefundPolicyPage = () => {
  usePageTitle("Refund Policy");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
      {/* Hero */}
      <div className="mb-10 rounded-2xl border border-border bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-8 flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-emerald-500/15">
          <RefreshCw className="h-6 w-6 text-emerald-500" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-foreground mb-2">Refund Policy</h1>
          <p className="text-muted-foreground text-sm">
            Last updated: <strong>September 26, 2026</strong> · Effective: September 26, 2026
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">
            We want every FoodFlow experience to be excellent. If something goes wrong with your order, we are here
            to make it right. This policy explains when and how refunds are issued.
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
                <ChevronRight className="h-3 w-3 text-emerald-500" />
                {label}
              </a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-10">
          {/* Quick summary cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">When you ARE eligible</p>
              </div>
              <ul className="text-xs text-emerald-700 dark:text-emerald-400 space-y-1">
                <li>• Wrong item delivered</li>
                <li>• Missing items in your order</li>
                <li>• Order never arrived</li>
                <li>• Food quality was unacceptable</li>
                <li>• Cancelled within 5 minutes of placing</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <p className="text-sm font-bold text-red-800 dark:text-red-300">When you are NOT eligible</p>
              </div>
              <ul className="text-xs text-red-700 dark:text-red-400 space-y-1">
                <li>• Change of mind after preparation starts</li>
                <li>• Incorrect address provided by you</li>
                <li>• Delays due to extreme weather</li>
                <li>• Perishable items once delivered</li>
                <li>• Complaints not raised within 24 hours</li>
              </ul>
            </div>
          </div>

          <Section id="eligibility" title="1. Eligibility for Refund">
            <p>You may be eligible for a full or partial refund in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Wrong item received:</strong> You received an item different from what you ordered.
              </li>
              <li>
                <strong>Missing items:</strong> One or more ordered items were absent from your delivery.
              </li>
              <li>
                <strong>Order not delivered:</strong> Your order was marked as delivered but you did not receive it.
              </li>
              <li>
                <strong>Poor food quality:</strong> The food was spoiled, contaminated, or significantly different
                from its description (photographic evidence may be requested).
              </li>
              <li>
                <strong>Restaurant cancellation:</strong> The restaurant cancelled your order due to unavailability or
                operational issues.
              </li>
              <li>
                <strong>Technical error:</strong> A duplicate charge occurred due to a platform error.
              </li>
            </ul>
            <p>
              Refund requests must be submitted within <strong>24 hours</strong> of the scheduled delivery time.
            </p>
          </Section>

          <Section id="non-refundable" title="2. Non-Refundable Scenarios">
            <p>Refunds will <strong>not</strong> be issued for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Change of mind after the restaurant has accepted and begun preparing your order (typically within 5
                minutes of order placement)
              </li>
              <li>Incorrect delivery address provided by the customer</li>
              <li>Delivery delays caused by extreme weather conditions, traffic, or other force majeure events</li>
              <li>
                Preference-based complaints (e.g., "not as spicy as I like") when the item matched its description
              </li>
              <li>Items fully consumed before a complaint is raised</li>
              <li>Complaints submitted more than 24 hours after the delivery</li>
            </ul>
          </Section>

          <Section id="how-to-request" title="3. How to Request a Refund">
            <p>To request a refund:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Go to your{" "}
                <Link to="/orders" className="text-brand-600 hover:underline">
                  Order History
                </Link>{" "}
                page.
              </li>
              <li>Select the affected order and click "Report an Issue".</li>
              <li>Choose the issue type and provide a brief description.</li>
              <li>Upload photos if requested (especially for quality issues).</li>
              <li>Submit — our support team will review and respond within 24 hours.</li>
            </ol>
            <p>
              Alternatively, contact us at{" "}
              <a href="mailto:support@foodflow.app" className="text-brand-600 hover:underline">
                support@foodflow.app
              </a>{" "}
              with your order ID.
            </p>
          </Section>

          <Section id="process" title="4. Refund Process & Timeline">
            <p>Once your refund request is approved:</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Payment Method</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Refund Method</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Cash on Delivery (COD)</td>
                    <td className="px-4 py-3">FoodFlow Wallet Credit</td>
                    <td className="px-4 py-3">Within 24 hours of approval</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Online Payment (future)</td>
                    <td className="px-4 py-3">Original payment method</td>
                    <td className="px-4 py-3">5–7 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Currently, FoodFlow only supports Cash on Delivery. COD refunds are issued as platform credit which can
              be applied to future orders.
            </p>
          </Section>

          <Section id="cancellations" title="5. Order Cancellations">
            <p>
              You may cancel an order within <strong>5 minutes</strong> of placing it, provided the restaurant has
              not yet accepted it. To cancel:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                Go to{" "}
                <Link to="/orders" className="text-brand-600 hover:underline">
                  Order History
                </Link>
                .
              </li>
              <li>Select the active order.</li>
              <li>Click "Cancel Order" if the option is still available.</li>
            </ol>
            <p>
              Once the restaurant begins preparation, cancellation is not possible. If you experience difficulties,
              contact support immediately.
            </p>
          </Section>

          <Section id="contact" title="6. Contact Support">
            <p>Our support team is available every day from 9 AM – 10 PM IST:</p>
            <div className="rounded-xl border border-border bg-card p-4 space-y-1 text-sm">
              <p className="font-semibold text-foreground">FoodFlow Customer Support</p>
              <p>
                Email:{" "}
                <a href="mailto:support@foodflow.app" className="text-brand-600 hover:underline">
                  support@foodflow.app
                </a>
              </p>
              <p>Phone: 1800-123-FOOD (Toll-free, India)</p>
            </div>
          </Section>

          {/* Related links */}
          <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-2">
            <p className="text-sm font-bold text-foreground">Related policies</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/terms-of-service" className="text-sm text-brand-600 hover:underline">
                Terms of Service →
              </Link>
              <Link to="/privacy-policy" className="text-sm text-brand-600 hover:underline">
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
