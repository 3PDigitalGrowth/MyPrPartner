"use client";

import type { CourseContent } from "./types";
import { useScrollReveal } from "./shared";
import Hero from "./Hero";
import StatMetaBar from "./StatMetaBar";
import InPageAnchorNav from "./InPageAnchorNav";
import BodyWithSidebar from "./BodyWithSidebar";
import FoundersWelcome from "./FoundersWelcome";
import GroupEnrolmentBand from "./GroupEnrolmentBand";
import RelatedProgramBand from "./RelatedProgramBand";
import FinalCtaBand from "./FinalCtaBand";
import MobileEnrolBar from "./MobileEnrolBar";

export default function CoursePage({ content }: { content: CourseContent }) {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero hero={content.hero} checkout={content.checkout} />
      <StatMetaBar stats={content.statBar} />
      <InPageAnchorNav anchors={content.anchors} />
      <BodyWithSidebar content={content} />
      <FoundersWelcome content={content.foundersWelcome} />
      <GroupEnrolmentBand content={content.groupBand} />
      {content.relatedProgram ? <RelatedProgramBand content={content.relatedProgram} /> : null}
      <FinalCtaBand content={content.finalCta} checkout={content.checkout} />
      <MobileEnrolBar bar={content.mobileBar} checkout={content.checkout} />
    </div>
  );
}
