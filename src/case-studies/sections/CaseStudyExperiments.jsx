const DECISION_STYLES = {
  current: "bg-[var(--color-accent)] text-white",
  continue: "bg-emerald-100 text-emerald-700",
  "continue-selectively": "bg-amber-100 text-amber-700",
  stopped: "bg-red-100 text-red-500",
};

const DECISION_LABELS = {
  current: "Current strategy",
  continue: "Continued",
  "continue-selectively": "Continue selectively",
  stopped: "Stopped",
};

function DecisionChip({ decision }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${DECISION_STYLES[decision]}`}
    >
      {DECISION_LABELS[decision]}
    </span>
  );
}

function ExperimentRow({ experiment, why, result, decision, index }) {
  return (
    <div className="group grid gap-4 border-b border-[var(--color-border)] py-8 sm:grid-cols-[2rem_1fr_1fr_1fr_auto] sm:items-start">
      {/* Index */}
      <span className="hidden font-[var(--font-display)] text-sm text-[var(--color-muted)] sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Experiment */}
      <div>
        <span className="block text-xs font-medium uppercase tracking-widest text-[var(--color-muted)] sm:hidden">
          Experiment
        </span>
        <p className="font-[var(--font-display)] font-medium text-[var(--color-ink)]">
          {experiment}
        </p>
      </div>

      {/* Why */}
      <div>
        <span className="block text-xs font-medium uppercase tracking-widest text-[var(--color-muted)] sm:hidden">
          Why
        </span>
        <p className="text-sm text-[var(--color-muted)]">{why}</p>
      </div>

      {/* Result */}
      <div>
        <span className="block text-xs font-medium uppercase tracking-widest text-[var(--color-muted)] sm:hidden">
          What happened
        </span>
        <p className="text-sm text-[var(--color-muted)]">{result}</p>
      </div>

      {/* Decision chip */}
      <div className="sm:text-right">
        <DecisionChip decision={decision} />
      </div>
    </div>
  );
}

export default function CaseStudyExperiments({ experiments }) {
  return (
    <section id="cs-experiments" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="font-[var(--font-display)] text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          06 — Experimentation
        </span>

        <p className="mt-3 max-w-xl text-[var(--color-muted)]">
          Rather than assuming the viral format was the answer, I ran a series of content experiments — each with a reason, a result, and a deliberate decision.
        </p>

        {/* Column headers — desktop only */}
        <div className="mt-10 hidden grid-cols-[2rem_1fr_1fr_1fr_auto] gap-4 sm:grid">
          {["", "Experiment", "Why", "What happened", "Decision"].map((h) => (
            <span
              key={h}
              className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        <div>
          {experiments.map((exp, index) => (
            <ExperimentRow key={exp.experiment} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}