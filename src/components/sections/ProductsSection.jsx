import { products } from "../../data/content";
import { ProductDeckCarousel } from "../carousel/ProductDeckCarousel";
import { ProductCard } from "../cards/ProductCard";
import { CarouselArrow } from "../CarouselArrow";
import { SectionReveal } from "../ScrollReveal";
import { SectionContentReveal } from "../SectionContentReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";
import { SectionHeader } from "../SectionHeader";

export function ProductsSection({ carousel, onOpenProduct }) {
  const { carouselRef, activeIndex, setActiveIndex, getMaxIndex, scrollPrevious, scrollNext } = carousel;

  return (
    <SectionScrollReveal id="products" className="overflow-visible bg-white pb-16 pt-6 text-slate-950 sm:pb-24 sm:pt-10">
      <div className="mx-auto max-w-7xl overflow-visible px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="What we make" title="Mini figures for every story" text="Choose the Miinii style that fits your gift, collection, or special memory." />
        <div className="relative overflow-visible">
          {activeIndex > 0 && (
            <CarouselArrow
              direction="previous"
              onClick={scrollPrevious}
              label="Scroll products left"
              className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff6f31] text-2xl font-bold text-white shadow-xl shadow-orange-300/60 ring-1 ring-white/70 backdrop-blur transition hover:-translate-x-0.5 hover:bg-[#f05f20] lg:flex"
            />
          )}
          {activeIndex < getMaxIndex() && (
            <CarouselArrow
              direction="next"
              onClick={scrollNext}
              label="Scroll products right"
              className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff6f31] text-2xl font-bold text-white shadow-xl shadow-orange-300/60 ring-1 ring-white/70 backdrop-blur transition hover:translate-x-0.5 hover:bg-[#f05f20] lg:flex"
            />
          )}

          <SectionReveal delay={80} className="lg:hidden">
            <ProductDeckCarousel products={products} activeIndex={activeIndex} onIndexChange={setActiveIndex} onOpenProduct={onOpenProduct} />
          </SectionReveal>

          <div className="relative hidden overflow-visible lg:block">
            <div
              ref={carouselRef}
              className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth py-2 [overflow-clip-margin:4rem] [scrollbar-width:none] [-ms-overflow-style:none] px-8 py-4 [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max items-stretch gap-4 lg:px-4">
                {products.map((product, index) => (
                  <SectionContentReveal
                    key={product.title}
                    data-product-index={index}
                    delay={index * 80}
                    direction="scale"
                    style={{ "--desktop-float-delay": `${index * 120}ms` }}
                    className="h-full w-[var(--product-slide-w)] max-w-none shrink-0 snap-start px-5 py-10"
                  >
                    <ProductCard product={product} onClick={() => onOpenProduct(index)} />
                  </SectionContentReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionScrollReveal>
  );
}
