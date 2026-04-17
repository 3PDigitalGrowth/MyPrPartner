# Contentful setup - Articles

This document is the complete setup guide for wiring the `/articles` page to
Contentful. Until these steps are complete the site falls back to the seed
articles in `content/articles/seed.ts`, so nothing breaks in the meantime.

---

## 1. Create a Contentful space

1. Sign up / log in at [contentful.com](https://www.contentful.com/).
2. Create a new Space (the free Community tier is fine for this site's volume).
3. In the space, go to **Settings > API keys > Add API key**.
4. Copy the two values you'll paste into `.env.local`:
   - **Space ID** (e.g. `abcd1234efgh`)
   - **Content Delivery API - access token** (long string starting with a
     generated key; this is read-only, safe to use server-side)

---

## 2. Build the content model

Go to **Content model > Add content type** and create the two types below in
the exact order shown (the Article type references the Author type, so Author
must exist first).

### 2a. Content type: `author`

API identifier must be exactly `author`.

| Field ID | Name | Type | Required | Notes |
|---|---|---|---|---|
| `name` | Name | Short text | Yes | e.g. "Lyall Mercer" |
| `role` | Role | Short text | Yes | e.g. "Co-founder & Principal Adviser, CRC Public Relations" |
| `avatar` | Avatar | Media (single file) | No | Square headshot, 400x400+ recommended |
| `bio` | Bio | Long text | No | Used on future author pages |

Use **Name** as the entry title.

### 2b. Content type: `article`

API identifier must be exactly `article`.

| Field ID | Name | Type | Required | Notes |
|---|---|---|---|---|
| `title` | Title | Short text | Yes | The article headline |
| `slug` | Slug | Short text | Yes | Lowercase-with-hyphens, unique. Enable **Appearance: Slug** and set source to Title. |
| `summary` | Summary | Long text | Yes | 2-3 sentences shown on the card and hero |
| `body` | Body | Rich text | Yes | Full article body. Used on detail pages (not built yet). |
| `heroImage` | Hero image | Media (single file) | Yes | 1600x1000+ recommended, 16:10 aspect |
| `category` | Category | Short text | Yes | **Validate** with the list: `Crisis`, `Reputation`, `Media`, `Strategy`. Set appearance to **Dropdown**. |
| `author` | Author | Reference (single) | Yes | Only allow `author` content type |
| `publishedAt` | Published at | Date & time | Yes | The date shown on cards and used for ordering (most recent first) |
| `readTime` | Read time (minutes) | Integer | Yes | e.g. `7` |
| `featured` | Featured | Boolean | No | Tick one article at a time to surface it at the top of `/articles` |
| `tags` | Tags | Short text (list) | No | Lowercase, for future filtering |
| `relatedPrograms` | Related programs | Short text (list) | No | Program slugs: `crisis-masterclass`, `schools`, `industry-associations`, `business`, `charity` |
| `seoTitle` | SEO title | Short text | No | Overrides the default `<title>` on detail pages |
| `seoDescription` | SEO description | Long text | No | Overrides the default meta description on detail pages |

Use **Title** as the entry title.

---

## 3. Add API credentials to the project

### Locally (`.env.local` in the repo root)

```
CONTENTFUL_SPACE_ID=your-space-id
CONTENTFUL_ACCESS_TOKEN=your-cda-access-token
# Optional - defaults to "master"
CONTENTFUL_ENVIRONMENT=master
```

Restart `npm run dev` after adding the variables.

### Production (Vercel)

In the Vercel dashboard: **Project > Settings > Environment Variables**. Add
the same three keys for **Production**, **Preview** and **Development**.
Redeploy after saving.

---

## 4. Create your first article

1. Go to **Content > Add entry > Author**. Create the first author (you can
   seed from the ones in `content/articles/seed.ts` to keep voice consistent).
2. Go to **Content > Add entry > Article**. Fill every required field, upload
   a hero image, tick **Publish** on the author first, then on the article.
3. Hit **Publish**. The site revalidates the cache every 10 minutes, or on the
   next deploy, whichever is sooner.

---

## 5. Optional: seed Contentful from the existing seed data

The articles in `content/articles/seed.ts` are production-ready copy. If you
want them in Contentful as a starting point, use the Contentful CLI:

```bash
npm install -g contentful-cli
contentful login
contentful space use --space-id your-space-id
# Export the seed articles to Contentful - see the Contentful CLI docs for
# the `contentful-migration` and `contentful import` workflows.
```

The six seed articles cover all four categories and demonstrate the expected
tone and structure for future entries.

---

## How the fallback works

`lib/articles.ts` exposes `getAllArticles()`:

- If `CONTENTFUL_SPACE_ID` AND `CONTENTFUL_ACCESS_TOKEN` are both set, it
  fetches from Contentful's CDA (cached via Next.js ISR, 10-minute revalidate).
- If the fetch fails or returns zero items, it logs a warning and falls back
  to `content/articles/seed.ts` so the page is never blank.
- If the env vars are not set at all, it goes straight to the seed data
  without making a network call.

This means:
- **Local dev with no env vars**: seed articles render instantly.
- **Local dev with env vars**: live Contentful data renders with a 10-minute
  cache (use `.env.local.example` as a template if you want to swap back and
  forth).
- **Production**: always live Contentful (assuming env vars are set in Vercel),
  with seed as a safety net if Contentful has an outage or returns 0 items.

---

## Troubleshooting

- **Articles not updating after publish** - the ISR cache is 10 minutes. Either
  wait, or redeploy, or trigger an on-demand revalidation (see Next.js docs).
- **Images not loading** - Contentful returns `//images.ctfassets.net/...`
  URLs; the adapter prefixes `https:` automatically. If you switch to a custom
  media CDN, add the domain to `next.config.js` under `images.remotePatterns`.
- **Category dropdown not enforced** - double-check you added the Short text
  validation list (`Crisis`, `Reputation`, `Media`, `Strategy`) on the
  `category` field. Any value outside this list will be cast on the client and
  may break the filter UI.
