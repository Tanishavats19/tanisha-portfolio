import { useState } from "react";
import { Link } from "react-router-dom";

export default function CaseStudyRow({ title, summary, tags, slug }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative group rounded-xl border-b border-[var(--color-border)] px-5 py-8 transition-all ${
        expanded ? "border-transparent bg-[var(--color-accent)]/25" : ""
      } sm:hover:border-transparent sm:hover:bg-[var(--color-accent)]/25`}
    >
      {/* Header row — tap to expand on mobile */}
      <div
        className="flex items-center justify-between sm:cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-[var(--font-display)] text-2xl font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)] sm:text-3xl">
          {title}
        </h3>
        <span
          className={`text-2xl text-[var(--color-muted)] transition-all group-hover:text-[var(--color-accent)] ${
            expanded ? "translate-x-1 text-[var(--color-accent)]" : ""
          } sm:group-hover:translate-x-1`}
        >
          →
        </span>
      </div>

      {/* Expandable content */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } sm:grid-rows-[0fr] sm:group-hover:grid-rows-[1fr]`}
      >
        <div className="overflow-hidden">
          <p className="mt-3 max-w-2xl text-[var(--color-muted)]">{summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Navigate link — only visible on mobile after expanding */}
          {slug && (
            <Link
              to={slug}
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] sm:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              View case study →
            </Link>
          )}
        </div>
      </div>

      {/* Desktop — invisible link overlay makes whole card clickable */}
      {slug && (
        <Link
          to={slug}
          className="absolute inset-0 hidden sm:block"
          aria-label={title}
        />
      )}
    </div>
  );
}