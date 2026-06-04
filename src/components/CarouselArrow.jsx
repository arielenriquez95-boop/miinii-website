export function CarouselArrow({ direction, onClick, className, label }) {
  const symbol = direction === "previous" ? "‹" : "›";

  return (
    <button type="button" onClick={onClick} className={className} aria-label={label}>
      <span className="flex h-full w-full items-center justify-center pb-0.5 leading-none">{symbol}</span>
    </button>
  );
}
