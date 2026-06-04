import { useSlideModal } from "../../hooks/useSlideModal";
import { scrollToSection } from "../../utils/scroll";
import { ProductDetailsList, ProductOrderButton, ProductPriceTags } from "./ProductDetails";

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-xl sm:bg-slate-950/90 sm:p-6">
      <button type="button" onClick={previous} className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur transition hover:bg-white/20 md:flex" aria-label="Previous product">
        ‹
      </button>
      <button type="button" onClick={next} className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur transition hover:bg-white/20 md:flex" aria-label="Next product">
        ›
      </button>

      <div
        key={product.title}
        className={`relative flex max-h-[min(88dvh,660px)] w-full max-w-[360px] flex-col overflow-hidden rounded-[1.65rem] border border-white/20 bg-white shadow-2xl shadow-black/30 animate-[modalSlideIn_.45s_cubic-bezier(.22,1,.36,1)_both] sm:max-w-[400px] md:mx-auto md:h-auto md:max-h-[90vh] md:max-w-5xl md:rounded-[2rem] md:border-white/10 md:shadow-black/40 ${slideDirection === "next" ? "[--slide-start:10%]" : "[--slide-start:-10%]"}`}
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <button type="button" onClick={onClose} className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/75 text-xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-slate-950 md:right-3 md:top-3 md:h-11 md:w-11 md:text-2xl" aria-label="Close product preview">
          ×
        </button>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:grid md:max-h-[90vh] md:grid-cols-[0.95fr_1.05fr] md:overflow-y-auto">
          <div className="flex min-h-0 flex-1 flex-col bg-white md:hidden">
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

          <div className="relative hidden items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50 p-6 md:flex md:sticky md:top-0">
            <div className="aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[1.25rem] bg-white ring-1 ring-slate-100 shadow-inner">
              <img src={product.image} alt={`${product.title} preview`} className="block h-full w-full object-contain" />
            </div>
          </div>

          <div className="hidden min-h-0 flex-col overflow-y-auto p-8 md:flex lg:p-10">
            <h2 className="text-3xl font-black tracking-tight text-slate-950 lg:text-5xl">{product.title}</h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">{product.shortText}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <ProductPriceTags product={product} size="desktop" />
            </div>
            <div className="mt-5 rounded-[1.5rem] bg-[#fff8f3] p-5 ring-1 ring-orange-100">
              <ProductDetailsList product={product} size="desktop" />
            </div>
            <ProductOrderButton onClick={startOrder} size="desktop" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-white/10 px-3 py-2 backdrop-blur-md md:flex">
        {products.map((item, dotIndex) => (
          <button
            key={item.title}
            type="button"
            onClick={() => goToSlide(dotIndex)}
            className={`h-2.5 rounded-full transition ${dotIndex === index ? "w-8 bg-[#16C1C1]" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Open ${item.title}`}
          />
        ))}
      </div>
    </div>
  );
}
