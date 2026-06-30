import { useEffect, useState } from "react";
import { Play } from "lucide-react";

const HOURLY_RATE = 65;
const START_SECONDS = 2 * 3600 + 41 * 60 + 12; // 02:41:12 already on the clock

function formatClock(totalSeconds) {
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(Math.floor(totalSeconds % 60)).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function formatCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function Hero() {
  const [seconds, setSeconds] = useState(START_SECONDS);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const earned = (seconds / 3600) * HOURLY_RATE;

  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: headline */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-amber-dark mb-5">
            Built for freelance devs &amp; designers
          </p>
          <h1 className="font-display font-bold text-ink leading-[1.05] tracking-tightest text-4xl sm:text-5xl md:text-[3.4rem]">
            Track time.
            <br />
            Send invoices.
            <br />
            Get paid.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-md leading-relaxed">
            Ledge turns your tracked hours into a branded invoice in one
            click — so the time you spend on paperwork goes back to billable
            work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="bg-ink text-paper font-semibold rounded-lg px-6 py-3.5 hover:bg-ink-soft transition-colors focus-ring"
            >
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-ink/80 font-medium hover:text-ink transition-colors focus-ring rounded px-2 py-3.5"
            >
              <Play size={16} className="text-amber-dark" /> See how it works
            </a>
          </div>

          <p className="mt-8 text-sm text-ink/50">
            No credit card required · Free for your first client
          </p>
        </div>

        {/* Right: signature live invoice card */}
        <div className="relative">
          <div className="hidden md:block absolute -top-6 -right-6 h-full w-full rounded-2xl bg-ink-line/60 rotate-3" />
          <div className="relative bg-ink text-paper rounded-2xl p-7 shadow-xl">
            <div className="flex items-center justify-between border-b border-paper/15 pb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-paper/50">
                  Running timer
                </p>
                <p className="font-semibold mt-1">Website redesign</p>
                <p className="text-sm text-paper/50">Client: Aster Studio</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal bg-teal/10 rounded-full px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-6">
              <div>
                <p className="text-xs text-paper/50 mb-1">Time on clock</p>
                <p className="font-mono text-2xl tabular-nums">
                  {formatClock(seconds)}
                </p>
              </div>
              <div>
                <p className="text-xs text-paper/50 mb-1">Amount earned</p>
                <p className="font-mono text-2xl tabular-nums text-amber-light">
                  {formatCurrency(earned)}
                </p>
              </div>
            </div>

            <div className="border-t border-paper/15 pt-4 flex items-center justify-between text-sm">
              <span className="text-paper/50">Rate: ${HOURLY_RATE}/hr</span>
              <span className="text-paper/70 font-medium">
                Auto-invoiced on stop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
