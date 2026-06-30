import { Check } from "lucide-react";

const tiers = [
  {
    name: "Solo",
    price: "$0",
    period: "forever",
    description: "For sending your first few invoices.",
    features: [
      "1 active client",
      "Unlimited time tracking",
      "Basic invoice templates",
      "Manual payment reminders",
    ],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Freelancer",
    price: "$9",
    period: "per month",
    description: "For running your freelance business solo.",
    features: [
      "Unlimited clients",
      "Recurring & retainer invoices",
      "Automatic payment reminders",
      "Client approval portal",
      "Branded PDF exports",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$24",
    period: "per month",
    description: "For small teams billing under one brand.",
    features: [
      "Everything in Freelancer",
      "Up to 5 team seats",
      "Project-level profitability reports",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-amber mb-4">
            Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-paper tracking-tightest">
            Priced like a tool that pays for itself.
          </h2>
          <p className="mt-4 text-paper/60">
            Every plan includes unlimited time tracking. Upgrade when you're
            ready to automate the billing side.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-7 flex flex-col ${
                tier.highlighted
                  ? "bg-ink-soft border-2 border-amber relative"
                  : "bg-ink-soft border border-ink-line"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-7 bg-amber text-ink text-xs font-semibold rounded-full px-3 py-1">
                  Most popular
                </span>
              )}
              <h3 className="font-display font-semibold text-lg text-paper">
                {tier.name}
              </h3>
              <p className="text-sm text-paper/55 mt-1">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-4xl font-semibold text-paper">
                  {tier.price}
                </span>
                <span className="text-paper/50 text-sm">{tier.period}</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-paper/75"
                  >
                    <Check
                      size={16}
                      className="text-teal mt-0.5 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 text-center rounded-lg px-4 py-3 font-semibold text-sm transition-colors focus-ring ${
                  tier.highlighted
                    ? "bg-amber text-ink hover:bg-amber-light"
                    : "bg-paper/10 text-paper hover:bg-paper/15"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
