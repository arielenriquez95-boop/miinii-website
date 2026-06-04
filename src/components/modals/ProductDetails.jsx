import { ArrowIcon } from "../icons/ArrowIcon";

export function ProductPriceTags({ product, size = "mobile" }) {
  const isMobile = size === "mobile";

  return (
    <div className={isMobile ? "flex shrink-0 flex-wrap justify-end gap-1.5 pt-0.5" : "flex flex-wrap items-center gap-2"}>
      {product.oldPrice && (
        <span
          className={
            isMobile
              ? "rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-400 line-through ring-1 ring-slate-200"
              : "shrink-0 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-400 line-through ring-1 ring-slate-200"
          }
        >
          {product.oldPrice}
        </span>
      )}
      <span
        className={
          isMobile
            ? "rounded-full bg-[#ff6f31]/15 px-3 py-1 text-[11px] font-black text-[#ff6f31] ring-1 ring-[#ff6f31]/20"
            : "shrink-0 rounded-full bg-[#ff6f31]/15 px-5 py-2.5 text-base font-black text-[#ff6f31] ring-1 ring-[#ff6f31]/20"
        }
      >
        {product.price}
      </span>
    </div>
  );
}

export function ProductDetailsList({ product, size = "mobile" }) {
  const isMobile = size === "mobile";

  return (
    <ul className={`grid ${isMobile ? "gap-2" : "gap-3"}`}>
      {product.details.map((detail) => (
        <li key={detail} className={`flex ${isMobile ? "gap-2 text-xs leading-5" : "gap-3 text-base leading-6"} text-slate-600`}>
          <span className={`${isMobile ? "mt-2 h-1.5 w-1.5" : "mt-2 h-2 w-2"} shrink-0 rounded-full bg-[#16C1C1]`} />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductOrderButton({ onClick, size = "mobile" }) {
  const isMobile = size === "mobile";

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        isMobile
          ? "inline-flex w-full items-center justify-center rounded-full bg-[#ff6f31] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-200 transition hover:bg-[#f05f20]"
          : "mt-6 inline-flex items-center justify-center rounded-full bg-[#ff6f31] px-7 py-4 text-base font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#f05f20]"
      }
    >
      Start Your Miinii
      <ArrowIcon className={isMobile ? "ml-1.5 h-4 w-4" : "ml-2 h-5 w-5"} />
    </button>
  );
}
