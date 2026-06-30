import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sent
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Demo-only: this portfolio build has no backend wired up.
    // In production this would POST to an API route or email service.
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-paper">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-amber-dark mb-4">
            Questions before you start
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink tracking-tightest">
            Talk to the team, not a chatbot.
          </h2>
          <p className="mt-4 text-ink/65 max-w-md leading-relaxed">
            Tell us what you're billing for and how you work — we'll tell you
            honestly whether Ledge is a fit, and help you get your first
            invoice out today.
          </p>

          <a
            href="mailto:hello@ledge.app"
            className="mt-8 inline-flex items-center gap-2 text-ink font-medium hover:text-amber-dark transition-colors focus-ring rounded px-1 py-1"
          >
            <Mail size={18} /> hello@ledge.app
          </a>
        </div>

        <div className="bg-paper-dim rounded-2xl p-7 sm:p-8">
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="h-12 w-12 rounded-full bg-teal/15 text-teal flex items-center justify-center mb-4">
                <Mail size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink">
                Message sent
              </h3>
              <p className="text-ink/60 mt-2 max-w-xs">
                Thanks, {form.name || "there"} — we'll reply at {form.email}{" "}
                within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ink/80 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-ink placeholder:text-ink/35 focus-ring"
                  placeholder="Jordan Lee"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink/80 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-ink placeholder:text-ink/35 focus-ring"
                  placeholder="jordan@studio.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-ink/80 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-2.5 text-ink placeholder:text-ink/35 focus-ring resize-none"
                  placeholder="What are you billing clients for right now?"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold rounded-lg px-5 py-3 hover:bg-ink-soft transition-colors focus-ring"
              >
                Send message <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
