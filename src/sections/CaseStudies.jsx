import CaseStudyRow from "../components/ui/CaseStudyRow";
import { caseStudies } from "../data/caseStudySummaries";

export default function CaseStudies() {
  return (
    <div className="py-20">
      <h2 className="mb-10 font-[var(--font-display)] text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
        Case Studies
      </h2>

      <div>
        {caseStudies.map((study) => (
          <CaseStudyRow key={study.id} {...study} />
        ))}
      </div>
    </div>
  );
}