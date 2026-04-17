"use client";

import CoursePage from "@/components/course-page";
import { associationsContent } from "@/content/courses/associations";

export default function AssociationsClient() {
  return <CoursePage content={associationsContent} />;
}
