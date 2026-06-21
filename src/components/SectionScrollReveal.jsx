import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/layout";

export function SectionScrollReveal({ children, className = "", delay = 0, style, ...props }) {
  const ref = useRef(null);
  const revealedRef = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !window.matchMedia(DESKTOP_BREAKPOINT).matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealedRef.current = true;
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

    const reveal = () => {
      if (revealedRef.current) return;
      revealedRef.current = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsRevealed(true));
      });
    };

    const checkVisibility = () => {
      if (revealedRef.current) return;

      const rect = element.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;

      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewWidth = window.innerWidth || document.documentElement.clientWidth;
      const visibleY = rect.top < viewHeight * 0.92 && rect.bottom > viewHeight * 0.05;
      const visibleX = rect.left < viewWidth * 0.99 && rect.right > viewWidth * 0.01;
      if (visibleY && visibleX) reveal();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0 }
    );

    observer.observe(element);

    const onScrollOrResize = () => checkVisibility();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const resizeObserver = new ResizeObserver(onScrollOrResize);
    resizeObserver.observe(element);

    checkVisibility();
    const delayedCheck = window.setTimeout(onScrollOrResize, 80);
    const delayedCheck2 = window.setTimeout(onScrollOrResize, 350);

    return () => {
      window.clearTimeout(delayedCheck);
      window.clearTimeout(delayedCheck2);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
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
