import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalDocProps = {
  title: string;
  html: string;
};

// Renders migrated legal copy (privacy / terms). The HTML is cleaned, static
// content from content/legal/*.html - no user input - so dangerouslySetInnerHTML
// is safe here. Child-element styling is applied via arbitrary variants so we
// don't depend on the typography plugin.
export function LegalDoc({ title, html }: LegalDocProps) {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="bg-white">
          <div className="mx-auto max-w-[820px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <h1 className="font-heading text-[32px] font-bold leading-tight text-text-dark md:text-[40px]">
              {title}
            </h1>
            <div
              className="mt-8 text-[15px] leading-relaxed text-text-medium [&_a]:text-teal [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-teal-dark [&_h2]:mt-10 [&_h2]:mb-2 [&_h2]:font-heading [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-text-dark md:[&_h2]:text-[24px] [&_h2:first-of-type]:mt-0 [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-text-dark [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol_ol]:mt-2 [&_ol_ol]:list-[lower-alpha] [&_li]:pl-1"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
