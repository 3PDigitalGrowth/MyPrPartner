# Course Page Template

Reusable, data-driven template for course/program pages on myprpartner.com. The live
Crisis Masterclass page (`/crisis-masterclass`) is built from this template.

## Anatomy

```
components/course-page/
  types.ts                 # CourseContent shape (single source of truth)
  shared.tsx               # SectionEyebrow, SectionHeading, useScrollReveal, useActiveAnchor, FAQItem
  CoursePage.tsx           # Top-level: takes `content`, renders everything
  Hero.tsx, StatMetaBar.tsx, InPageAnchorNav.tsx
  BodyWithSidebar.tsx      # 2-column shell (main + sticky sidebar)
  Overview.tsx, WhatYoullLearn.tsx, CourseStructure.tsx, Personas.tsx,
  Instructors.tsx, Testimonials.tsx, CareerValue.tsx, FAQ.tsx
  StickyEnrolCard.tsx, MobileEnrolBar.tsx
  FoundersWelcome.tsx, GroupEnrolmentBand.tsx, FinalCtaBand.tsx
  index.ts                 # `export default CoursePage`

content/courses/
  crisis-masterclass.tsx   # Example content config (copy this for a new course)

lib/checkout.ts            # getCourseCheckoutUrl(config, overrides) + placeholder URL
```

## Add a new course in 4 steps

### 1. Create the content config

Copy `content/courses/crisis-masterclass.tsx` to
`content/courses/<your-slug>.tsx` and edit every field. The `CourseContent` type in
`components/course-page/types.ts` is your checklist; TypeScript will highlight any
missing fields.

At the top of the file, set the Kajabi checkout env var:

```ts
const CHECKOUT_BASE_URL =
  process.env.NEXT_PUBLIC_KAJABI_<COURSE>_CHECKOUT_URL || PLACEHOLDER_CHECKOUT_URL;
```

Use a literal `process.env.NEXT_PUBLIC_*` reference so Next.js can inline the value
into the client bundle at build time.

### 2. Drop in images

Create `public/images/<your-slug>/` and add the 9 standard images used by the template:

- `hero-bg-crisis.jpg` (wide hero background)
- `hero-portrait-crisis.jpg` (4:5 portrait callout)
- `persona-*.jpg` x 4 (16:9 persona cards)
- `sticky-card-thumb.jpg` (16:10 sidebar thumbnail)
- `group-enrolment-bg.jpg` (16:9 corporate band background)
- `final-cta-bg.jpg` (wide panoramic for the final CTA)

Any fields you leave off in the content config (e.g. `hero.portraitImage`) will simply
not render.

### 3. Create the page route

```
app/<your-slug>/
  page.tsx               # Server component: SEO metadata + JSON-LD + client wrapper
  <Slug>Client.tsx       # One-line client wrapper that imports content and renders CoursePage
```

Copy `app/crisis-masterclass/page.tsx` and `CrisisMasterclassClient.tsx`, update the
imports, and you're done. The client wrapper is necessary because Lucide icons in the
content config can't be passed as props across the server/client boundary.

### 4. Add the env var

Add `NEXT_PUBLIC_KAJABI_<COURSE>_CHECKOUT_URL` to:

- `.env.local` for local development
- Vercel (or your host) production + preview environments
- Any other deploy targets

The checkout URL is built from this env var in the content file and piped through
`getCourseCheckoutUrl` with UTM overrides per placement (hero, sidebar, final-cta,
mobile-bar).

## Design notes

- Near-identical design across courses is by design. Tweak content, not component JSX.
- Icons come from `lucide-react`. Reference them directly in the content `.tsx`.
- Colours/typography inherit from `tailwind.config.ts` (teal, brand-blue, text-dark,
  Plus Jakarta Sans, DM Sans). No per-course palette overrides planned.
- All copy is Australian English. Avoid em dashes.

## Checkout helper

`getCourseCheckoutUrl(config, overrides?)` produces a full Kajabi checkout URL with
UTMs appended. Every CTA passes a distinct `utm_content` (`hero`, `sidebar`,
`final-cta`, `mobile-bar`) so marketing can track which placement converts.
