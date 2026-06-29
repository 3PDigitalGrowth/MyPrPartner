import type { CourseContent } from "./types";
import Overview from "./Overview";
import WhatYoullLearn from "./WhatYoullLearn";
import CourseStructure from "./CourseStructure";
import Personas from "./Personas";
import Instructors from "./Instructors";
import Testimonials from "./Testimonials";
import CareerValue from "./CareerValue";
import FAQ from "./FAQ";
import StickyEnrolCard from "./StickyEnrolCard";
import PlanComparisonSection from "./PlanComparisonSection";

const MAIN_COL_CLASS = "order-1 lg:order-none lg:col-span-8 lg:col-start-1";

export default function BodyWithSidebar({ content }: { content: CourseContent }) {
  const hasPlanComparison =
    !!content.planComparison && !!content.sidebar.tiers && content.sidebar.tiers.length > 0;

  // The sticky sidebar spans all rows of the left column via `lg:row-span-full`
  // (grid-row: 1 / -1). For `-1` to reach the final row, the grid needs
  // EXPLICIT rows — otherwise it collapses to row 1 and the card scrolls off
  // about halfway down. Left column rows: main block, CareerValue, [PlanComparison], FAQ.
  const gridRowsClass = hasPlanComparison
    ? "lg:[grid-template-rows:repeat(4,auto)]"
    : "lg:[grid-template-rows:repeat(3,auto)]";

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 ${gridRowsClass}`}>
          <div className={MAIN_COL_CLASS}>
            <Overview content={content.overview} />
            <WhatYoullLearn content={content.whatYoullLearn} />
            <CourseStructure content={content.courseStructure} />
            <Personas content={content.personas} />
            <Instructors content={content.instructors} />
            {content.testimonials ? (
              <Testimonials content={content.testimonials} />
            ) : null}
          </div>

          <div className="order-2 lg:order-none lg:col-span-8 lg:col-start-1">
            <CareerValue content={content.careerValue} />
          </div>

          <aside
            id="pricing"
            className="order-3 scroll-mt-28 lg:order-none lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-full"
          >
            <StickyEnrolCard
              sidebar={content.sidebar}
              checkout={content.checkout}
              placement="sidebar"
              courseName={content.mobileBar.label}
              slug={content.slug}
            />
          </aside>

          {hasPlanComparison ? (
            <div className="order-4 lg:order-none lg:col-span-8 lg:col-start-1">
              <PlanComparisonSection
                comparison={content.planComparison!}
                tiers={content.sidebar.tiers!}
              />
            </div>
          ) : null}

          <div className="order-5 lg:order-none lg:col-span-8 lg:col-start-1">
            <FAQ content={content.faq} />
          </div>
        </div>
      </div>
    </section>
  );
}
