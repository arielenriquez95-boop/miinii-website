import { ArrowIcon } from "../icons/ArrowIcon";

export function ProductCard({ product, onClick }) {
  return (
    <div className="group/card relative h-full w-full rounded-[1.35rem] shadow-[0_2px_8px_rgba(15,23,42,0.03),0_8px_24px_rgba(15,23,42,0.05),0_20px_48px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_4px_12px_rgba(22,193,193,0.08),0_12px_32px_rgba(22,193,193,0.12),0_28px_64px_rgba(22,193,193,0.16)] sm:rounded-[1.65rem] max-lg:hover:translate-y-0 max-lg:hover:scale-100 max-lg:hover:shadow-[0_2px_8px_rgba(15,23,42,0.03),0_8px_24px_rgba(15,23,42,0.05),0_20px_48px_rgba(15,23,42,0.07)]">
      <button
        type="button"
        onClick={onClick}
        className="desktop-shimmer relative flex h-full w-full flex-col overflow-hidden rounded-[inherit] border border-slate-100 bg-white p-2.5 text-left transition duration-500 group-hover/card:border-[#16C1C1] group-hover/card:bg-[#16C1C1] focus:outline-none focus:ring-2 focus:ring-[#16C1C1] focus:ring-offset-2 sm:p-4"
        aria-label={`Open ${product.title} product details`}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-orange-50/70 via-teal-50/40 to-white transition duration-500 group-hover/card:from-[#16C1C1] group-hover/card:via-[#16C1C1] group-hover/card:to-[#16C1C1]" />
        <div className="desktop-float-alt relative mb-2.5 aspect-[4/5] overflow-hidden rounded-[1rem] bg-[#f8fafc] sm:mb-4 sm:rounded-[1.25rem]">
          <img src={product.image} alt={`${product.title} product sample`} className="h-full w-full object-cover object-center transition duration-500 group-hover/card:scale-[1.04]" />
        </div>
        <h3 className="relative text-base font-black tracking-tight text-slate-950 transition duration-500 group-hover/card:text-white sm:text-xl">{product.title}</h3>
        <div className="relative mt-2 flex flex-nowrap items-center gap-1.5 sm:mt-2.5 sm:gap-2">
          {product.oldPrice && (
            <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-400 line-through ring-1 ring-slate-200 transition duration-500 group-hover/card:bg-white/20 group-hover/card:text-white/70 group-hover/card:ring-white/20 sm:px-3 sm:py-1.5 sm:text-sm">
              {product.oldPrice}
            </span>
          )}
          <span className="shrink-0 rounded-full bg-[#ff6f31]/15 px-2.5 py-1 text-[10px] font-black text-[#ff6f31] ring-1 ring-[#ff6f31]/20 transition duration-500 group-hover/card:bg-white group-hover/card:text-[#ff6f31] group-hover/card:ring-white sm:px-4 sm:py-2 sm:text-sm">
            {product.price}
          </span>
        </div>
      </button>
    </div>
  );
}
