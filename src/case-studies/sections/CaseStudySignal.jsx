export default function CaseStudySignal({ initialSignal }) {
  const featured = initialSignal.metrics.find((m) => m.featured);
  const supporting = initialSignal.metrics.filter((m) => !m.featured);

  return (
    <section id="cs-signal" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          05 — The Initial Signal
        </span>

        {/* Featured metric */}
        <div className="mt-12 rounded-2xl bg-[#1E1525] px-8 py-12 text-center">
          <p className="font-[var(--font-display)] text-7xl font-semibold text-white sm:text-8xl">
            {featured.value}
          </p>
          <p className="mt-2 text-sm uppercase tracking-widest text-[#a89bb5]">
            {featured.label}
          </p>

          {/* Supporting metrics */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {supporting.map((metric) => (
              <div key={metric.label}>
                <p className="font-[var(--font-display)] text-2xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-[#a89bb5]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hypotheses */}
        <div className="mt-14">
          <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Why I think it worked
          </h3>

          <ul className="mt-6 space-y-4">
            {initialSignal.hypotheses.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span className="text-[var(--color-ink)]">{h}</span>
              </li>
            ))}
          </ul>

          {/* Caveat */}
          <p className="mt-8 rounded-xl bg-[var(--color-accent-soft)]/40 px-5 py-4 text-sm text-[var(--color-muted)]">
            {initialSignal.caveat}
          </p>
        </div>
      </div>
    </section>
  );
}