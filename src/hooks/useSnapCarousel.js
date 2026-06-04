import { useCallback, useEffect, useRef, useState } from "react";
import { CAROUSEL_GAP, DESKTOP_BREAKPOINT } from "../constants/layout";

function isDesktopView() {
  return window.matchMedia(DESKTOP_BREAKPOINT).matches;
}

function getNearestIndex(carousel, dataAttribute, desktopMode) {
  const cards = Array.from(carousel.querySelectorAll(`[${dataAttribute}]`));
  if (!cards.length) return 0;

  if (desktopMode) {
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach((card) => {
      const index = Number(card.getAttribute(dataAttribute));
      const distance = Math.abs(card.offsetLeft - carousel.scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }

  const carouselRect = carousel.getBoundingClientRect();
  const carouselCenter = carouselRect.left + carouselRect.width / 2;
  let nearestIndex = 0;
  let nearestDistance = Infinity;

  cards.forEach((card) => {
    const index = Number(card.getAttribute(dataAttribute));
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(cardCenter - carouselCenter);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });

  return nearestIndex;
}

function scrollToIndex(carousel, dataAttribute, index, behavior = "smooth") {
  const card = carousel.querySelector(`[${dataAttribute}="${index}"]`);
  if (!card) return;

  if (isDesktopView()) {
    carousel.scrollTo({ left: card.offsetLeft, behavior });
    return;
  }

  const carouselRect = carousel.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const carouselCenter = carouselRect.left + carouselRect.width / 2;
  const cardCenter = cardRect.left + cardRect.width / 2;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const targetLeft = Math.max(0, Math.min(maxScrollLeft, carousel.scrollLeft + (cardCenter - carouselCenter)));
  carousel.scrollTo({ left: targetLeft, behavior });
}

export function useSnapCarousel({
  itemCount,
  dataAttribute,
  desktopVisibleCount,
  slideWidthVariable,
  desktopOnlyListeners = false,
}) {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getMaxIndex = useCallback(() => {
    if (isDesktopView()) {
      return Math.max(0, itemCount - desktopVisibleCount);
    }
    return itemCount - 1;
  }, [itemCount, desktopVisibleCount]);

  const snapCarousel = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const nearestIndex = getNearestIndex(carousel, dataAttribute, isDesktopView());
    const desktop = isDesktopView();

    if (!desktop) {
      const card = carousel.querySelector(`[${dataAttribute}="${nearestIndex}"]`);
      if (card) {
        const carouselRect = carousel.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const carouselCenter = carouselRect.left + carouselRect.width / 2;
        const cardCenter = cardRect.left + cardRect.width / 2;
        if (Math.abs(cardCenter - carouselCenter) > 2) {
          scrollToIndex(carousel, dataAttribute, nearestIndex);
          return;
        }
      }
    } else {
      const card = carousel.querySelector(`[${dataAttribute}="${nearestIndex}"]`);
      if (card && Math.abs(card.offsetLeft - carousel.scrollLeft) > 2) {
        scrollToIndex(carousel, dataAttribute, nearestIndex, "smooth");
        return;
      }
    }

    setActiveIndex(nearestIndex);
  }, [dataAttribute]);

  const scrollToItem = useCallback(
    (index, behavior = "smooth") => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      scrollToIndex(carousel, dataAttribute, index, behavior);
    },
    [dataAttribute]
  );

  const scrollByDirection = useCallback(
    (direction) => {
      const maxIndex = getMaxIndex();
      const nextIndex = direction === "next" ? activeIndex + 1 : activeIndex - 1;
      const safeIndex = Math.max(0, Math.min(maxIndex, nextIndex));
      setActiveIndex(safeIndex);
      scrollToItem(safeIndex);
    },
    [activeIndex, getMaxIndex, scrollToItem]
  );

  const scrollToSafeIndex = useCallback(
    (index) => {
      const safeIndex = Math.max(0, Math.min(itemCount - 1, index));
      setActiveIndex(safeIndex);
      scrollToItem(safeIndex);
    },
    [itemCount, scrollToItem]
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollEndTimer = null;
    let isTouching = false;
    let listenersActive = false;

    const updateDesktopLayout = () => {
      if (!isDesktopView()) return;
      carousel.style.setProperty(
        slideWidthVariable,
        `${(carousel.clientWidth - CAROUSEL_GAP * 2) / desktopVisibleCount}px`
      );
      const index = getNearestIndex(carousel, dataAttribute, true);
      scrollToIndex(carousel, dataAttribute, index, "auto");
      setActiveIndex(index);
    };

    const updateGalleryLayout = () => {
      if (isDesktopView()) {
        carousel.style.setProperty(
          slideWidthVariable,
          `${(carousel.clientWidth - CAROUSEL_GAP * 2) / desktopVisibleCount}px`
        );
      } else {
        carousel.style.removeProperty(slideWidthVariable);
      }
      const index = getNearestIndex(carousel, dataAttribute, isDesktopView());
      scrollToIndex(carousel, dataAttribute, index, "auto");
      setActiveIndex(index);
    };

    const scheduleSnap = (delay = 80) => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(snapCarousel, delay);
    };

    const onScroll = () => {
      if (!isTouching) scheduleSnap();
    };

    const onTouchStart = () => {
      isTouching = true;
      clearTimeout(scrollEndTimer);
    };

    const onTouchEnd = () => {
      isTouching = false;
      scheduleSnap(50);
    };

    const bindListeners = () => {
      if (listenersActive) return;
      listenersActive = true;
      carousel.addEventListener("scroll", onScroll, { passive: true });
      carousel.addEventListener("scrollend", snapCarousel, { passive: true });
      carousel.addEventListener("touchstart", onTouchStart, { passive: true });
      carousel.addEventListener("touchend", onTouchEnd, { passive: true });
    };

    const unbindListeners = () => {
      if (!listenersActive) return;
      listenersActive = false;
      clearTimeout(scrollEndTimer);
      carousel.removeEventListener("scroll", onScroll);
      carousel.removeEventListener("scrollend", snapCarousel);
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("touchend", onTouchEnd);
    };

    const onResize = () => {
      if (desktopOnlyListeners) {
        if (isDesktopView()) {
          bindListeners();
          updateDesktopLayout();
        } else {
          unbindListeners();
          carousel.style.removeProperty(slideWidthVariable);
        }
        return;
      }

      updateGalleryLayout();
    };

    if (desktopOnlyListeners) {
      onResize();
    } else {
      requestAnimationFrame(updateGalleryLayout);
      bindListeners();
    }

    window.addEventListener("resize", onResize);

    return () => {
      unbindListeners();
      window.removeEventListener("resize", onResize);
      carousel.style.removeProperty(slideWidthVariable);
    };
  }, [snapCarousel, dataAttribute, desktopVisibleCount, slideWidthVariable, desktopOnlyListeners]);

  return {
    carouselRef,
    activeIndex,
    setActiveIndex,
    getMaxIndex,
    scrollPrevious: () => scrollByDirection("previous"),
    scrollNext: () => scrollByDirection("next"),
    scrollToSafeIndex,
  };
}
