import { requireAdmin } from "@/lib/admin/auth";
import { listUploadedImages } from "@/lib/admin/content";
import { ImageUploader } from "@/components/admin/ImageUploader";

export default async function AdminImagesPage() {
  requireAdmin();
  const images = await listUploadedImages();

  return (
    <main>
      <h1 className="font-heading font-bold text-text-dark text-3xl mb-2">
        Images
      </h1>
      <p className="text-text-medium text-sm leading-relaxed max-w-2xl mb-8">
        Upload an image here, then swap it into a page from the visual
        editor&apos;s image picker. Keep files under 4 MB; JPG or WebP works best.
      </p>

      <ImageUploader />

      <h2 className="font-heading font-bold text-text-dark text-lg mt-10 mb-4">
        Uploaded images
      </h2>
      {images.length === 0 ? (
        <p className="text-text-medium text-sm">Nothing uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl">
          {images.map((image) => (
            <figure
              key={image.src}
              className="bg-white border border-gray-200 rounded-card p-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.name}
                className="w-full aspect-square object-cover rounded"
              />
              <figcaption className="mt-2">
                <code className="block text-[11px] text-text-dark break-all select-all">
                  {image.src}
                </code>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </main>
  );
}
