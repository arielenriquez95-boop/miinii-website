export function CarouselDots({
  count,
  activeIndex,
  onSelect,
  activeClassName,
  inactiveClassName,
  labelPrefix,
  className = "mt-4 flex justify-center gap-1.5 lg:hidden",
}) {
  return (
    <div className={className} aria-label={`${labelPrefix} slides`}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? activeClassName : inactiveClassName}`}
          aria-label={`Go to ${labelPrefix} ${index + 1}`}
        />
      ))}
    </div>
  );
}
