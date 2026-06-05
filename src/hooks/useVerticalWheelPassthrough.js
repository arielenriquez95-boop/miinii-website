import { useEffect } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/layout";

export function useVerticalWheelPassthrough(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onWheel = (event) => {
      if (!window.matchMedia(DESKTOP_BREAKPOINT).matches) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      event.preventDefault();
      window.scrollBy({ top: event.deltaY, behavior: "auto" });
    };

    element.addEventListener("wheel", onWheel, { passive: false });

    return () => element.removeEventListener("wheel", onWheel);
  }, [ref]);
}
