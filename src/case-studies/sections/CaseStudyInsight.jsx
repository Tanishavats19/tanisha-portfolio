export default function CaseStudyInsight({ keyInsight }) {
  return (
    <section id="cs-insight" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          07 — Key Insight
        </span>

        {/* Main statement */}
        <p className="mt-10 font-[var(--font-display)] text-3xl font-semibold leading-snug text-[var(--color-ink)] sm:text-4xl">
          {keyInsight.statement}
        </p>

        {/* Breakdown */}
        <div className="mt-8 rounded-2xl border border-[var(--color-accent)]/10 bg-[var(--color-accent)]/[0.06] px-7 py-6">
          <p className="leading-relaxed text-[var(--color-ink)]">
            {keyInsight.breakdown}
          </p>
        </div>

        {/* Constraint */}
        <p className="mt-8 text-lg leading-relaxed text-[var(--color-muted)]">
          {keyInsight.constraint}
        </p>

        {/* Framework */}
        <div className="mt-14">
          <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            The current strategy
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {keyInsight.framework.map((item, index) => {
              const opacity = [1, 0.7, 0.5, 0.3][index];
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border-l-4 bg-[var(--color-bg)] p-6 shadow-sm"
                  style={{ borderLeftColor: `rgba(91, 58, 100, ${opacity})` }}
                >
                  <p className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
