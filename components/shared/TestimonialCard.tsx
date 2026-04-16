type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
};

export function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-bg-grey p-8">
      <span className="font-serif text-[48px] leading-none text-teal opacity-20" aria-hidden>
        &ldquo;
      </span>
      <p className="mt-2 text-[16px] italic leading-relaxed text-text-medium">{quote}</p>
      <div className="mt-5">
        <p className="text-[15px] font-bold text-text-dark">{name}</p>
        <p className="text-[14px] text-[#9CA3AF]">{title}</p>
      </div>
    </div>
  );
}
