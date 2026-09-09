# My PR Partner SEO review

Site performance from launch to 30 August 2026, and three new pages to build next.
Prepared by 3P Digital, 2 September 2026. Sources: Google Search Console (property https://myprpartner.com/, Australia filter unless stated), GA4 property 494510114, live crawl of myprpartner.com, Google AU search results pulled 2 September.

## The headline

The new site went live in early June and has now had three clean months in search. Google sees it, indexes all sixteen pages, and shows it for roughly 300 to 450 searches a week. Almost nobody clicks. Across 2 June to 30 August the site earned 2,148 Australian impressions and 19 clicks, a click-through rate of 0.9 per cent, at an average position of 37.6. Worldwide the same period reads 4,707 impressions and 24 clicks.

Of those 19 Australian clicks, Google will name the search behind only six, and all six are the brand: "my pr partner" (4), "crc public relations" (1) and "lyall mercer" (1). The other thirteen sit in searches too rare for Google to disclose, which is itself a finding: they are scattered one-offs, not a cluster the site is winning. Every attributable click landed on the homepage. No page other than the homepage has been clicked from search in three months.

GA4 tells the same story from the other side. Organic search delivered 115 sessions from 28 people over the quarter, 26 sessions in August. Direct traffic (1,743 sessions) dwarfs it, which is the EDM programme and the team's own visits, not search.

Two things are worth holding onto. First, the impression footprint is widening: average position has drifted from about 10 in May (brand searches only) to the mid 30s in August because Google is now testing the site against hundreds of non-brand queries, at deep positions. That is the normal shape of a young site finding its topics. Second, 86 per cent of Australian impressions are on desktop, which fits the audience: principals, association executives and business owners researching at work.

| Week starting | Impressions (all countries) | Clicks |
|---|---|---|
| 4 May | 468 | 2 |
| 1 Jun | 330 | 1 |
| 29 Jun | 250 | 3 |
| 27 Jul | 403 | 5 |
| 3 Aug | 378 | 1 |
| 10 Aug | 410 | 3 |
| 17 Aug | 381 | 1 |
| 24 Aug | 287 | 0 |

## Four things holding the site back

### The old WordPress URLs all return 404

Google still ranks the previous site's addresses and people still arrive on them. Over the quarter, dead paths collected 281 Australian impressions in Search Console (/expert-trainers/ 153, /login/ 38, /training-resources/ 32, /plan-pricing/ 23, /pr-support-options/ 17, /schools/ 13) and 292 page views in GA4 (/members/primary-crisis-masterclass/ 53, /schools 48, /product/crisis-masterclass 37, /business 34, /training-resources 32, /train-level 30, /video 30, /train-level-associations 28). Several of those rank at positions 1 to 3 for their old queries. Each one lands on a 404 and the authority the old pages built up is leaking away. The only redirect in place today sends /programs/charity to /programs/business. Fixing this is a redirect map in next.config.mjs, about fifteen lines, and it is the fastest gain available.

### The articles page is empty

/articles is live, indexed and ranking, and it has nothing in it. Its only visible search demand is "public relations assignment help" (66 impressions), which is university students, not clients. Meanwhile the SEO programme has written fourteen articles since 22 July (crisis plans for schools, media training, press release writing, presentation skills, social media crisis management, internal comms and more) and every one of them sits in Google Docs in the shared Drive folder. Nothing has reached the site. The topical depth that should be compounding under the programs is parked. The weekly digest also counts blog engagement under /blog, which this site does not have, so that panel will read zero until it is pointed at /articles.

### The head term lands on a "coming soon" page

"pr training" is the biggest non-brand query the site appears for: 110 impressions at position 39, plus 26 for "pr training services" and 12 for "pr media training". Google sends all of it to /courses, a 797-word page whose heading reads "Short, focused courses, coming to My PR Partner soon". The programs, the masterclass and the trainer roster are the actual PR training offer and none of them are what Google is matching. /courses needs to become a real page about PR training in Australia, with the four planned courses as one section, or the head term will keep landing on a waiting list.

### Google half-reads the site as a PR agency

Around 100 Australian impressions a quarter come from agency-intent searches ("pr consulting" 16, "pr consultancy" 11, "pr partners" 23, "public relations partners" 24, "pr expert" 8) and another 16 from "10 to 1 pr", a different firm. The homepage title, "Public Relations Training & Crisis Communications Courses", is right; the body copy talks about CRC's national PR company more than it talks about training organisations to do their own PR. A sharper opening section and title ("Online PR training for Australian schools, businesses and associations") would pull the site out of the agency results it cannot win and into the training results it can.

A fifth, smaller item: www.myprpartner.com still redirects to the apex with a 307 (temporary). Switching it to a 308 in Vercel's domain settings tells Google the move is permanent.

## Where the demand already is

The useful part of a Search Console read on a young site is not the clicks, it is the queries Google is already testing the site against. These are the clusters, with the page currently catching each one.

| Cluster | AU impressions, 90 days | Best position | Currently lands on |
|---|---|---|---|
| Crisis media training ("crisis management media training" 73, "crisis media management training" 40, "crisis communication media training" 22, "crisis media training australia" 6) | about 145 | 49 to 75 | /crisis-masterclass, which never uses the phrase "media training" |
| PR training head terms ("pr training" 123, "pr training services" 27, "pr media training" 12) | about 165 | 39 (homepage reaches 5.8 on 13 of them) | /courses, the coming-soon page |
| Small business and startup PR training ("affordable pr training for startups" 12, "pr training subscription for businesses" 10, "monthly pr coaching for small business owners" 9, "public relations coaching for smes" 2) | about 35 | 2.5 to 9 | Homepage and /programs/business, neither of which says "small business" once |
| Personal branding coach ("personal branding coach australia" 40, "personal branding coach in australia" 29, "personal brand expert melbourne" 12) | about 97 | 87 to 96 | The dead /expert-trainers/ URL |
| Schools PR and crisis ("school pr" 8, "public relations plan for schools" 6, "school crisis expert" 1) | about 20 | 7 to 13 | /programs/schools |
| Brand (My PR Partner, CRC, Lyall Mercer) | about 100 | 1 to 7 | Homepage and /about. Every attributable click lives here |

Three of those clusters have real commercial value, no page of their own, and search results the site can realistically enter. They are the three recommendations.

## Recommendation one: a crisis media training page

Build it at /crisis-media-training, titled "Crisis media training for Australian leaders and spokespeople".

This is the largest pocket of commercial demand the site already touches, about 145 impressions a quarter across five phrasings, and it has no home. Google is forcing it onto the Crisis Masterclass page, which covers a twelve-month crisis leadership programme and does not contain the words "media training" anywhere, so it sits at positions 49 to 75. The Australian results for "crisis media training australia" are ThinkBox Media, Articulous, Crisis Shield, Communication & Media Manoeuvres, Saltwater Media and ICON: mid-sized trainers with a single service page each. A dedicated page with the depth of the program pages (2,000 words or so) and named former-journalist trainers can compete on that field. The Crisis Masterclass page still wins the "crisis communications course" queries; this new page takes the media-facing ones.

The content should cover who it is for (chief executives, principals, association leaders, anyone who could face a camera in a bad week) and what a session covers: key messages under pressure, bridging difficult questions, television, radio and podcast formats, the first-hour holding statement, social media pile-ons. Then how it is delivered, live online with recorded mock interviews and playback. Then the trainers, drawn from the expert-trainers roster, with their newsroom backgrounds stated. Explain the relationship to the Crisis Masterclass (this is the two-hour skill, the masterclass is the twelve-month capability) and to the sector programs. Close with a short FAQ and one enquiry form.

Link in from /crisis-masterclass, /about/expert-trainers, the homepage crisis section and /programs. Link out to the masterclass and the three programs. Three articles already in the programme queue support it: crisis spokesperson training, media interview preparation, crisis media response procedures.

Success looks like top 10 for "crisis media training australia" and "crisis media management training" within a quarter of publishing, and the first clicks Google attributes to a page other than the homepage.

## Recommendation two: a small business PR training page

Build it at /pr-training-for-small-business, titled "PR training for small business owners, without hiring an agency".

The site is already on page one for six long-tail searches about affordable PR training for small firms, at positions 2.5 to 9, with no page targeting them. That demand is going to the homepage and to the Business Program page, and neither uses the phrase "small business". The search results for "pr training for small business" in Australia are thin: a LinkedIn Learning topic page, a Gold Coast publicity coach, an SME-focused agency, a Melbourne Business School catalogue and state government training listings. Nobody owns it. This is also the sharpest expression of the My PR Partner positioning: learn to do it yourself, with senior advisers on call, instead of paying an agency retainer.

The content should open with the honest cost comparison between a monthly subscription and a small agency retainer. Then what an owner-operator actually needs in the first ninety days: a media release that gets opened, a local media list, a LinkedIn presence, a plan for the day something goes wrong. Then how the Business Program's twelve months map onto that, reframed for a founder rather than a communications team, and what "on-call support" means in practice. Three FAQs on time commitment, team size and cancellation, then a pricing pointer to the Business Program.

Link in from the homepage programs section, /programs and /programs/business. Link out to /programs/business, the crisis checklist and the PR guide. Three articles in the queue support it: DIY PR for small businesses, why choose DIY PR training over a PR agency, PR agency alternative.

Success looks like those six long-tail queries consolidating onto this page at positions 1 to 3, and the page starting to appear for the broader "small business pr" and "pr for small business australia" searches it currently has no footprint on.

## Recommendation three: a school crisis communication plan guide

Build it at /resources/school-crisis-communication-plan, titled "How to write a crisis communication plan for an Australian school (with template)".

Schools are the programme's campaign priority for the rest of the year, and the school visitors who do arrive from search behave differently from everyone else: the four organic sessions that landed on /programs/schools averaged 1,958 seconds on site, the longest of any page. The Schools Program page already sits at positions 7 to 13 for "school pr" and "public relations plan for schools" with almost no supporting content around it. The Australian results for "crisis communication plan for schools" are nine American K-12 resources (ParentSquare, SchoolStatus, Verizon, ISM) and one Australian trainer. There is no Australian guide with a template. That gap is the page.

The content should set out the structure of a school crisis communication plan in the Australian context: roles on the crisis team, the approval chain, the first-hour holding statement, sequencing for staff, parents, students, the department or diocese, and media, then social media monitoring and the post-incident debrief. Work through the incidents schools actually face: a staff conduct allegation, a serious injury on an excursion, a parent campaign on Facebook. Offer a downloadable plan template, either as a free file or behind an email address feeding the schools EDM list. Draw a clear line to the Schools Program and the Crisis Masterclass as the way to build the capability rather than just the document.

Link in from /programs/schools, /crisis-masterclass, /resources/crisis-checklist and the homepage. Link out to the Schools Program and the masterclass. Four articles in the queue support it: school crisis communication plans, crisis holding statement examples, crisis communication plan template, Australian crisis communication case studies. The first of these, on why every school needs a plan before it needs one, was written on 22 July and is ready to publish.

Success looks like page one for "crisis communication plan for schools" and "school crisis communication plan" in Australia, a template download that feeds the schools list, and a lift in the Schools Program page's own rankings from the internal links.

## A note on the runner-up

Personal branding is the surprise in the data: about 97 impressions a quarter for "personal branding coach australia" and variants, all landing on the dead trainers URL at positions 87 to 96 because one trainer's biography mentions it. The courses page lists a personal branding course as coming in 2026. When that course exists, a page for it will have a warm start. Until then it is a note, not a recommendation.

## Order of work

1. This week: the legacy redirect map (fifteen lines in next.config.mjs), the 307 to 308 change in Vercel, and pointing the weekly digest's blog metric at /articles.
2. Next: get the fourteen written articles onto /articles. That needs a simple article route in the site and a decision on who publishes (the SEO programme can commit them directly once the route exists). Rewrite /courses into a real PR training page at the same time.
3. Then the three new pages, in the order above. Crisis media training first because it has the most demand waiting; the schools resource second if the EDM calendar wants it sooner.

From Lyall and Barbara: which trainers on the roster should be named on the crisis media training page, and whether the school plan template should be a free download or an email gate.

## Proposed redirect map

| Old path | Send to |
|---|---|
| /schools | /programs/schools |
| /business | /programs/business |
| /industry-associations | /programs/industry-associations |
| /expert-trainers | /about/expert-trainers |
| /giving-back | /about/giving-back |
| /product/crisis-masterclass, /members/primary-crisis-masterclass | /crisis-masterclass |
| /login | https://courses.myprpartner.com/login |
| /plan-pricing, /pr-support-options, /training-resources, /train-level | /programs |
| /train-level-associations | /programs/industry-associations |
| /video | / |
