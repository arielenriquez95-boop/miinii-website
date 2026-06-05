export function CarouselArrow({ direction, onClick, className = "", label, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
      className={`inline-flex shrink-0 items-center justify-center ${className}`.trim()}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {direction === "previous" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

export const productCarouselArrowClass =
  "h-11 w-11 rounded-full bg-[#ff6f31] text-white shadow-xl shadow-orange-300/60 ring-1 ring-white/70 backdrop-blur transition hover:bg-[#f05f20] disabled:pointer-events-none disabled:opacity-0";
