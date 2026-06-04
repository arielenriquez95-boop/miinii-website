import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/layout";

export function SectionScrollReveal({ children, className = "", delay = 0, style, ...props }) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !window.matchMedia(DESKTOP_BREAKPOINT).matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsRevealed(true);
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isDesktop = window.matchMedia(DESKTOP_BREAKPOINT).matches;
    if (!isDesktop || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setIsRevealed(true);
    };

    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewHeight * 0.92 && rect.bottom > viewHeight * 0.05) reveal();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) reveal();
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 }
    );

    observer.observe(element);
    checkVisibility();

    const delayedCheck = window.setTimeout(checkVisibility, 120);

    return () => {
      window.clearTimeout(delayedCheck);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      {...props}
      style={{ ...style, "--section-reveal-delay": `${delay}ms` }}
      className={`section-scroll-reveal ${isRevealed ? "is-revealed" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
