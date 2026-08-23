import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-ink)]"
        >
          Tanisha
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 text-sm font-medium text-[var(--color-muted)] sm:flex">
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

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 sm:flex">
          
          <a
            href="https://github.com/Tanishavats19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            Let's talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-[var(--color-muted)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                
                <a
                  href={isHome ? link.href : `/${link.href}`}
                  className="block transition-colors hover:text-[var(--color-accent)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              
              <a
                href={isHome ? "#contact" : "/#contact"}
                className="block transition-colors hover:text-[var(--color-accent)]"
                onClick={() => setMenuOpen(false)}
              >
                Let's talk
              </a>
            </li>
            <li>
              
              <a
                href="https://github.com/Tanishavats19"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-[var(--color-accent)]"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}