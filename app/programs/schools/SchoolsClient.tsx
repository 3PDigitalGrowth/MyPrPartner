"use client";

import CoursePage from "@/components/course-page";
import { schoolsContent } from "@/content/courses/schools";

export default function SchoolsClient() {
  return <CoursePage content={schoolsContent} />;
}
