# My PR Partner content editor (/admin)

The site has a custom-built content editor at **https://myprpartner.com/admin**,
the same system as crcpr.com.au. The client logs in with a shared password,
clicks any highlighted text or image on the live site, edits it in place, and
every save publishes automatically: the save is committed to this GitHub repo,
Vercel redeploys, and the change is live in about 2 minutes.

No third-party CMS. Content lives in the repo, so every client edit is a git
commit that can be reviewed or reverted.

## How it works

- Page copy defaults live inline in the components as the fallback children of
  `<T id="page.section.key">Default</T>` tags (`components/editable.tsx`).
- The editor writes overrides to `content/cms/site.json` under `pageCopy`
  (a flat map keyed by copy id), committed via the GitHub API.
  `siteConfig` (`config/site.ts`) deep-merges that file over the defaults at
  build time, so every tagged component picks up edits with no code changes.
- Images upload to `public/images/uploads/` and are swapped in via the
  editor's image picker (`imgBind(id)` + `copySrc(id, fallback)`).
- Course/program pages share one component tree (`components/course-page/`);
  tags there use `useCopyId()` from `copy-base.tsx`, which prefixes ids with
  `course.<slug>.` so each program page edits independently.
- Auth: shared password, HMAC-signed httpOnly session cookie (7 days).
- Pricing, plan comparison, checkout and forms are deliberately NOT editable.

## Environment variables (Vercel → Settings → Environment Variables)

| Variable | Required | Purpose |
| --- | --- | --- |
| `ADMIN_PASSWORD` | yes | The shared client login password. Make it long. Rotating it logs everyone out. |
| `GITHUB_TOKEN` | yes | Fine-grained PAT that can read/write repo contents (see below). Saves fail without it. |
| `GITHUB_REPO` | no | Defaults to `3PDigitalGrowth/MyPrPartner`. |
| `GITHUB_BRANCH` | no | Defaults to `main`. |
| `ADMIN_SESSION_SECRET` | no | Set only if you want sessions to survive password rotation. |

### Creating the GitHub token

github.com → Settings → Developer settings → Fine-grained personal access
tokens → Generate new token:

- Resource owner: `3PDigitalGrowth`, repository access: only `MyPrPartner`
- Permissions: **Contents: Read and write** (nothing else)
- Expiry: 1 year (diarise the renewal)

Add it to Vercel as `GITHUB_TOKEN` and redeploy.

## Client workflow

1. Go to myprpartner.com/admin and log in with the shared password.
2. "Edit pages visually", pick a page from the dropdown, click any
   highlighted text (dashed teal outline) to edit in place; click an outlined
   image to swap it from the uploads library.
3. Press "Save and publish". Live in about 2 minutes.

## Notes for developers

- Every admin save is a commit authored by the token's account with message
  "Content update via admin: ...". Revert one by reverting the commit.
- Local dev without `GITHUB_TOKEN` writes straight to the working tree
  (handy for testing the editor offline). Set `ADMIN_PASSWORD` in `.env.local`.
- New editable copy: wrap the text in `<T id="page.section.key">Default</T>`.
  In course-page components use `MT` + `useCopyId()` so ids stay per-course.
- After the client edits in production, `git pull` before working locally so
  you do not build on stale content.
- Not yet editable (phase 2 if wanted): articles publishing, resources/lead
  magnet pages, navigation labels, pricing.
