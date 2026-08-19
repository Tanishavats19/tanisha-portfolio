import SkillTag from "../components/ui/SkillTag";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div className="py-20">
      <h2 className="mb-10 font-[var(--font-display)] text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
        Skills
      </h2>

      <div className="space-y-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-sm font-medium text-[var(--color-ink)]">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <SkillTag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}