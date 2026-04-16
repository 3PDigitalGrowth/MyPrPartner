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

export default function BodyWithSidebar({ content }: { content: CourseContent }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <Overview content={content.overview} />
            <WhatYoullLearn content={content.whatYoullLearn} />
            <CourseStructure content={content.courseStructure} />
            <Personas content={content.personas} />
            <Instructors content={content.instructors} />
            <Testimonials content={content.testimonials} />
            <CareerValue content={content.careerValue} />
            <FAQ content={content.faq} />
          </div>
          <aside id="pricing" className="scroll-mt-28 lg:col-span-4">
            <StickyEnrolCard sidebar={content.sidebar} checkout={content.checkout} placement="sidebar" />
          </aside>
        </div>
      </div>
    </section>
  );
}
