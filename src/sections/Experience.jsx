import TimelineItem from "../components/ui/TimelineItem";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <div className="relative py-20">
      <h2 className="mb-10 font-[var(--font-display)] text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
        Experience
      </h2>

      <div className="relative">
        {/* Center connecting line */}
        <div className="absolute left-4 top-2 bottom-2 w-px -translate-x-1/2 bg-[var(--color-border)] sm:left-1/2" />

        {experience.map((role, index) => (
          <TimelineItem
            key={role.id}
            {...role}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}