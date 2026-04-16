import Image from "next/image";

type ValueAddCardProps = {
  imageSrc: string;
  valuePill: string;
  title: string;
  description: string;
  delivered: string;
};

export function ValueAddCard({ imageSrc, valuePill, title, description, delivered }: ValueAddCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]">
      <div className="relative aspect-[3/2]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-7">
        <span className="inline-block rounded-full bg-teal px-2.5 py-1 text-[11px] font-bold uppercase text-white">
          {valuePill}
        </span>
        <h3 className="mt-3 font-heading text-[20px] font-bold text-text-dark">{title}</h3>
        <p className="mt-2 text-[14px] leading-[1.6] text-text-medium">{description}</p>
        <p className="mt-4 text-[13px] font-medium text-teal">{delivered}</p>
      </div>
    </div>
  );
}
