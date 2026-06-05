import { useEffect } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/layout";

export const MOBILE_CAROUSEL_TOUCH_CLASS = "max-lg:overscroll-y-auto";

const AXIS_LOCK_THRESHOLD = 8;
const VERTICAL_GESTURE_COOLDOWN_MS = 120;

export function useVerticalWheelPassthrough(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const desktopQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    let touchStartX = 0;
    let touchStartY = 0;
    let touchAxis = null;
    let verticalCooldownTimer = null;

    const isMobile = () => !desktopQuery.matches;
    const defaultTouchAction = () => (isMobile() ? "pan-x pan-y pinch-zoom" : "");

    const clearScrollAxis = () => {
      delete element.dataset.scrollAxis;
      element.style.overflowX = "";
      element.style.scrollSnapType = "";
      element.style.touchAction = defaultTouchAction();
    };

    const applyVerticalLock = () => {
      element.dataset.scrollAxis = "y";
      element.style.touchAction = "pan-y pinch-zoom";
      element.style.overflowX = "hidden";
      element.style.scrollSnapType = "none";
    };

    const applyHorizontalLock = () => {
      element.dataset.scrollAxis = "x";
      element.style.touchAction = "pan-x pinch-zoom";
      element.style.overflowX = "";
      element.style.scrollSnapType = "";
    };

    const syncTouchAction = () => {
      clearScrollAxis();
    };

    const onTouchStart = (event) => {
      if (!isMobile()) return;

      window.clearTimeout(verticalCooldownTimer);
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
        if (deltaX < AXIS_LOCK_THRESHOLD && deltaY < AXIS_LOCK_THRESHOLD) return;
        touchAxis = deltaY > deltaX ? "y" : "x";
      }

      if (touchAxis === "y") {
        applyVerticalLock();
      } else {
        applyHorizontalLock();
      }
    };

    const resetTouch = () => {
      const endedAxis = touchAxis;
      touchAxis = null;

      if (endedAxis === "y") {
        applyVerticalLock();
        verticalCooldownTimer = window.setTimeout(() => {
          clearScrollAxis();
        }, VERTICAL_GESTURE_COOLDOWN_MS);
        return;
      }

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
      window.clearTimeout(verticalCooldownTimer);
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
