export default function CaseStudyContext({ context }) {
  return (
    <section id="cs-context" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          01 — Context
        </span>

        <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink)]">
          {context.body}
        </p>

        <p className="mt-8 border-l-2 border-[var(--color-accent)] pl-5 font-[var(--font-display)] text-xl font-medium leading-snug text-[var(--color-accent)]">
          {context.hook}
        </p>
      </div>
    </section>
  );
}