export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-20">
      <span className="mb-5 inline-block w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--color-accent)]">
        PRODUCT MANAGER
      </span>

      <h1 className="max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
        Building products at the intersection of engineering, strategy, and AI.
      </h1>

      <p className="mt-5 max-w-xl text-lg text-[var(--color-muted)]">
        Hi! I'm Tanisha <br></br>I'm a Software Engineer transitioning to a
        Product Manager role, focused on shipping thoughtful, technically-grounded
        products.
      </p>

      <div className="mt-8 flex items-center gap-5">
        <a
          href="#case-studies"
          className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
        >
          View Case Studies
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--color-ink)] underline decoration-[var(--color-accent-soft)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}