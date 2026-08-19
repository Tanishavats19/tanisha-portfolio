export default function SkillTag({ label }) {
  return (
    <span
      className="relative inline-block cursor-default rounded-r-md bg-[var(--color-accent-soft)] py-1.5 pl-5 pr-4 text-sm font-medium text-[var(--color-accent)] transition-all duration-200 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-[var(--color-bg)] before:transition-colors before:duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
    >
      {label}
    </span>
  );
}