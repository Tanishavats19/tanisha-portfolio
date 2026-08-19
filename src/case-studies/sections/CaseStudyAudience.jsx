function StatBar({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-[var(--color-ink)]">{label}</span>
        <span className="font-medium text-[var(--color-accent)]">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
        <div
          className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function CaseStudyAudience({ audience }) {
  return (
    <section id="cs-audience" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          03 — Audience
        </span>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {/* Who was there */}
          <div>
            <h3 className="mb-4 font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              Who was there
            </h3>
            <ul className="space-y-2">
              {audience.whoWasThere.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[var(--color-ink)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-soft)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Who I wanted */}
          <div>
            <h3 className="mb-4 font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              Who I wanted to attract
            </h3>
            <ul className="space-y-2">
              {audience.whoIWanted.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[var(--color-ink)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 space-y-5">
          <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Current audience data
          </h3>
          {audience.stats.map((stat) => (
            <StatBar key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}