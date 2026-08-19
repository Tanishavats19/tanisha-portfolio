import { Link } from "react-router-dom";

export default function CaseStudyRow({ title, summary, tags, slug }) {
  return (
    <Link to={slug || "#"} className="block group cursor-pointer rounded-xl border-b border-[var(--color-border)] px-5 py-8 transition-all hover:border-transparent hover:bg-[var(--color-accent)]/[0.25]">
      <div className="flex items-center justify-between">
        <h3 className="font-[var(--font-display)] text-2xl font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)] sm:text-3xl">
          {title}
        </h3>
        <span className="text-2xl text-[var(--color-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-accent)]">
          →
        </span>
      </div>

      <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
            {summary}
          </p>
          <div className="mt-3 flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}