import { useEffect, useRef, useState } from "react";

function resolveScrollRoot(scrollRoot) {
  if (!scrollRoot) return null;
  if (scrollRoot instanceof Element) return scrollRoot;
  if (typeof scrollRoot === "object" && "current" in scrollRoot) return scrollRoot.current;
  return null;
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up", scrollRoot = null, style = {}, ...props }) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const scrollRootElement = resolveScrollRoot(scrollRoot);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsRevealed(true);
      return;
    }

    let revealed = false;
    const root = resolveScrollRoot(scrollRoot);

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      requestAnimationFrame(() => setIsRevealed(true));
    };

    const fallbackCheck = () => {
      if (revealed) return;

      const rect = element.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;

      if (root) {
        const rootRect = root.getBoundingClientRect();
        const overlapX = Math.min(rect.right, rootRect.right) - Math.max(rect.left, rootRect.left);
        const overlapY = Math.min(rect.bottom, rootRect.bottom) - Math.max(rect.top, rootRect.top);
        if (overlapX > 18 && overlapY > 18) reveal();
        return;
      }

      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewWidth = window.innerWidth || document.documentElement.clientWidth;
      const visibleY = rect.top < viewHeight * 0.84 && rect.bottom > viewHeight * 0.08;
      const visibleX = rect.left < viewWidth * 0.98 && rect.right > viewWidth * 0.02;
      if (visibleY && visibleX) reveal();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) reveal();
      },
      {
        root,
        rootMargin: root ? "0px 18px" : "0px 0px -14% 0px",
        threshold: root ? 0.01 : 0.12,
      }
    );

    observer.observe(element);

    const onScrollOrResize = () => fallbackCheck();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    if (root) root.addEventListener("scroll", onScrollOrResize, { passive: true });

    const resizeObserver = new ResizeObserver(onScrollOrResize);
    resizeObserver.observe(element);
    if (root) resizeObserver.observe(root);

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

  const directionClass =
    direction === "right"
      ? "scroll-reveal--right"
      : direction === "left"
        ? "scroll-reveal--left"
        : direction === "scale"
          ? "scroll-reveal--scale"
          : "";

  return (
    <div
      ref={ref}
      {...props}
      style={{ ...style, "--scroll-reveal-delay": `${delay}ms` }}
      className={`scroll-reveal ${directionClass} ${isRevealed ? "is-revealed" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function SectionReveal({ children, className = "", delay = 0, scrollRoot = null }) {
  return (
    <ScrollReveal delay={delay} className={className} scrollRoot={scrollRoot}>
      {children}
    </ScrollReveal>
  );
}
