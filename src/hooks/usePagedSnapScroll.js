import { useCallback, useEffect, useRef, useState } from "react";

function getMobilePageScrollLeft(carousel, page) {
  const carouselRect = carousel.getBoundingClientRect();
  const pageRect = page.getBoundingClientRect();
  const styles = window.getComputedStyle(carousel);
  const paddingLeft = parseFloat(styles.paddingLeft) || 0;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const targetLeft = carousel.scrollLeft + (pageRect.left - carouselRect.left) - paddingLeft;
  return Math.max(0, Math.min(maxScrollLeft, targetLeft));
}

function getNearestMobilePage(carousel, pageAttribute, datasetKey) {
  const pages = Array.from(carousel.querySelectorAll(`[${pageAttribute}]`));
  if (!pages.length) return { pageIndex: 0, page: null };

  const styles = window.getComputedStyle(carousel);
  const paddingLeft = parseFloat(styles.paddingLeft) || 0;
  const paddingRight = parseFloat(styles.paddingRight) || 0;
  const carouselRect = carousel.getBoundingClientRect();
  const visibleCenter = carouselRect.left + paddingLeft + (carousel.clientWidth - paddingLeft - paddingRight) / 2;

  let nearestPage = pages[0];
  let nearestPageIndex = Number(pages[0].dataset[datasetKey] ?? 0);
  let nearestDistance = Infinity;

  pages.forEach((page) => {
    const pageIndex = Number(page.dataset[datasetKey] ?? 0);
    const pageRect = page.getBoundingClientRect();
    const pageCenter = pageRect.left + pageRect.width / 2;
    const distance = Math.abs(pageCenter - visibleCenter);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestPage = page;
      nearestPageIndex = pageIndex;
    }
  });

  return { pageIndex: nearestPageIndex, page: nearestPage };
}

export function usePagedSnapScroll({ pageAttribute, datasetKey }) {
  const carouselRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const scrollToPage = useCallback(
    (pageIndex, behavior = "smooth") => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const page = carousel.querySelector(`[${pageAttribute}="${pageIndex}"]`);
      if (!page) return;

      carousel.scrollTo({ left: getMobilePageScrollLeft(carousel, page), behavior });
      setActivePage(pageIndex);
    },
    [pageAttribute]
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let snapTimer = null;
    let isPointerDown = false;

    const updatePage = () => {
      const { pageIndex } = getNearestMobilePage(carousel, pageAttribute, datasetKey);
      setActivePage(pageIndex);
    };

    const snapToNearestPage = (behavior = "smooth") => {
      const { pageIndex, page } = getNearestMobilePage(carousel, pageAttribute, datasetKey);
      setActivePage(pageIndex);
      if (page) {
        carousel.scrollTo({ left: getMobilePageScrollLeft(carousel, page), behavior });
      }
    };

    const scheduleSnap = () => {
      window.clearTimeout(snapTimer);
      snapTimer = window.setTimeout(() => {
        if (!isPointerDown) snapToNearestPage();
      }, 90);
    };

    const onScroll = () => {
      updatePage();
      scheduleSnap();
    };

    const onPointerDown = () => {
      isPointerDown = true;
      window.clearTimeout(snapTimer);
    };

    const onPointerUp = () => {
      isPointerDown = false;
      scheduleSnap();
    };

    const onResize = () => snapToNearestPage("auto");
    const onScrollEnd = () => snapToNearestPage("auto");

    requestAnimationFrame(() => snapToNearestPage("auto"));
    carousel.addEventListener("scroll", onScroll, { passive: true });
    carousel.addEventListener("scrollend", onScrollEnd, { passive: true });
    carousel.addEventListener("pointerdown", onPointerDown, { passive: true });
    carousel.addEventListener("pointerup", onPointerUp, { passive: true });
    carousel.addEventListener("pointercancel", onPointerUp, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(snapTimer);
      carousel.removeEventListener("scroll", onScroll);
      carousel.removeEventListener("scrollend", onScrollEnd);
      carousel.removeEventListener("pointerdown", onPointerDown);
      carousel.removeEventListener("pointerup", onPointerUp);
      carousel.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, [pageAttribute, datasetKey]);

  return { carouselRef, activePage, scrollToPage };
}
