import { useEffect, useRef, useState } from "react";
import { isVideoFile } from "../utils/media";

export function MediaPreview({ src, alt, className = "", videoClassName = "", lazy = false }) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(!lazy);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!lazy || shouldRender) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px", threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [lazy, shouldRender]);

  useEffect(() => {
    if (shouldRender) setIsReady(false);
  }, [shouldRender, src]);

  if (isVideoFile(src)) {
    const layoutClasses = new Set(["h-full", "w-full", "size-full", "object-cover", "object-contain"]);
    const fitClass = className.includes("object-contain") ? "object-contain" : "object-cover";
    const effectClass = className
      .split(/\s+/)
      .filter((token) => token && !layoutClasses.has(token))
      .join(" ");

    const showVideo = !lazy || shouldRender;

    return (
      <div
        ref={containerRef}
        className="relative size-full min-h-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950"
        aria-label={alt}
        role="img"
      >
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(22,193,193,0.28),transparent_34%),radial-gradient(circle_at_70%_80%,rgba(255,111,49,0.24),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] transition-opacity duration-500 ${isReady ? "opacity-0" : "opacity-100"}`} />
        {showVideo && (
          <video
            src={src}
            className={`absolute inset-0 size-full ${fitClass} scale-110 blur-xl transition-opacity duration-500 ${isReady ? "opacity-0" : "opacity-75"} ${effectClass}`.trim()}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        )}
        {showVideo && (
          <video
            src={src}
            className={`absolute inset-0 size-full ${fitClass} transition-opacity duration-500 ${isReady ? "opacity-100" : "opacity-0"} ${effectClass} ${videoClassName}`.trim()}
            autoPlay
            muted
            loop
            playsInline
            preload={lazy ? "metadata" : "auto"}
            onLoadedData={() => setIsReady(true)}
            onCanPlay={() => setIsReady(true)}
            aria-label={alt}
          />
        )}
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading={lazy ? "lazy" : "eager"} />;
}
