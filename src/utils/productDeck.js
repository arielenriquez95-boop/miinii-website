export function getProductDeckCardStyle(offset, dragX, isDragging) {
  const transition = isDragging
    ? "none"
    : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)";

  if (offset < -1) {
    return {
      transform: "translate3d(-115%, 0, 0) scale(0.88)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      transition,
    };
  }

  if (offset === -1) {
    const enter = Math.min(1, Math.max(0, dragX) / 130);
    if (!isDragging && enter === 0) {
      return {
        transform: "translate3d(-115%, 0, 0) scale(0.88)",
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none",
        transition,
      };
    }

    return {
      transform: `translate3d(${-96 + enter * 96}%, 0, 0) scale(${0.9 + enter * 0.1})`,
      opacity: enter,
      zIndex: 35,
      pointerEvents: "none",
      transition,
    };
  }

  if (offset === 0) {
    return {
      transform: `translate3d(${dragX}px, 0, 0) scale(1)`,
      opacity: 1,
      zIndex: 40,
      pointerEvents: "auto",
      transition,
    };
  }

  if (offset === 1) {
    const pullForward = isDragging ? Math.min(1, Math.max(0, -dragX) / 130) : 0;
    const x = 24 * (1 - pullForward);
    const y = 16 * (1 - pullForward);
    const scale = 0.93 + 0.07 * pullForward;

    return {
      transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
      opacity: 0.9 + 0.1 * pullForward,
      zIndex: 30 - Math.round(pullForward * 5),
      pointerEvents: "none",
      transition,
    };
  }

  if (offset === 2) {
    const pullForward = isDragging ? Math.min(1, Math.max(0, -dragX) / 130) * 0.45 : 0;
    const x = 38 * (1 - pullForward);
    const y = 24 * (1 - pullForward);
    const scale = 0.87 + 0.05 * pullForward;

    return {
      transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
      opacity: 0.72,
      zIndex: 20,
      pointerEvents: "none",
      transition,
    };
  }

  return {
    transform: "translate3d(44px, 30px, 0) scale(0.82)",
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
    transition,
  };
}
