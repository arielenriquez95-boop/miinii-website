import { useRef, useState } from "react";
import { PRODUCT_DECK_SWIPE_THRESHOLD } from "../../constants/layout";
import { getProductDeckCardStyle } from "../../utils/productDeck";
import { ProductCard } from "../cards/ProductCard";

export function ProductDeckCarousel({ products, activeIndex, onIndexChange, onOpenProduct }) {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const dragAxis = useRef(null);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(products.length - 1, index));
    onIndexChange(safeIndex);
    setDragX(0);
    setIsDragging(false);
    dragAxis.current = null;
  };

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
    dragAxis.current = null;
    setIsDragging(true);
  };

  const onTouchMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.touches[0].clientX - touchStartX.current;
    const deltaY = event.touches[0].clientY - touchStartY.current;

    if (dragAxis.current === null) {
      if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
      dragAxis.current = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y";
    }

    if (dragAxis.current !== "x") return;

    const atStart = activeIndex === 0;
    const atEnd = activeIndex === products.length - 1;
    const resistedDelta = atStart && deltaX > 0 ? deltaX * 0.35 : atEnd && deltaX < 0 ? deltaX * 0.35 : deltaX;

    setDragX(resistedDelta);
  };

  const onTouchEnd = () => {
    if (dragAxis.current === "x") {
      if (dragX <= -PRODUCT_DECK_SWIPE_THRESHOLD && activeIndex < products.length - 1) {
        goToIndex(activeIndex + 1);
        return;
      }

      if (dragX >= PRODUCT_DECK_SWIPE_THRESHOLD && activeIndex > 0) {
        goToIndex(activeIndex - 1);
        return;
      }
    }

    setDragX(0);
    setIsDragging(false);
    dragAxis.current = null;
  };

  return (
    <div className="lg:hidden">
      <div
        className="relative mx-auto w-[84vw] max-w-[290px] touch-pan-y select-none py-8"
        style={{ height: "calc(84vw * 1.35 + 4rem)", maxHeight: "430px" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        aria-roledescription="carousel"
        aria-label="Product cards"
      >
        {products.map((product, index) => {
          const offset = index - activeIndex;
          if (offset > 2 || offset < -1) return null;

          const style = getProductDeckCardStyle(offset, dragX, isDragging);

          return (
            <div
              key={product.title}
              data-product-index={index}
              className="absolute inset-x-0 top-8 mx-auto w-full max-w-[290px] px-2 will-change-transform"
              style={style}
            >
              <ProductCard product={product} onClick={() => onOpenProduct(index)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
