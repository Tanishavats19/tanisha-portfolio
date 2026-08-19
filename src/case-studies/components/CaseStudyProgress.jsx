import { useState, useEffect } from "react";

const SECTIONS = [
    { id: "cs-hero", label: "Overview" },
  { id: "cs-context", label: "Context" },
  { id: "cs-opportunity", label: "Opportunity" },
  { id: "cs-audience", label: "Audience" },
  { id: "cs-goals", label: "Goals" },
  { id: "cs-signal", label: "Initial Signal" },
  { id: "cs-experiments", label: "Experimentation" },
  { id: "cs-insight", label: "Key Insight" },
  { id: "cs-impact", label: "Impact" },
  { id: "cs-tradeoffs", label: "Trade-offs" },
  { id: "cs-next", label: "Next Steps" },
  { id: "cs-takeaway", label: "PM Takeaway" },
];

export default function CaseStudyProgress() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Top progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active section dot
      const offsets = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      const current = offsets
        .filter((s) => s.top <= window.innerHeight * 0.4)
        .at(-1);

      setActiveSection(current?.id ?? null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full bg-[var(--color-border)]">
        <div
          className="h-full bg-[var(--color-accent)] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Side dots */}
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              title={label}
              className="group relative flex items-center justify-end gap-2"
            >
              {/* Tooltip label */}
              <span className="pointer-events-none absolute right-5 whitespace-nowrap rounded-md bg-[var(--color-ink)] px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>

              {/* Dot */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-2.5 w-2.5 bg-[var(--color-accent)]"
                    : "h-1.5 w-1.5 bg-[var(--color-border)] group-hover:bg-[var(--color-muted)]"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}