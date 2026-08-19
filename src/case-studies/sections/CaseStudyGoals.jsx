export default function CaseStudyGoals({ goals }) {
  return (
    <section id="cs-goals" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          04 — Goals
        </span>

        <p className="mt-3 text-sm text-[var(--color-muted)]">
          The goal evolved meaningfully over time - which is part of the story.
        </p>

        <div className="mt-10 relative">
          {/* Vertical connector line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]" />

          <div className="space-y-10">
            {goals.map((goal, index) => (
              <div key={goal.stage} className="relative flex gap-6">
                {/* Dot */}
                <span
                  className={`mt-1 h-4 w-4 shrink-0 rounded-full border-2 ${
                    index === goals.length - 1
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg)]"
                  }`}
                />
                <div>
                  <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
                    {goal.stage}
                  </span>
                  <p className="mt-1 text-[var(--color-ink)]">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}