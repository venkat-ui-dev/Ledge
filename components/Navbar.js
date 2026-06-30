import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-display font-bold text-xl tracking-tightest text-ink focus-ring rounded"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-ink text-amber font-mono text-sm">
            ₸
          </span>
          Ledge
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-ink transition-colors focus-ring rounded"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-ink/70 hover:text-ink transition-colors focus-ring rounded px-2 py-2"
          >
            Log in
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold bg-ink text-paper rounded-lg px-4 py-2.5 hover:bg-ink-soft transition-colors focus-ring"
          >
            Start free trial
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-ink focus-ring rounded p-1"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/10 px-6 py-4 flex flex-col gap-4 bg-paper">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-ink text-paper rounded-lg px-4 py-2.5 text-center"
          >
            Start free trial
          </a>
        </div>
      )}
    </header>
  );
}
