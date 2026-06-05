import { useCallback, useEffect, useState } from "react";

const SWIPE_THRESHOLD = 45;

export function useSlideModal({ itemCount, index, setIndex, onClose }) {
  const [touchStart, setTouchStart] = useState(null);
  const [slideDirection, setSlideDirection] = useState("next");

  const previous = useCallback(() => {
    setSlideDirection("previous");
    setIndex((current) => (current === 0 ? itemCount - 1 : current - 1));
  }, [itemCount, setIndex]);

  const next = useCallback(() => {
    setSlideDirection("next");
    setIndex((current) => (current === itemCount - 1 ? 0 : current + 1));
  }, [itemCount, setIndex]);

  const goToSlide = useCallback(
    (dotIndex) => {
      setSlideDirection(dotIndex > index ? "next" : "previous");
      setIndex(dotIndex);
    },
    [index, setIndex]
  );

  const onTouchEnd = useCallback(
    (event) => {
      if (touchStart === null) return;
      const distance = touchStart - event.changedTouches[0].clientX;
      if (distance > SWIPE_THRESHOLD) next();
      if (distance < -SWIPE_THRESHOLD) previous();
      setTouchStart(null);
    },
    [touchStart, next, previous]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previous, next, onClose]);

  return {
    touchStart,
    setTouchStart,
    slideDirection,
    previous,
    next,
    goToSlide,
    onTouchEnd,
  };
}
