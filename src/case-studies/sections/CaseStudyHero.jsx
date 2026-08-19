import { Link } from "react-router-dom";

export default function CaseStudyHero({ meta }) {
  return (
    <section id="cs-hero" className="bg-[#1E1525] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/#case-studies"
          className="inline-flex items-center gap-2 text-sm text-[#a89bb5] transition-colors hover:text-white"
        >
          ← Back to Case Studies
        </Link>

        <div className="mt-10 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#a89bb5]/30 px-3 py-1 text-xs font-medium text-[#a89bb5]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {meta.title}
        </h1>

        <p className="mt-4 max-w-xl text-lg text-[#a89bb5]">
          {meta.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-6 text-sm text-[#a89bb5]">
          <span>{meta.role}</span>
          <span>{meta.timeframe}</span>
        </div>
      </div>
    </section>
  );
}