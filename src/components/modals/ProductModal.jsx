import { useSlideModal } from "../../hooks/useSlideModal";
import { scrollToSection } from "../../utils/scroll";
import { CarouselArrow } from "../CarouselArrow";
import { ProductDetailsList, ProductOrderButton, ProductPriceTags } from "./ProductDetails";

const modalArrowClass =
  "absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white shadow-lg shadow-black/20 ring-1 ring-white/20 backdrop-blur-md transition hover:bg-[#16C1C1] hover:ring-[#16C1C1]/40 disabled:pointer-events-none disabled:opacity-0 md:flex";

export function ProductModal({ products, index, setIndex, onClose }) {
  const product = products[index];
  const { setTouchStart, slideDirection, previous, next, goToSlide, onTouchEnd } = useSlideModal({
    itemCount: products.length,
    index,
    setIndex,
    onClose,
  });

  const startOrder = () => {
    onClose();
    setTimeout(() => scrollToSection("contact"), 120);
  };

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-2xl sm:p-6 md:p-8"
      onClick={onClose}
      role="presentation"
    >
      <CarouselArrow
        direction="previous"
        onClick={(event) => {
          event.stopPropagation();
          previous();
        }}
        label="Previous product"
        className={`${modalArrowClass} left-3 md:left-6 xl:left-10`}
      />
      <CarouselArrow
        direction="next"
        onClick={(event) => {
          event.stopPropagation();
          next();
        }}
        label="Next product"
        className={`${modalArrowClass} right-3 md:right-6 xl:right-10`}
      />

      <div
        key={product.title}
        className={`relative flex max-h-[min(88dvh,660px)] w-full max-w-[360px] flex-col overflow-hidden rounded-[1.65rem] border border-white/20 bg-white shadow-2xl shadow-black/30 animate-[modalSlideIn_.45s_cubic-bezier(.22,1,.36,1)_both] sm:max-w-[400px] md:mx-auto md:h-auto md:max-h-[min(86vh,720px)] md:max-w-6xl md:rounded-[2rem] md:border-white/10 md:shadow-black/50 md:ring-1 md:ring-white/10 ${slideDirection === "next" ? "[--slide-start:10%]" : "[--slide-start:-10%]"}`}
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label={`${product.title} product details`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/75 text-xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-slate-950 md:right-5 md:top-5 md:h-11 md:w-11 md:bg-white/10 md:text-2xl md:ring-1 md:ring-white/20 md:hover:bg-white/20"
          aria-label="Close product preview"
        >
          ×
        </button>

        {/* Mobile */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:hidden">
          <div className="flex min-h-0 flex-1 flex-col bg-white">
            <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal-50">
              <img src={product.image} alt={`${product.title} preview`} className="h-full w-full object-cover object-center" />
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3.5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="min-w-0 flex-1 text-xl font-black leading-tight tracking-tight text-slate-950">{product.title}</h2>
                <ProductPriceTags product={product} size="mobile" />
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-600">{product.shortText}</p>

              <div className="mt-3 rounded-[1rem] bg-[#fff8f3] p-3 ring-1 ring-orange-100">
                <ProductDetailsList product={product} size="mobile" />
              </div>
            </div>

            <div className="shrink-0 border-t border-slate-100 bg-white px-4 pb-[max(0.9rem,env(safe-area-inset-bottom,0px))] pt-2.5">
              <ProductOrderButton onClick={startOrder} size="mobile" />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden min-h-0 md:grid md:max-h-[min(86vh,720px)] md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex min-h-[min(86vh,720px)] flex-col overflow-hidden bg-[#070B18]">
            <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#16C1C1]/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 bottom-8 h-48 w-48 rounded-full bg-[#ff6f31]/15 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(22,193,193,0.12),transparent_55%)]" aria-hidden="true" />

            <div className="absolute left-6 top-6 z-10 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
              {String(index + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
            </div>

            <div className="relative flex flex-1 items-center justify-center p-10 xl:p-12">
              <div className="desktop-float relative w-full max-w-[min(100%,380px)] xl:max-w-[420px]">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#16C1C1]/20 via-transparent to-[#ff6f31]/15 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[1.75rem] bg-white/5 p-4 ring-1 ring-white/15 backdrop-blur-sm xl:p-5">
                  <img src={product.image} alt={`${product.title} preview`} className="block h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-col bg-white">
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-8 py-9 xl:px-10 xl:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#16C1C1]">Custom figure</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 xl:text-[2.75rem] xl:leading-[1.05]">{product.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 xl:text-lg xl:leading-8">{product.shortText}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ProductPriceTags product={product} size="desktop" />
                {product.oldPrice && (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">
                    Limited offer
                  </span>
                )}
              </div>

              <div className="mt-8 border-l-2 border-[#16C1C1]/30 pl-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">What&apos;s included</h3>
                <div className="mt-4">
                  <ProductDetailsList product={product} size="desktop" />
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-slate-100 bg-slate-50/60 px-8 py-6 backdrop-blur-sm xl:px-10">
              <ProductOrderButton onClick={startOrder} size="desktop" />
              <div className="mt-4 flex items-center justify-center gap-2">
                {products.map((item, dotIndex) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => goToSlide(dotIndex)}
                    className={`rounded-full transition ${dotIndex === index ? "h-2.5 w-8 bg-[#16C1C1]" : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"}`}
                    aria-label={`Open ${item.title}`}
                    aria-current={dotIndex === index ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
