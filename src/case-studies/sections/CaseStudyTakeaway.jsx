export default function CaseStudyTakeaway({ takeaway, reflection }) {
  return (
    <>
      {/* PM Takeaway */}
      <section id="cs-takeaway" className="border-t border-[var(--color-border)] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
            11 — PM Takeaway
          </span>

          <p className="mt-3 max-w-xl text-[var(--color-muted)]">
            What this project demonstrates as a product thinker.
          </p>

          <div className="mt-10 space-y-4">
            {takeaway.points.map((point, index) => {
              const [skill, ...rest] = point.split(" — ");
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/[0.03]"
                >
                  <span
                    className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"
                    style={{ opacity: 1 - index * 0.1 }}
                  />
                  <p className="text-sm leading-relaxed text-[var(--color-ink)]">
                    <span className="font-semibold">{skill}</span>
                    {rest.length > 0 && (
                      <span className="text-[var(--color-muted)]"> — {rest.join(" — ")}</span>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reflection + Footer */}
        <section className="border-t border-[var(--color-border)] px-6 py-20">
        <div className="mx-auto max-w-3xl">
            {/* Reflection */}
            <p className="font-[var(--font-display)] text-2xl font-medium leading-snug text-[var(--color-ink)] sm:text-3xl">
            "{reflection}"
            </p>
            <p className="mt-4 text-[var(--color-muted)]">
            The page is still a work in progress and that's the point. The most useful thing the viral moment taught me wasn't how to go viral. It was how to figure out what I actually wanted to build.
            </p>

            {/* Navigation footer */}
            <div className="mt-16 flex items-center justify-between border-t border-[var(--color-border)] pt-8">
            
            <a 
                href="/#case-studies"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
                ← All Case Studies
            </a>
            <span className="text-sm text-[var(--color-border)]">
                More coming soon
            </span>
            </div>
        </div>
        </section>
    </>
  );
}