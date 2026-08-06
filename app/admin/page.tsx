import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";

export default function AdminDashboard() {
  requireAdmin();

  return (
    <main>
      <h1 className="font-heading font-bold text-text-dark text-3xl mb-2">
        Welcome
      </h1>
      <p className="text-text-medium text-sm leading-relaxed max-w-2xl mb-8">
        Edit your website content here. Every change you save is published
        automatically and is live on the site in about 2 minutes. Nothing goes
        live until you press Save, and 3P Digital can restore any earlier
        version if you ever need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        <Link
          href="/admin/editor"
          className="block bg-teal text-white rounded-card p-5 hover:bg-teal-dark sm:col-span-2"
        >
          <p className="font-heading font-bold text-lg mb-1">
            Edit pages visually →
          </p>
          <p className="text-white/85 text-sm leading-relaxed">
            View the live site and click any highlighted text or image to
            change it in place, then press Save.
          </p>
        </Link>
        <Link
          href="/admin/images"
          className="block bg-white border border-gray-200 rounded-card p-5 hover:border-teal/60"
        >
          <p className="font-heading font-bold text-text-dark text-lg mb-1">
            Images
          </p>
          <p className="text-text-medium text-sm leading-relaxed">
            Upload images so they are available in the page editor&apos;s
            image picker.
          </p>
        </Link>
      </div>
    </main>
  );
}
