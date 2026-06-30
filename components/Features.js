import { Timer, FileText, Users, BellRing } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "One-click time tracking",
    description:
      "Start a timer per project and switch tasks without losing a second. Every entry lands in the right invoice automatically.",
  },
  {
    icon: FileText,
    title: "Invoices that build themselves",
    description:
      "Tracked hours turn into a branded, line-itemed invoice the moment you stop the clock. No manual entry, no math.",
  },
  {
    icon: Users,
    title: "A portal your clients actually use",
    description:
      "Clients see project status, approve hours, and pay online from a single link — no account or password required.",
  },
  {
    icon: BellRing,
    title: "Reminders, not awkward emails",
    description:
      "Ledge follows up on overdue invoices on a schedule you set, so you're never the one sending the 'just checking in' message.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-paper-dim">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-dark mb-4">
            What Ledge does
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink tracking-tightest">
            Everything between &ldquo;clock in&rdquo; and &ldquo;paid in
            full.&rdquo;
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-paper rounded-xl p-7 border border-ink/8 hover:border-amber/40 transition-colors"
            >
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-ink text-amber mb-5">
                <Icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {title}
              </h3>
              <p className="text-ink/65 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
