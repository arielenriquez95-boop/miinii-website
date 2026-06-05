import { useState } from "react";
import { collageItems, products } from "./data/content";
import { GALLERY_DESKTOP_VISIBLE, PRODUCT_DESKTOP_VISIBLE } from "./constants/layout";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";
import { usePagedSnapScroll } from "./hooks/usePagedSnapScroll";
import { useSnapCarousel } from "./hooks/useSnapCarousel";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { GalleryModal } from "./components/modals/GalleryModal";
import { ProductModal } from "./components/modals/ProductModal";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FaqSection } from "./components/sections/FaqSection";
import { GallerySection } from "./components/sections/GallerySection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ProductsSection } from "./components/sections/ProductsSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";

export default function App() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const productCarousel = useSnapCarousel({
    itemCount: products.length,
    dataAttribute: "data-product-index",
    desktopVisibleCount: PRODUCT_DESKTOP_VISIBLE,
    slideWidthVariable: "--product-slide-w",
    desktopOnlyListeners: true,
  });

  const galleryCarousel = useSnapCarousel({
    itemCount: collageItems.length,
    dataAttribute: "data-gallery-index",
    desktopVisibleCount: GALLERY_DESKTOP_VISIBLE,
    slideWidthVariable: "--gallery-slide-w",
    desktopOnlyListeners: false,
  });

  const testimonialScroll = usePagedSnapScroll({
    pageAttribute: "data-testimonial-page",
    datasetKey: "testimonialPage",
  });

  const faqScroll = usePagedSnapScroll({
    pageAttribute: "data-faq-page",
    datasetKey: "faqPage",
  });

  useBodyScrollLock(activeGalleryIndex !== null || activeProductIndex !== null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff8f3] text-slate-900 [scroll-behavior:smooth]">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <ProductsSection carousel={productCarousel} onOpenProduct={setActiveProductIndex} />
      <GallerySection carousel={galleryCarousel} onOpenGallery={setActiveGalleryIndex} />
      <AboutSection />
      <TestimonialsSection pagedScroll={testimonialScroll} />
      <FaqSection pagedScroll={faqScroll} />
      <ContactSection />
      <Footer />

      {activeGalleryIndex !== null && (
        <GalleryModal items={collageItems} index={activeGalleryIndex} setIndex={setActiveGalleryIndex} onClose={() => setActiveGalleryIndex(null)} />
      )}
      {activeProductIndex !== null && (
        <ProductModal products={products} index={activeProductIndex} setIndex={setActiveProductIndex} onClose={() => setActiveProductIndex(null)} />
      )}
    </main>
  );
}
