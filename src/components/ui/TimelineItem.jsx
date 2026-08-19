export default function TimelineItem({ role, company, period, current, summary, details, side }) {
  const isLeft = side === "left";

  return (
    <div className="group relative grid grid-cols-[2rem_1fr] items-start sm:grid-cols-[1fr_2rem_1fr]">
      {/* Dot — column 1 on mobile, center column on desktop */}
      <div className="col-start-1 flex flex-col items-center sm:col-start-2">
        <span
          className={
            current
              ? "z-10 h-4 w-4 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-accent-soft)]"
              : "z-10 h-2.5 w-2.5 rounded-full bg-[var(--color-border)] transition-colors group-hover:bg-[var(--color-accent)]"
          }
        />
      </div>

      {/* Content — column 2 on mobile always; alternates col 1/3 on desktop */}
      <div
        className={`col-start-2 pb-16 pl-6 text-left ${
          isLeft
            ? "sm:col-start-1 sm:pl-0 sm:pr-8 sm:text-right"
            : "sm:col-start-3 sm:pl-8"
        }`}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          {period}
        </span>
        <h3 className="mt-1 font-[var(--font-display)] text-xl font-medium text-[var(--color-ink)]">
          {role}
        </h3>
        <p className="text-sm text-[var(--color-muted)]">{company}</p>
        <p className="mt-2 max-w-sm text-[var(--color-muted)]">{summary}</p>

        <div
          className={`grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr] ${
            isLeft ? "sm:ml-auto" : ""
          }`}
        >
          <div className="overflow-hidden">
            <ul className="mt-2 max-w-sm space-y-1 text-sm text-[var(--color-accent)]">
              {details.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-[var(--color-accent)]">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}