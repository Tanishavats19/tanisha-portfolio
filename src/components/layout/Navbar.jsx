import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-ink)]"
        >
          Tanisha
        </Link>

        <ul className="flex items-center gap-7 text-sm font-medium text-[var(--color-muted)]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              
              <a
                href={isHome ? link.href : `/${link.href}`}
                className="transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={isHome ? "#contact" : "/#contact"}
          className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}