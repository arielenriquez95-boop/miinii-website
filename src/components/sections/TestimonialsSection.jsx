import { testimonials } from "../../data/content";
import { MOBILE_CAROUSEL_TOUCH_CLASS, useVerticalWheelPassthrough } from "../../hooks/useVerticalWheelPassthrough";
import { TestimonialCard } from "../cards/TestimonialCard";
import { CarouselDots } from "../CarouselDots";
import { ScrollReveal } from "../ScrollReveal";
import { SectionContentReveal } from "../SectionContentReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";

function chunkItems(items, size) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, pageIndex) =>
    items.slice(pageIndex * size, pageIndex * size + size)
  );
}

export function TestimonialsSection({ pagedScroll }) {
  const testimonialPages = chunkItems(testimonials, 2);
  const { carouselRef, activePage, scrollToPage } = pagedScroll;

  useVerticalWheelPassthrough(carouselRef);

  return (
    <SectionScrollReveal id="testimonials" className="relative overflow-hidden bg-gradient-to-br from-[#0F766E] via-[#16C1C1] to-[#0E7490] py-10 text-white sm:py-14 lg:py-16">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#ff6f31]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center max-lg:block lg:contents">
          <p className="section-title-eyebrow mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/80">Testimonials</p>
          <h2 className="section-title-heading text-3xl font-black tracking-tight text-white sm:text-4xl">Kind words from Miinii clients</h2>
          <p className="section-title-text mt-3 text-base leading-7 text-white/80">Heartfelt notes from customers who turned meaningful moments into custom keepsakes.</p>
        </ScrollReveal>

        <div
          ref={carouselRef}
          className={`-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pb-5 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-6 sm:px-6 lg:hidden [&::-webkit-scrollbar]:hidden ${MOBILE_CAROUSEL_TOUCH_CLASS}`}
        >
          {testimonialPages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              data-testimonial-page={pageIndex}
              className="grid basis-full shrink-0 snap-start snap-always scroll-ml-4 grid-cols-1 grid-rows-2 gap-3 sm:scroll-ml-6 sm:gap-4"
            >
              {page.map((testimonial, cardIndex) => {
                const revealIndex = pageIndex * 2 + cardIndex;
                return (
                  <ScrollReveal key={testimonial.name} delay={revealIndex * 90} className="h-full min-w-0">
                    <TestimonialCard testimonial={testimonial} />
                  </ScrollReveal>
                );
              })}
            </div>
          ))}
        </div>

        <div className="hidden gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-2">
          {testimonials.map((testimonial, index) => (
            <SectionContentReveal key={testimonial.name} delay={index * 70} direction="scale" className="h-full min-w-0">
              <TestimonialCard testimonial={testimonial} />
            </SectionContentReveal>
          ))}
        </div>

        <CarouselDots
          count={testimonialPages.length}
          activeIndex={activePage}
          onSelect={scrollToPage}
          labelPrefix="Testimonial"
          className="mt-1 flex justify-center gap-1.5 lg:hidden"
          activeClassName="w-6 bg-white"
          inactiveClassName="w-1.5 bg-white/45"
        />
      </div>
    </SectionScrollReveal>
  );
}
