import { useEffect } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/layout";

export const MOBILE_CAROUSEL_TOUCH_CLASS = "max-lg:touch-pan-y max-lg:overscroll-y-auto";

export function useVerticalWheelPassthrough(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const desktopQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    let touchStartX = 0;
    let touchStartY = 0;
    let touchAxis = null;

    const isMobile = () => !desktopQuery.matches;

    const clearScrollAxis = () => {
      delete element.dataset.scrollAxis;
      element.style.overflowX = "";
      element.style.scrollSnapType = "";
    };

    const syncTouchAction = () => {
      element.style.touchAction = isMobile() ? "pan-y pinch-zoom" : "";
      clearScrollAxis();
    };

    const onTouchStart = (event) => {
      if (!isMobile()) return;

      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      touchAxis = null;
      clearScrollAxis();
    };

    const onTouchMove = (event) => {
      if (!isMobile()) return;

      const deltaX = Math.abs(event.touches[0].clientX - touchStartX);
      const deltaY = Math.abs(event.touches[0].clientY - touchStartY);

      if (touchAxis === null) {
        if (deltaX < 8 && deltaY < 8) return;
        touchAxis = deltaY > deltaX ? "y" : "x";
      }

      element.dataset.scrollAxis = touchAxis;

      if (touchAxis === "y") {
        element.style.overflowX = "hidden";
        element.style.scrollSnapType = "none";
      } else {
        element.style.overflowX = "";
        element.style.scrollSnapType = "";
      }
    };

    const resetTouch = () => {
      touchAxis = null;
      clearScrollAxis();
    };

    const onWheel = (event) => {
      if (!desktopQuery.matches) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      event.preventDefault();
      window.scrollBy({ top: event.deltaY, behavior: "auto" });
    };

    syncTouchAction();
    desktopQuery.addEventListener("change", syncTouchAction);
    element.addEventListener("touchstart", onTouchStart, { passive: true });
    element.addEventListener("touchmove", onTouchMove, { passive: true });
    element.addEventListener("touchend", resetTouch, { passive: true });
    element.addEventListener("touchcancel", resetTouch, { passive: true });
    element.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      desktopQuery.removeEventListener("change", syncTouchAction);
      element.style.touchAction = "";
      clearScrollAxis();
      element.removeEventListener("touchstart", onTouchStart);
      element.removeEventListener("touchmove", onTouchMove);
      element.removeEventListener("touchend", resetTouch);
      element.removeEventListener("touchcancel", resetTouch);
      element.removeEventListener("wheel", onWheel);
    };
  }, [ref]);
}
