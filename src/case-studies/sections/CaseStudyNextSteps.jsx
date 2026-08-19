export default function CaseStudyNextSteps({ nextSteps }) {
  return (
    <section id="cs-next" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          10 — What I'd Do Next
        </span>

        <p className="mt-3 max-w-xl text-[var(--color-muted)]">
          Forward-looking product thinking, based on what the data and experimentation have surfaced so far.
        </p>

        <div className="mt-10 space-y-4">
          {nextSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-6 rounded-2xl border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/[0.03]"
            >
              {/* Step number */}
              <span
                className="font-[var(--font-display)] text-4xl font-semibold shrink-0 leading-none"
                style={{ color: `rgba(91, 58, 100, ${[1, 0.5, 0.25][index]})` }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="font-[var(--font-display)] font-semibold text-[var(--color-ink)]">
                  {step.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}