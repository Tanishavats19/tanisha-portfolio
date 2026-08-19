export default function CaseStudyOpportunity({ opportunity }) {
  return (
    <section id="cs-opportunity" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          02 — Opportunity
        </span>

        <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink)]">
          {opportunity.problem}
        </p>

        <div className="mt-10 rounded-2xl bg-[var(--color-accent)]/[0.06] px-8 py-7 border border-[var(--color-accent)]/10">
          <p className="font-[var(--font-display)] text-xl font-medium leading-snug text-[var(--color-ink)]">
            "{opportunity.question}"
          </p>
          <span className="mt-3 block text-sm text-[var(--color-muted)]">
            Central product question
          </span>
        </div>
      </div>
    </section>
  );
}