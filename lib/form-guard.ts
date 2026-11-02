/**
 * Spread into every /api/forms body. Tells the server how long the page had
 * been open when the form was sent: the bots filling the download and
 * newsletter forms load a page and submit within a second or two, which no
 * one reading the page does. The server pairs it with other checks
 * (app/api/forms/route.ts).
 */
export function formGuard(): { guardMs: number } {
  const ms = typeof performance !== "undefined" ? performance.now() : 0;
  return { guardMs: Math.round(ms) };
}
