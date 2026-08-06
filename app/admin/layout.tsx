import type { Metadata } from "next";
import Link from "next/link";
import { isAuthenticated } from "@/lib/admin/auth";
import { logoutAction } from "./actions";

export const metadata: Metadata = {
  title: "Content editor | My PR Partner",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthenticated()) {
    return <div className="min-h-screen bg-bg-grey">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-bg-grey">
      <header className="bg-text-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-lg leading-tight">
              My PR Partner
            </p>
            <p className="text-white/70 text-xs">Website content editor</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white underline underline-offset-2"
            >
              View site
            </a>
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-white/80 hover:text-white underline underline-offset-2"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <nav className="text-sm">
          <Link
            href="/admin/editor"
            className="block rounded bg-teal text-white px-3 py-2 mb-4 font-medium hover:bg-teal-dark"
          >
            Edit pages visually →
          </Link>
          <p className="text-text-medium text-xs font-medium uppercase tracking-wide mb-2">
            Library
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                href="/admin/images"
                className="block rounded px-3 py-2 text-text-dark hover:bg-white hover:text-teal-dark"
              >
                Images
              </Link>
            </li>
          </ul>
        </nav>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
