import { collageItems } from "../../data/content";
import { useVerticalWheelPassthrough } from "../../hooks/useVerticalWheelPassthrough";
import { GalleryCard } from "../cards/GalleryCard";
import { CarouselArrow } from "../CarouselArrow";
import { CarouselDots } from "../CarouselDots";
import { SectionContentReveal } from "../SectionContentReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";
import { SectionHeader } from "../SectionHeader";

export function GallerySection({ carousel, onOpenGallery }) {
  const { carouselRef, activeIndex, getMaxIndex, scrollPrevious, scrollNext, scrollToSafeIndex } = carousel;

  useVerticalWheelPassthrough(carouselRef);

  return (
    <SectionScrollReveal id="gallery" className="bg-[#070B18] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Every Miinii tells a story"
          text="Explore custom mini figures, pet keepsakes, packaging details, and finished pieces crafted from meaningful photos and stories."
          dark
        />
        <div className="relative">
          {activeIndex > 0 && (
            <CarouselArrow
              direction="previous"
              onClick={scrollPrevious}
              label="Scroll gallery left"
              className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#16C1C1] text-2xl font-bold text-white shadow-xl shadow-teal-900/40 ring-1 ring-white/20 backdrop-blur transition hover:-translate-x-0.5 hover:bg-[#12a8a8] lg:flex"
            />
          )}
          {activeIndex < getMaxIndex() && (
            <CarouselArrow
              direction="next"
              onClick={scrollNext}
              label="Scroll gallery right"
              className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#16C1C1] text-2xl font-bold text-white shadow-xl shadow-teal-900/40 ring-1 ring-white/20 backdrop-blur transition hover:translate-x-0.5 hover:bg-[#12a8a8] lg:flex"
            />
          )}

          <div
            ref={carouselRef}
            className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth py-2 [overflow-clip-margin:2.5rem] [scrollbar-width:none] [-ms-overflow-style:none] px-6 sm:px-8 lg:overscroll-y-auto lg:px-4 [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex w-max gap-3 px-[calc(50%-min(42.5vw,200px))] sm:gap-4 lg:gap-4 lg:px-2">
              {collageItems.map((item, index) => (
                <SectionContentReveal
                  key={item.title}
                  data-gallery-index={index}
                  delay={index * 80}
                  direction="scale"
                  style={{ "--desktop-float-delay": `${index * 130}ms` }}
                  className="h-full w-[85vw] max-w-[400px] shrink-0 snap-center snap-always px-2 lg:w-[var(--gallery-slide-w)] lg:max-w-none lg:snap-start lg:px-3"
                >
                  <GalleryCard item={item} onClick={() => onOpenGallery(index)} />
                </SectionContentReveal>
              ))}
            </div>
          </div>

          <CarouselDots
            count={collageItems.length}
            activeIndex={activeIndex}
            onSelect={scrollToSafeIndex}
            labelPrefix="Gallery"
            activeClassName="w-6 bg-[#16C1C1]"
            inactiveClassName="w-1.5 bg-white/35"
          />
        </div>
      </div>
    </SectionScrollReveal>
  );
}
