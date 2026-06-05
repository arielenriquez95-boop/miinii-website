import { useEffect } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/layout";

export const MOBILE_CAROUSEL_TOUCH_CLASS = "max-lg:touch-pan-y max-lg:overscroll-y-auto";

export function useVerticalWheelPassthrough(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const desktopQuery = window.matchMedia(DESKTOP_BREAKPOINT);

    const syncTouchAction = () => {
      element.style.touchAction = desktopQuery.matches ? "" : "pan-y";
    };

    const onWheel = (event) => {
      if (!desktopQuery.matches) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      event.preventDefault();
      window.scrollBy({ top: event.deltaY, behavior: "auto" });
    };

    syncTouchAction();
    desktopQuery.addEventListener("change", syncTouchAction);
    element.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      desktopQuery.removeEventListener("change", syncTouchAction);
      element.style.touchAction = "";
      element.removeEventListener("wheel", onWheel);
    };
  }, [ref]);
}
