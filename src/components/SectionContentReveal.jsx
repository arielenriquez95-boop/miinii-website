import { useEffect, useRef, useState } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/layout";

const directionClassMap = {
  up: "",
  right: "section-content-item--right",
  left: "section-content-item--left",
  scale: "section-content-item--scale",
};

function resolveScrollRoot(scrollRoot) {
  if (!scrollRoot) return null;
  if (scrollRoot instanceof Element) return scrollRoot;
  if (typeof scrollRoot === "object" && "current" in scrollRoot) return scrollRoot.current;
  return null;
}

export function SectionContentReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scrollRoot = null,
  style,
  ...props
}) {
  const ref = useRef(null);
  const revealedRef = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const scrollRootElement = resolveScrollRoot(scrollRoot);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealedRef.current = true;
      setIsRevealed(true);
      return;
    }

    const root = resolveScrollRoot(scrollRoot);

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

      if (root) {
        const rootRect = root.getBoundingClientRect();
        const overlapX = Math.min(rect.right, rootRect.right) - Math.max(rect.left, rootRect.left);
        const overlapY = Math.min(rect.bottom, rootRect.bottom) - Math.max(rect.top, rootRect.top);
        const minOverlap = Math.min(rect.width, rect.height) * 0.08;
        if (overlapX > minOverlap && overlapY > minOverlap) reveal();
        return;
      }

      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewWidth = window.innerWidth || document.documentElement.clientWidth;
      const isDesktop = window.matchMedia(DESKTOP_BREAKPOINT).matches;
      const visibleY = rect.top < viewHeight * (isDesktop ? 0.92 : 0.84) && rect.bottom > viewHeight * (isDesktop ? 0.05 : 0.08);
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
      {
        root,
        rootMargin: root ? "0px 12px" : "0px 0px -4% 0px",
        threshold: 0,
      }
    );

    observer.observe(element);

    const onScrollOrResize = () => checkVisibility();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    if (root) root.addEventListener("scroll", onScrollOrResize, { passive: true });

    const resizeObserver = new ResizeObserver(onScrollOrResize);
    resizeObserver.observe(element);
    if (root) resizeObserver.observe(root);

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
      if (root) root.removeEventListener("scroll", onScrollOrResize);
    };
  }, [scrollRoot, scrollRootElement]);

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
