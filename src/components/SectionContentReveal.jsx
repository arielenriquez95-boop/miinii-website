import { useEffect, useRef, useState } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/layout";

const directionClassMap = {
  up: "",
  right: "section-content-item--right",
  left: "section-content-item--left",
  scale: "section-content-item--scale",
};

export function SectionContentReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  style,
  ...props
}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia(DESKTOP_BREAKPOINT).matches) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      requestAnimationFrame(() => setIsRevealed(true));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) reveal();
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClass = directionClassMap[direction] || "";

  return (
    <div
      ref={ref}
      {...props}
      style={{ ...style, "--section-content-delay": `${delay}ms` }}
      className={`section-content-item ${directionClass} ${isRevealed ? "is-content-revealed" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
