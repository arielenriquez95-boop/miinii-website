import { faqs } from "../../data/content";
import { MOBILE_CAROUSEL_TOUCH_CLASS, useVerticalWheelPassthrough } from "../../hooks/useVerticalWheelPassthrough";
import { FaqCard } from "../cards/FaqCard";
import { CarouselDots } from "../CarouselDots";
import { ScrollReveal } from "../ScrollReveal";
import { SectionContentReveal } from "../SectionContentReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";
import { SectionHeader } from "../SectionHeader";

function chunkItems(items, size) {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, pageIndex) =>
    items.slice(pageIndex * size, pageIndex * size + size)
  );
}

export function FaqSection({ pagedScroll }) {
  const faqPages = chunkItems(faqs, 4);
  const { carouselRef, activePage, scrollToPage } = pagedScroll;

  useVerticalWheelPassthrough(carouselRef);

  return (
    <SectionScrollReveal id="faq" className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-[#16C1C1]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6f31]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Common questions" text="Simple answers to help you before ordering your custom Miinii." />

        <div
          ref={carouselRef}
          className={`-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pb-5 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-6 sm:px-6 lg:hidden [&::-webkit-scrollbar]:hidden ${MOBILE_CAROUSEL_TOUCH_CLASS}`}
        >
          {faqPages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              data-faq-page={pageIndex}
              className="grid basis-full shrink-0 snap-start snap-always scroll-ml-4 grid-cols-2 grid-rows-2 gap-3 sm:scroll-ml-6 sm:gap-4"
            >
              {page.map((faq, cardIndex) => {
                const revealIndex = pageIndex * 4 + cardIndex;
                return (
                  <ScrollReveal key={faq.q} delay={revealIndex * 70} className="h-full min-w-0">
                    <FaqCard faq={faq} />
                  </ScrollReveal>
                );
              })}
            </div>
          ))}
        </div>

        <div className="hidden gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-2">
          {faqs.map((faq, index) => (
            <SectionContentReveal key={faq.q} delay={index * 60} direction="scale" className="h-full min-w-0">
              <FaqCard faq={faq} />
            </SectionContentReveal>
          ))}
        </div>

        <CarouselDots
          count={faqPages.length}
          activeIndex={activePage}
          onSelect={scrollToPage}
          labelPrefix="FAQ"
          className="mt-1 flex justify-center gap-1.5 lg:hidden"
          activeClassName="w-6 bg-[#16C1C1]"
          inactiveClassName="w-1.5 bg-slate-300"
        />
      </div>
    </SectionScrollReveal>
  );
}
