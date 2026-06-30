const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Privacy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2">
          <p className="font-display font-bold text-xl text-paper tracking-tightest mb-3">
            Ledge
          </p>
          <p className="text-paper/55 max-w-xs text-sm leading-relaxed">
            Time tracking and invoicing for freelance developers and
            designers who'd rather build than do paperwork.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-paper text-sm font-semibold mb-4">
              {col.title}
            </p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-paper/55 hover:text-paper transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-ink-line">
        <p className="max-w-6xl mx-auto px-6 py-6 text-xs text-paper/40">
          © {new Date().getFullYear()} Ledge. Built as a portfolio
          demonstration project.
        </p>
      </div>
    </footer>
  );
}
