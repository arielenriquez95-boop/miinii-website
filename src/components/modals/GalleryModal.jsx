import { useSlideModal } from "../../hooks/useSlideModal";
import { MediaPreview } from "../MediaPreview";

export function GalleryModal({ items, index, setIndex, onClose }) {
  const item = items[index];
  const { setTouchStart, slideDirection, previous, next, goToSlide, onTouchEnd } = useSlideModal({
    itemCount: items.length,
    index,
    setIndex,
    onClose,
  });

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-xl sm:p-6">
      <button type="button" onClick={onClose} className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-white/25" aria-label="Close gallery preview">
        ×
      </button>
      <button type="button" onClick={previous} className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:flex" aria-label="Previous gallery item">
        ‹
      </button>

      <div className="w-full max-w-5xl" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={onTouchEnd}>
        <div className="relative mx-auto aspect-[4/5] max-h-[82vh] w-full max-w-[min(82vw,520px)] overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-2xl shadow-black/40">
          <MediaPreview
            key={item.title}
            src={item.image}
            alt={`${item.title} full preview`}
            className={`h-full w-full object-contain animate-[modalSlideIn_.45s_cubic-bezier(.22,1,.36,1)_both] ${slideDirection === "next" ? "[--slide-start:18%]" : "[--slide-start:-18%]"}`}
          />
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((dot, dotIndex) => (
            <button
              key={dot.title}
              type="button"
              onClick={() => goToSlide(dotIndex)}
              className={`h-2.5 rounded-full transition ${dotIndex === index ? "w-8 bg-[#16C1C1]" : "w-2.5 bg-white/30 hover:bg-white/50"}`}
              aria-label={`Open ${dot.title}`}
            />
          ))}
        </div>
      </div>

      <button type="button" onClick={next} className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:flex" aria-label="Next gallery item">
        ›
      </button>
      <button type="button" onClick={previous} className="absolute bottom-5 left-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:hidden" aria-label="Previous gallery item">
        ‹
      </button>
      <button type="button" onClick={next} className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:hidden" aria-label="Next gallery item">
        ›
      </button>
    </div>
  );
}
