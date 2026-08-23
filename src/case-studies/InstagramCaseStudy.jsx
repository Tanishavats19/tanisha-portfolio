import { useEffect } from "react";
import { instagram } from "../data/caseStudies/instagram";
import CaseStudyHero from "./sections/CaseStudyHero";
import CaseStudyContext from "./sections/CaseStudyContext";
import CaseStudyOpportunity from "./sections/CaseStudyOpportunity";
import CaseStudyAudience from "./sections/CaseStudyAudience";
import CaseStudyGoals from "./sections/CaseStudyGoals";
import CaseStudySignal from "./sections/CaseStudySignal";
import CaseStudyExperiments from "./sections/CaseStudyExperiments";
import CaseStudyInsight from "./sections/CaseStudyInsight";
import CaseStudyImpact from "./sections/CaseStudyImpact";
import CaseStudyTradeoffs from "./sections/CaseStudyTradeoffs";
import CaseStudyNextSteps from "./sections/CaseStudyNextSteps";
import CaseStudyTakeaway from "./sections/CaseStudyTakeaway";
import CaseStudyProgress from "./components/CaseStudyProgress";


export default function InstagramCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div>
    <CaseStudyProgress />
      <CaseStudyHero meta={instagram.meta} />
      <CaseStudyContext context={instagram.context} />
      <CaseStudyOpportunity opportunity={instagram.opportunity} />
      <CaseStudyAudience audience={instagram.audience} />
      <CaseStudyGoals goals={instagram.goals} />
      <CaseStudySignal initialSignal={instagram.initialSignal} />
      <CaseStudyExperiments experiments={instagram.experiments} />
      <CaseStudyInsight keyInsight={instagram.keyInsight} />
      <CaseStudyImpact impact={instagram.impact} />
      <CaseStudyTradeoffs tradeoffs={instagram.tradeoffs} />
      <CaseStudyNextSteps nextSteps={instagram.nextSteps} />
      <CaseStudyTakeaway takeaway={instagram.takeaway} reflection={instagram.reflection} />
    </div>
  );
}