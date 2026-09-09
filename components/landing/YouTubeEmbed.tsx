/**
 * Privacy-friendly YouTube embed (youtube-nocookie) with a fixed 16:9 frame.
 * Server component: no client JavaScript, the iframe is lazy-loaded by the
 * browser.
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-card border border-[#E5E7EB] bg-black shadow-card">
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
