export default function CaseStudyTradeoffs({ tradeoffs }) {
  return (
    <section id="cs-tradeoffs" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          09 — Trade-offs
        </span>

        <p className="mt-3 max-w-xl text-[var(--color-muted)]">
          Every product decision involves trade-offs. These were mine.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {tradeoffs.map((t) => (
            <div
              key={t.left}
              className="rounded-2xl border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/[0.03]"
            >
              {/* Tension pair */}
              <div className="flex items-center gap-3">
                <span className="font-[var(--font-display)] font-semibold text-[var(--color-ink)]">
                  {t.left}
                </span>
                <span className="text-[var(--color-accent-soft)] text-lg">↔</span>
                <span className="font-[var(--font-display)] font-semibold text-[var(--color-ink)]">
                  {t.right}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}