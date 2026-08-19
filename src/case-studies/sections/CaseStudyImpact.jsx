function MetricCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] p-6">
      <p className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-ink)]">
        {value}
      </p>
      <p className="mt-1 text-sm text-[var(--color-muted)]">{label}</p>
    </div>
  );
}

export default function CaseStudyImpact({ impact }) {
  return (
    <section id="cs-impact" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          08 — Impact
        </span>

        {/* Viral */}
        <div className="mt-10">
          <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            The viral spike
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {impact.viral.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>

        {/* Divider with label */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-border)]" />
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
            vs. now
          </span>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>

        {/* Current */}
        <div>
          <h3 className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Current state
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {impact.current.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>

        {/* Recent examples */}
        <div className="mt-10">
          <h3 className="mb-4 font-[var(--font-display)] text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Recent examples
          </h3>
          <div className="space-y-3">
            {impact.examples.map((ex) => (
              <div
                key={ex.label}
                className="flex items-center justify-between border-b border-[var(--color-border)] pb-3"
              >
                <span className="text-[var(--color-ink)]">{ex.label}</span>
                <span className="text-sm font-medium text-[var(--color-accent)]">
                  {ex.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Honesty note */}
        <p className="mt-10 border-l-2 border-[var(--color-accent-soft)] pl-5 text-[var(--color-muted)]">
          {impact.honesty}
        </p>
      </div>
    </section>
  );
}