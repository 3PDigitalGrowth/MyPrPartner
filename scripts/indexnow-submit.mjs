#!/usr/bin/env node
/**
 * Ping IndexNow with changed or new URLs.
 *
 * IndexNow is a shared submission protocol: one POST notifies Bing, Yandex,
 * Seznam, Naver and Yep at once. Google has never joined it, so this does
 * nothing for Google rankings. Google discovery is handled by sitemap.xml
 * plus the Search Console sitemap submission.
 *
 * Ownership is proved by a key file served from the site root. The key below
 * must match the filename and contents of public/<key>.txt, so if you rotate
 * one you rotate both.
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs                     submit every sitemap URL
 *   node scripts/indexnow-submit.mjs /a-page /b-page     submit only those paths
 */

const HOST = "myprpartner.com";
const ORIGIN = `https://${HOST}`;
const KEY = "5946ca5db224b9ca6d5d29c1073b8c0c";
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => (p.startsWith("http") ? p : `${ORIGIN}${p.startsWith("/") ? p : `/${p}`}`))
    : await urlsFromSitemap();

  // The key file has to be live and readable before the endpoint will trust
  // the submission, so fail loudly here rather than getting an opaque 403.
  const keyCheck = await fetch(KEY_LOCATION);
  const keyBody = keyCheck.ok ? (await keyCheck.text()).trim() : "";
  if (!keyCheck.ok || keyBody !== KEY) {
    console.error(`Key file check failed at ${KEY_LOCATION}`);
    console.error(`  HTTP ${keyCheck.status}, body ${JSON.stringify(keyBody.slice(0, 60))}`);
    console.error("  Deploy public/<key>.txt before submitting.");
    process.exit(1);
  }
  console.log(`Key file verified at ${KEY_LOCATION}`);

  console.log(`Submitting ${urlList.length} URLs to IndexNow:`);
  urlList.forEach((u) => console.log("   ", u));

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  const body = await res.text();
  console.log(`\nIndexNow responded HTTP ${res.status}`);
  // 200 accepted, 202 accepted but key still being validated. Both are fine.
  if (res.status === 200 || res.status === 202) {
    console.log(res.status === 202 ? "Accepted, key pending validation." : "Accepted.");
  } else {
    console.error("Body:", body.slice(0, 500));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
