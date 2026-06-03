import React, { useEffect, useRef, useState } from "react";

const processSteps = [
  { title: "3D Sculpting", text: "Your Miinii is digitally sculpted based on your reference photos.", image: "/process-sculpting.png" },
  { title: "3D Printing", text: "Printed in high resolution for clean details and a premium miniature look.", image: "/process-printing.png" },
  { title: "Hand Painting", text: "Each piece is carefully painted by hand to bring your Miinii to life.", image: "/process-painting.png" },
  { title: "Finishing & Packaging", text: "Finished, quality checked, and packed in a gift-ready Miinii box.", image: "/process-packaging.png" },
];

const products = [
  {
    title: "Miinii Pop!",
    image: "/miinii-pop.png",
    oldPrice: "₱3,490",
    price: "₱2,990+",
    shortText: "Funko-inspired custom mini figure with a cute collectible style.",
    details: ["Available in Solo 4\" and Duo 4\"", "Final price may vary depending on details", "Comes with Personalized Miinii Pop! Box", "Estimated production: 2–3 weeks"],
  },
  {
    title: "Miinii Rono",
    image: "/miinii-rono.png",
    oldPrice: "₱3,990",
    price: "₱2,990+",
    shortText: "Hirono-inspired custom mini figure with a cute collectible style.",
    details: ["Available in 4\" and 5\"", "Final price may vary depending on details", "Estimated production: 2–3 weeks"],
  },
  {
    title: "Miinii Me",
    image: "/miinii-me.png",
    oldPrice: "₱4,490",
    price: "₱3,490+",
    shortText: "A personalized mini realistic figure based on your outfit, pose, and reference photos.",
    details: ["Available in 6\" • 7\" • 8\"", "Final price may vary depending on details", "Estimated production: 2–4 weeks"],
  },
  {
    title: "Miinii Pet",
    image: "/miinii-pet.png",
    oldPrice: "₱4,990",
    price: "₱3,490+",
    shortText: "A custom pet keepsake made for fur parents and animal lovers.",
    details: ["Available in 2\" and 3\", and ref magnets", "Final price may vary depending on details", "Estimated production: 2–4 weeks"],
  },
  {
    title: "Miinii Mini",
    image: "/miinii-mini.png",
    oldPrice: "₱3,990",
    price: "₱2,490+",
    shortText: "Cutest Mini version perfect for gift.",
    details: ["Available in 2\" • 3\" • 4\"", "Final price may vary depending on details", "Estimated production: 2–3 weeks"],
  },
  {
    title: "Miinii Request",
    image: "/miinii-request.png",
    price: "Custom quote",
    shortText: "For special concepts, props, scenes, and fully custom requests.",
    details: ["Price depends on size, complexity, and added details", "Good for unique gift ideas and special concepts", "Timeline may vary depending on complexity"],
  },
];

const testimonials = [
  ["Joie, Miinii Pop!", "TikTok", "What you see is what you get 😍 Expectations are met! Can't wait for my tito's reaction pag nakita nya to 😁 Thank you po ulit! 🫶"],
  ["Gilbert, Miinii Me", "Facebook", "Miinii captured the features and likeness of my son and sinigurado nilang pulido ang pagkakagawa. Very affordable and it was neatly packed. Thank you Miinii for the wonderful art figure."],
  ["Jah, Miinii Pop!", "TikTok", "I love love love their works! already bought 2 miinii pops and will for sure order more next time! owner is very responsive and kind!"],
  ["Michael, Miinii Rono", "Facebook", "I am absolutely obsessed with my new custom Hirono! He managed to shrink me down and make me look adorable..."],
  ["Alyaurs, Miinii Pop!", "Instagram", "We totally love the customized mini pop of our best girl, Lena! 🥹 The quality, details, and effort put into every part of it exceeded our expectations."],
  ["Kiamika, Miinii Pet", "Facebook", "Nagpagawa ako ng miinii figure ng deceased dog ko at sobrang detailed nung pagkakagawa.  Kamukhang kamukha din!"],
].map(([name, role, text]) => ({ name, role, text }));

const faqs = [
  ["What is Miinii?", "Miinii creates custom 3D mini figures based on your photos, pets, favorite moments, or special requests."],
  ["How does the process work?", "Send your reference photos, we create a digital 3D preview, you approve the design, then we print, paint, and prepare your Miinii."],
  ["What kind of photos should I send?", "Clear front, side, and back photos are best. For pets, include photos showing their face, body, color, markings, and pose."],
  ["Do I get to approve the design before printing?", "Yes. We send a digital preview first, and printing only starts after your approval."],
  ["How long does it take to make?", "Production usually takes around 2–4 weeks, depending on the complexity and current order queue."],
  ["How much is the down payment?", "A 50% down payment is required to start the project. The remaining balance is paid before shipping or delivery."],
  ["Are the figures hand-painted?", "Yes. Each figure is individually painted by hand, so small variations may happen, making every piece unique."],
  ["Do you accept international orders?", "Yes, international orders may be accepted depending on the destination and shipping options available."],
].map(([q, a]) => ({ q, a }));

const collageItems = [
  ["Gallery 1", "/Gallery1.mp4"],
  ["Gallery 2", "/Gallery2.mp4"],
  ["Gallery 3", "/Gallery3.mp4"],
  ["Gallery 4", "/Gallery4.mp4"],
  ["Gallery 5", "/Gallery5.mp4"],
  ["Gallery 6", "/Gallery6.mp4"],
].map(([title, image]) => ({ title, image }));

const isVideoFile = (src = "") => /\.(mp4|webm|ogg)$/i.test(src);

function MediaPreview({ src, alt, className = "", videoClassName = "" }) {
  if (isVideoFile(src)) {
    return (
      <video
        src={src}
        className={`${className} ${videoClassName}`.trim()}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1L12 2z" />
    </svg>
  );
}

function ArrowIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function SocialIcon({ type, className = "h-5 w-5" }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
  if (type === "facebook") return <svg {...common}><path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v3H7v4h3v5h4v-5h3l1-4h-4v-2c0-.6.4-1 1-1z" /></svg>;
  if (type === "tiktok") return <svg {...common}><path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 4c1 2 2.5 3 5 3" /></svg>;
  if (type === "instagram") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
  return <svg {...common}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></svg>;
}

function Reveal({ children, className = "", ...props }) {
  return <div {...props} className={`animate-[fadeUp_.7s_ease-out_both] ${className}`}>{children}</div>;
}

function ScrollReveal({ children, className = "", delay = 0, direction = "up", ...props }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hiddenPosition = direction === "right" ? "translate-x-12 opacity-0" : "translate-y-8 opacity-0";

  return (
    <div
      ref={ref}
      {...props}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transform-gpu transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenPosition
      }`}
    >
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, dark = false }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#16C1C1]">{eyebrow}</p>
      <h2 className={`text-4xl font-black tracking-tight md:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      <p className={`mt-4 text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
    </Reveal>
  );
}

function GalleryModal({ items, index, setIndex, onClose }) {
  const [touchStart, setTouchStart] = useState(null);
  const [slideDirection, setSlideDirection] = useState("next");
  const item = items[index];

  const previous = () => {
    setSlideDirection("previous");
    setIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const next = () => {
    setSlideDirection("next");
    setIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  const goToSlide = (dotIndex) => {
    setSlideDirection(dotIndex > index ? "next" : "previous");
    setIndex(dotIndex);
  };

  const onTouchEnd = (event) => {
    if (touchStart === null) return;
    const distance = touchStart - event.changedTouches[0].clientX;
    if (distance > 45) next();
    if (distance < -45) previous();
    setTouchStart(null);
  };

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-xl sm:p-6">
      <button type="button" onClick={onClose} className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-white/25" aria-label="Close gallery preview">×</button>
      <button type="button" onClick={previous} className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:flex" aria-label="Previous gallery item">‹</button>

      <div className="w-full max-w-5xl" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={onTouchEnd}>
        <div className="relative mx-auto aspect-[4/5] max-h-[82vh] w-full max-w-[min(82vw,520px)] overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-2xl shadow-black/40">
          <MediaPreview key={item.title} src={item.image} alt={`${item.title} full preview`} className={`h-full w-full object-contain animate-[modalSlideIn_.45s_cubic-bezier(.22,1,.36,1)_both] ${slideDirection === "next" ? "[--slide-start:18%]" : "[--slide-start:-18%]"}`} />
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((dot, dotIndex) => <button key={dot.title} type="button" onClick={() => goToSlide(dotIndex)} className={`h-2.5 rounded-full transition ${dotIndex === index ? "w-8 bg-[#16C1C1]" : "w-2.5 bg-white/30 hover:bg-white/50"}`} aria-label={`Open ${dot.title}`} />)}
        </div>
      </div>

      <button type="button" onClick={next} className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:flex" aria-label="Next gallery item">›</button>
      <button type="button" onClick={previous} className="absolute bottom-5 left-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:hidden" aria-label="Previous gallery item">‹</button>
      <button type="button" onClick={next} className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:hidden" aria-label="Next gallery item">›</button>
    </div>
  );
}

function ProductModal({ products, index, setIndex, onClose }) {
  const [touchStart, setTouchStart] = useState(null);
  const [slideDirection, setSlideDirection] = useState("next");
  const product = products[index];

  const previous = () => {
    setSlideDirection("previous");
    setIndex((current) => (current === 0 ? products.length - 1 : current - 1));
  };

  const next = () => {
    setSlideDirection("next");
    setIndex((current) => (current === products.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  const goToSlide = (dotIndex) => {
    setSlideDirection(dotIndex > index ? "next" : "previous");
    setIndex(dotIndex);
  };

  const onTouchEnd = (event) => {
    if (touchStart === null) return;
    const distance = touchStart - event.changedTouches[0].clientX;
    if (distance > 45) next();
    if (distance < -45) previous();
    setTouchStart(null);
  };

  if (!product) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/90 p-3 backdrop-blur-xl sm:flex sm:items-center sm:justify-center sm:p-6">
      <button type="button" onClick={previous} className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:flex" aria-label="Previous product">‹</button>
      <button type="button" onClick={next} className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl font-bold text-white backdrop-blur transition hover:bg-white/20 sm:flex" aria-label="Next product">›</button>

      <div key={product.title} className={`relative mx-auto flex h-[calc(100%-3.75rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-2xl shadow-black/40 animate-[modalSlideIn_.45s_cubic-bezier(.22,1,.36,1)_both] sm:h-auto sm:max-h-[90vh] sm:rounded-[2rem] ${slideDirection === "next" ? "[--slide-start:10%]" : "[--slide-start:-10%]"}`} onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={onTouchEnd}>
        <button type="button" onClick={onClose} className="absolute right-3 top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/75 text-2xl font-bold text-white shadow-lg backdrop-blur transition hover:bg-slate-950" aria-label="Close product preview">×</button>
        <div className="grid min-h-0 flex-1 overflow-y-auto md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50 p-4 md:sticky md:top-0 sm:p-6">
            <div className="aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[1.25rem] bg-white ring-1 ring-slate-100 shadow-inner">
              <img
                src={product.image}
                alt={`${product.title} preview`}
                className="block h-full w-full rounded-[inherit] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{product.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{product.shortText}</p>
            <div className="mt-4 flex flex-nowrap items-center gap-2 sm:mt-5 sm:flex-wrap">
              {product.oldPrice && <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-400 line-through ring-1 ring-slate-200 sm:px-4 sm:py-2 sm:text-sm">{product.oldPrice}</span>}
              <span className="shrink-0 rounded-full bg-[#ff6f31]/15 px-4 py-2 text-sm font-black text-[#ff6f31] ring-1 ring-[#ff6f31]/20 sm:px-5 sm:py-2.5 sm:text-base">{product.price}</span>
            </div>
            <div className="mt-4 rounded-[1.35rem] bg-[#fff8f3] p-4 ring-1 ring-orange-100 sm:mt-5 sm:rounded-[1.5rem] sm:p-5">
              <ul className="grid gap-2.5 sm:gap-3">
                {product.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#16C1C1]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
            
                setTimeout(() => {
                  const contactSection = document.getElementById("contact");
                  if (!contactSection) return;
            
                  const headerOffset = 80;
                  const sectionPosition = contactSection.getBoundingClientRect().top + window.scrollY;
            
                  window.scrollTo({
                    top: sectionPosition - headerOffset,
                    behavior: "smooth",
                  });
                }, 120);
              }}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#ff6f31] px-7 py-4 text-sm font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#f05f20] sm:mt-6 sm:text-base"
            >
              Start Your Miinii
              <ArrowIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-white/10 px-3 py-2 backdrop-blur-md">
        {products.map((item, dotIndex) => <button key={item.title} type="button" onClick={() => goToSlide(dotIndex)} className={`h-2.5 rounded-full transition ${dotIndex === index ? "w-8 bg-[#16C1C1]" : "w-2.5 bg-white/40 hover:bg-white/70"}`} aria-label={`Open ${item.title}`} />)}
      </div>

      <button type="button" onClick={previous} className="absolute bottom-5 left-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#16C1C1]/20 text-2xl font-bold text-[#16C1C1] shadow-lg backdrop-blur transition hover:bg-[#16C1C1]/30 sm:hidden" aria-label="Previous product">‹</button>
      <button type="button" onClick={next} className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#16C1C1]/20 text-2xl font-bold text-[#16C1C1] shadow-lg backdrop-blur transition hover:bg-[#16C1C1]/30 sm:hidden" aria-label="Next product">›</button>
    </div>
  );
}

function ProductCard({ product, onClick }) {
  return (
    <button type="button" onClick={onClick} className="group relative h-full w-full overflow-hidden rounded-[1.35rem] border border-slate-100 bg-white p-2.5 text-left shadow-[0_12px_36px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-[#16C1C1] hover:bg-[#16C1C1] hover:shadow-[0_18px_48px_rgba(22,193,193,0.18)] focus:outline-none focus:ring-2 focus:ring-[#16C1C1] focus:ring-offset-2 sm:rounded-[1.65rem] sm:p-4" aria-label={`Open ${product.title} product details`}>
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-50/70 via-teal-50/40 to-white transition duration-500 group-hover:from-[#16C1C1] group-hover:via-[#16C1C1] group-hover:to-[#16C1C1]" />
      <div className="relative mb-2.5 aspect-[4/5] overflow-hidden rounded-[1rem] bg-[#f8fafc] sm:mb-4 sm:rounded-[1.25rem]"><img src={product.image} alt={`${product.title} product sample`} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]" /></div>
      <h3 className="relative text-base font-black tracking-tight text-slate-950 transition duration-500 group-hover:text-white sm:text-xl">{product.title}</h3>
      <div className="relative mt-2 flex flex-nowrap items-center gap-1.5 sm:mt-2.5 sm:gap-2">
        {product.oldPrice && <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-400 line-through ring-1 ring-slate-200 transition duration-500 group-hover:bg-white/20 group-hover:text-white/70 group-hover:ring-white/20 sm:px-3 sm:py-1.5 sm:text-sm">{product.oldPrice}</span>}
        <span className="shrink-0 rounded-full bg-[#ff6f31]/15 px-2.5 py-1 text-[10px] font-black text-[#ff6f31] ring-1 ring-[#ff6f31]/20 transition duration-500 group-hover:bg-white group-hover:text-[#ff6f31] group-hover:ring-white sm:px-4 sm:py-2 sm:text-sm">{product.price}</span>
      </div>
    </button>
  );
}

function ProcessCard({ step, index }) {
  return (
    <article className="group relative h-full w-full overflow-hidden rounded-[1.5rem] border border-slate-100 bg-[#fff8f3] p-3 text-left shadow-sm transition hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/70 sm:rounded-[2rem] sm:p-5">
      <div className="mb-3 aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-transparent sm:mb-5 sm:rounded-[1.5rem]"><img src={step.image} alt={`${step.title} process image`} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]" /></div>
      <div className="mb-3 inline-flex rounded-full bg-[#ff6f31] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm shadow-orange-200 sm:text-xs">Step {index + 1}</div>
      <h3 className="text-base font-black text-slate-950 sm:text-xl">{step.title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">{step.text}</p>
    </article>
  );
}

function GalleryCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 p-0 text-left shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-500 hover:z-20 hover:scale-105 hover:bg-white/10 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#16C1C1] focus:ring-offset-2 focus:ring-offset-[#070B18] sm:rounded-[1.75rem]"
      aria-label={`Open ${item.title} gallery item`}
    >
      <MediaPreview
        src={item.image}
        alt={`${item.title} gallery item`}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-slate-950/0 transition duration-500 group-hover:bg-slate-950/15" />
    </button>
  );
}

export default function App() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const [activeProductScrollIndex, setActiveProductScrollIndex] = useState(0);
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);
  const [activeFaqPage, setActiveFaqPage] = useState(0);
  
  const productsScrollRef = useRef(null);
  const testimonialsScrollRef = useRef(null);
  const faqsScrollRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 80;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - headerOffset,
      behavior: "smooth",
    });
  };

  const getNearestProductIndex = () => {
    const carousel = productsScrollRef.current;
    if (!carousel) return 0;

    const cards = Array.from(carousel.querySelectorAll("[data-product-index]"));
    if (!cards.length) return 0;

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;

    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach((card) => {
      const index = Number(card.getAttribute("data-product-index"));
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - carouselCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const centerProductCard = (index, behavior = "smooth") => {
    const carousel = productsScrollRef.current;
    if (!carousel) return;

    const card = carousel.querySelector(`[data-product-index="${index}"]`);
    if (!card) return;

    const carouselRect = carousel.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    const cardCenter = cardRect.left + cardRect.width / 2;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const targetLeft = Math.max(0, Math.min(maxScrollLeft, carousel.scrollLeft + (cardCenter - carouselCenter)));

    carousel.scrollTo({
      left: targetLeft,
      behavior,
    });
  };

  const snapProductCarousel = () => {
    const nearestIndex = getNearestProductIndex();
    const carousel = productsScrollRef.current;
    if (!carousel) return;

    const card = carousel.querySelector(`[data-product-index="${nearestIndex}"]`);
    if (!card) return;

    const carouselRect = carousel.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    const cardCenter = cardRect.left + cardRect.width / 2;

    if (Math.abs(cardCenter - carouselCenter) > 2) {
      centerProductCard(nearestIndex);
    }

    setActiveProductScrollIndex(nearestIndex);
  };

  const updateProductScrollButtons = () => {
    setActiveProductScrollIndex(getNearestProductIndex());
  };

  const scrollProducts = (direction) => {
    const lastIndex = products.length - 1;
    const nextIndex = direction === "next" ? activeProductScrollIndex + 1 : activeProductScrollIndex - 1;
    const safeIndex = Math.max(0, Math.min(lastIndex, nextIndex));

    setActiveProductScrollIndex(safeIndex);
    centerProductCard(safeIndex);
  };

  useEffect(() => {
    const carousel = productsScrollRef.current;
    if (!carousel) return;

    let scrollEndTimer = null;
    let isTouching = false;

    const scheduleSnap = (delay = 80) => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(snapProductCarousel, delay);
    };

    const onScroll = () => {
      if (!isTouching) scheduleSnap();
    };

    const onTouchStart = () => {
      isTouching = true;
      clearTimeout(scrollEndTimer);
    };

    const onTouchEnd = () => {
      isTouching = false;
      scheduleSnap(50);
    };

    const onResize = () => {
      centerProductCard(getNearestProductIndex(), "auto");
      updateProductScrollButtons();
    };

    requestAnimationFrame(() => {
      centerProductCard(0, "auto");
      requestAnimationFrame(updateProductScrollButtons);
    });

    carousel.addEventListener("scroll", onScroll, { passive: true });
    carousel.addEventListener("scrollend", snapProductCarousel, { passive: true });
    carousel.addEventListener("touchstart", onTouchStart, { passive: true });
    carousel.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(scrollEndTimer);
      carousel.removeEventListener("scroll", onScroll);
      carousel.removeEventListener("scrollend", snapProductCarousel);
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const isModalOpen = activeGalleryIndex !== null || activeProductIndex !== null;

    if (!isModalOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [activeGalleryIndex, activeProductIndex]);

  const testimonialPages = Array.from(
    { length: Math.ceil(testimonials.length / 2) },
    (_, pageIndex) => testimonials.slice(pageIndex * 2, pageIndex * 2 + 2)
  );

  const faqPages = Array.from(
    { length: Math.ceil(faqs.length / 4) },
    (_, pageIndex) => faqs.slice(pageIndex * 4, pageIndex * 4 + 4)
  );

  const scrollTestimonialsToPage = (pageIndex) => {
    const carousel = testimonialsScrollRef.current;
    if (!carousel) return;

    const page = carousel.querySelector(`[data-testimonial-page="${pageIndex}"]`);
    if (!page) return;

    page.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveTestimonialPage(pageIndex);
  };

  const scrollFaqsToPage = (pageIndex) => {
    const carousel = faqsScrollRef.current;
    if (!carousel) return;

    const page = carousel.querySelector(`[data-faq-page="${pageIndex}"]`);
    if (!page) return;

    page.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveFaqPage(pageIndex);
  };

  useEffect(() => {
    const carousel = testimonialsScrollRef.current;
    if (!carousel) return;

    const updateTestimonialPage = () => {
      const pages = Array.from(carousel.querySelectorAll("[data-testimonial-page]"));
      const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;

      let nearestPage = 0;
      let nearestDistance = Infinity;

      pages.forEach((page) => {
        const pageIndex = Number(page.getAttribute("data-testimonial-page"));
        const pageCenter = page.getBoundingClientRect().left + page.clientWidth / 2;
        const distance = Math.abs(pageCenter - carouselCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestPage = pageIndex;
        }
      });

      setActiveTestimonialPage(nearestPage);
    };

    requestAnimationFrame(updateTestimonialPage);
    carousel.addEventListener("scroll", updateTestimonialPage, { passive: true });
    window.addEventListener("resize", updateTestimonialPage);

    return () => {
      carousel.removeEventListener("scroll", updateTestimonialPage);
      window.removeEventListener("resize", updateTestimonialPage);
    };
  }, []);

  useEffect(() => {
    const carousel = faqsScrollRef.current;
    if (!carousel) return;

    const updateFaqPage = () => {
      const pages = Array.from(carousel.querySelectorAll("[data-faq-page]"));
      const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;

      let nearestPage = 0;
      let nearestDistance = Infinity;

      pages.forEach((page) => {
        const pageIndex = Number(page.getAttribute("data-faq-page"));
        const pageCenter = page.getBoundingClientRect().left + page.clientWidth / 2;
        const distance = Math.abs(pageCenter - carouselCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestPage = pageIndex;
        }
      });

      setActiveFaqPage(nearestPage);
    };

    requestAnimationFrame(updateFaqPage);
    carousel.addEventListener("scroll", updateFaqPage, { passive: true });
    window.addEventListener("resize", updateFaqPage);

    return () => {
      carousel.removeEventListener("scroll", updateFaqPage);
      window.removeEventListener("resize", updateFaqPage);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f3] text-slate-900 [scroll-behavior:smooth]">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatSoft { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes pulseSoft { 0%, 100% { transform: scale(1); opacity: .8; } 50% { transform: scale(1.08); opacity: 1; } }
        @keyframes modalSlideIn { from { opacity: .35; transform: translateX(var(--slide-start)) scale(.985); } to { opacity: 1; transform: translateX(0) scale(1); } }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <button type="button" onClick={() => scrollToSection("home")} className="flex items-center gap-2" aria-label="Go to Miinii home section"><img src="/miinii-logo.png" alt="Miinii Logo" className="h-12 w-auto object-contain sm:h-10" /></button>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            {["process", "products", "gallery", "about", "testimonials", "faq"].map((section) => <button key={section} type="button" onClick={() => scrollToSection(section)} className="capitalize transition hover:text-[#ff6f31]">{section === "about" ? "About Us" : section === "faq" ? "FAQ" : section}</button>)}
          </div>
          <button type="button" onClick={() => scrollToSection("contact")} className="rounded-full bg-slate-950 px-5 py-3 text-base font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#ff6f31] sm:px-5 sm:py-2.5 sm:text-sm">Order Now</button>
        </div>
      </nav>

      <section id="home" className="relative pt-16 sm:pt-16 lg:pt-20">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#16C1C1]/20 blur-3xl animate-[pulseSoft_5s_ease-in-out_infinite]" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#ff6f31]/20 blur-3xl animate-[pulseSoft_6s_ease-in-out_infinite]" />
        <div className="mx-auto grid max-w-7xl items-center gap-0 px-4 pb-8 pt-1 sm:gap-5 sm:px-6 sm:pb-6 sm:pt-1 md:pb-8 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <Reveal className="relative mx-auto -mt-3 w-[88%] max-w-[390px] sm:-mt-4 sm:w-full sm:max-w-lg lg:mx-0 lg:max-w-none [animation-delay:.08s]"><div className="relative overflow-visible rounded-[2.5rem] bg-transparent p-0 animate-[floatSoft_5s_ease-in-out_infinite]"><div className="aspect-[4/5] min-h-[330px] sm:min-h-0"><img src="/hero-image.png" alt="Miinii custom 3D mini figure" className="h-full w-full scale-105 object-contain sm:scale-100" /></div></div></Reveal>
          <div className="-mt-8 text-center sm:mt-0 lg:text-left">
            <Reveal><h1 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">Turn your photos into <span className="text-[#ff6f31]">custom 3D mini figures</span>.</h1></Reveal>
            <Reveal><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">Miinii creates handcrafted 3D mini figures based on real people and pets. Each piece is carefully sculpted, resin printed, and hand-painted into a one-of-a-kind keepsake.</p></Reveal>
            <Reveal><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"><button type="button" onClick={() => scrollToSection("contact")} className="group inline-flex items-center justify-center rounded-full bg-[#ff6f31] px-8 py-[18px] text-lg font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#f05f20] sm:px-7 sm:py-4 sm:text-base">Start Your Miinii<ArrowIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" /></button><button type="button" onClick={() => scrollToSection("process")} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-[18px] text-lg font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-[#16C1C1] sm:px-7 sm:py-4 sm:text-base">View Process</button></div></Reveal>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How it works" title="From photo to mini figure" text="A simple production flow that turns your favorite people and pets into handcrafted 3D keepsakes." />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">{processSteps.map((step, index) => <ScrollReveal key={step.title} delay={index * 120}><ProcessCard step={step} index={index} /></ScrollReveal>)}</div>
        </div>
      </section>

      <section id="products" className="bg-white pb-16 pt-6 text-slate-950 sm:pb-24 sm:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What we make" title="Mini figures for every story" text="Choose the Miinii style that fits your gift, collection, or special memory." />
          <div className="relative">
            {activeProductScrollIndex > 0 && <button type="button" onClick={() => scrollProducts("previous")} className="absolute left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff6f31] text-white shadow-xl shadow-orange-300/60 ring-1 ring-white/70 backdrop-blur transition hover:-translate-x-0.5 hover:bg-[#f05f20] md:flex sm:left-1 sm:h-12 sm:w-12" aria-label="Scroll products left"><span className="flex h-full w-full items-center justify-center pb-0.5 text-2xl font-black leading-none sm:pb-1 sm:text-3xl">‹</span></button>}
            {activeProductScrollIndex < products.length - 1 && <button type="button" onClick={() => scrollProducts("next")} className="absolute right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff6f31] text-white shadow-xl shadow-orange-300/60 ring-1 ring-white/70 backdrop-blur transition hover:translate-x-0.5 hover:bg-[#f05f20] md:flex sm:right-1 sm:h-12 sm:w-12" aria-label="Scroll products right"><span className="flex h-full w-full items-center justify-center pb-0.5 text-2xl font-black leading-none sm:pb-1 sm:text-3xl">›</span></button>}

            <div ref={productsScrollRef} className="-mx-4 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth py-5 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-6 sm:py-6 lg:-mx-8 [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max gap-4 px-[calc(50%-min(36vw,127.5px))] sm:gap-5 sm:px-[calc(50%-130px)] lg:px-[calc(50%-142.5px)]">
                {products.map((product, index) => (
                  <ScrollReveal key={product.title} direction="right" className="w-[72vw] max-w-[255px] shrink-0 snap-center snap-always p-1 sm:w-[260px] sm:max-w-[260px] lg:w-[285px] lg:max-w-[285px]" data-product-index={index}>
                    <ProductCard product={product} onClick={() => setActiveProductIndex(index)} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#070B18] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Every Miinii tells a story" text="Explore custom mini figures, pet keepsakes, packaging details, and finished pieces crafted from meaningful photos and stories." dark />
          <Reveal><div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">{collageItems.map((item, index) => <GalleryCard key={item.title} item={item} onClick={() => setActiveGalleryIndex(index)} />)}</div></Reveal>
        </div>
      </section>

     <section id="about" className="relative overflow-hidden bg-white py-8 sm:py-24">
        <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-[#16C1C1]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6f31]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-[#fff8f3] shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:rounded-[2rem]">
              <div className="flex flex-col md:grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative flex items-center gap-3.5 p-4 pb-0 md:block md:min-h-[420px] md:p-4">
                  <div className="absolute inset-0 hidden bg-gradient-to-br from-slate-100 to-white md:block" />
                  <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,rgba(22,193,193,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,111,49,0.16),transparent_35%)] md:block" />

                  <div className="relative h-[4.75rem] w-[4.75rem] shrink-0 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-md ring-1 ring-slate-100 md:mx-auto md:aspect-[4/4.5] md:h-full md:w-full md:max-h-none md:rounded-[1.5rem] md:shadow-inner">
                    <img
                      src="/about-portrait.png"
                      alt="Miinii artist portrait"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 md:hidden">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#16C1C1]">About us</p>
                    <h2 className="mt-1 text-lg font-black leading-snug tracking-tight text-slate-950">Meet the artist behind Miinii.</h2>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-4 md:p-10 lg:p-12">
                  <div className="hidden md:block">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#16C1C1]">About us</p>
                    <h2 className="text-5xl font-black tracking-tight text-slate-950">
                      Meet the artist
                      <br />
                      behind Miinii.
                    </h2>
                  </div>

                  <p className="mt-0 text-sm leading-6 text-slate-600 md:mt-5 md:text-lg md:leading-8">
                    Hi, I’m Ariel, the creator of Miinii. Miinii started from my love for 3D art, design, and meaningful custom gifts. What began as a creative idea became a mini studio that turns real people, pets, and special memories into handcrafted 3D miniatures.
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500 md:mt-4 md:text-base md:leading-7">
                    Each Miinii is carefully made through digital sculpting, resin 3D printing, hand painting, finishing, and packaging. As Miinii continues to grow, we’re working toward building a bigger creative team so we can create more personalized mini figures for everyone while keeping the same care, quality, and handmade feel in every piece.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="testimonials" className="relative overflow-hidden bg-gradient-to-br from-[#0F766E] via-[#16C1C1] to-[#0E7490] py-10 text-white sm:py-14 lg:py-16">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#ff6f31]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-8 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/80">Testimonials</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Kind words from Miinii clients</h2>
            <p className="mt-3 text-base leading-7 text-white/80">Heartfelt notes from customers who turned meaningful moments into custom keepsakes.</p>
          </Reveal>

          <div
            ref={testimonialsScrollRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-5 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {testimonialPages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                data-testimonial-page={pageIndex}
                className="grid min-w-full snap-center scroll-mx-4 grid-cols-1 grid-rows-2 gap-3 sm:scroll-mx-6 sm:gap-4 lg:contents"
              >
                {page.map((testimonial) => (
                  <Reveal key={testimonial.name}>
                    <article className="group relative flex min-h-[235px] h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/25 bg-white/95 p-4 shadow-xl shadow-teal-950/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/50 hover:bg-white hover:shadow-2xl hover:shadow-teal-950/20 sm:min-h-[245px] sm:p-5 lg:min-h-[260px]">
                      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#16C1C1]/10 transition duration-500 group-hover:scale-125" />

                      <div className="relative mb-3 flex gap-0.5 text-[#ff6f31] sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-3.5 w-3.5" />
                        ))}
                      </div>

                      <p className="relative line-clamp-6 text-sm font-medium leading-6 text-slate-600">
                        “{testimonial.text}”
                      </p>

                      <div className="relative mt-auto border-t border-slate-100 pt-4">
                        <h3 className="text-xs font-black text-slate-950 sm:text-sm">{testimonial.name}</h3>
                        <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-xs sm:tracking-[0.14em]">
                          {testimonial.role}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-1 flex justify-center gap-1.5 lg:hidden" aria-label="Testimonial pages">
            {testimonialPages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTestimonialsToPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTestimonialPage === i ? "w-6 bg-white" : "w-1.5 bg-white/45"
                }`}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-[#16C1C1]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6f31]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Common questions" text="Simple answers to help you before ordering your custom Miinii." />

          <div
            ref={faqsScrollRef}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-5 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {faqPages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                data-faq-page={pageIndex}
                className="grid min-w-full snap-center scroll-mx-4 grid-cols-2 grid-rows-2 gap-3 sm:scroll-mx-6 sm:gap-4 lg:contents"
              >
                {page.map((faq) => (
                  <Reveal key={faq.q}>
                    <article className="group relative flex min-h-[185px] h-full flex-col overflow-hidden rounded-[1.35rem] bg-white p-4 shadow-md shadow-orange-100/50 ring-1 ring-orange-100/70 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-[#16C1C1]/30 sm:min-h-[205px] sm:p-5 lg:min-h-[220px]">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F766E] via-[#16C1C1] to-[#0E7490]" />
                      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#16C1C1]/10 transition duration-500 group-hover:scale-125" />

                      <h3 className="relative pr-2 text-sm font-black leading-5 text-slate-950 sm:text-lg sm:leading-6">{faq.q}</h3>
                      <p className="relative mt-3 text-sm leading-5 text-slate-600 sm:leading-6">{faq.a}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-1 flex justify-center gap-1.5 lg:hidden" aria-label="FAQ pages">
            {faqPages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollFaqsToPage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeFaqPage === i ? "w-6 bg-[#16C1C1]" : "w-1.5 bg-slate-300"
                }`}
                aria-label={`Go to FAQ page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff6f31] via-[#f97316] to-[#c2410c] px-5 py-10 text-center shadow-2xl shadow-orange-300/70 sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
            <div className="mx-auto flex max-w-4xl flex-col items-center">
              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">Ready to create your own Miinii?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">Send your reference photos and let’s turn your favorite person, pet, or memory into a custom 3D mini figure.</p>
              <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <a href="https://instagram.com/MiiniiStudios" target="_blank" rel="noreferrer" className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20 sm:rounded-full"><SocialIcon type="message" className="mr-2 h-5 w-5 shrink-0" />Message Us</a>
                <a href="https://www.facebook.com/MiiniiStudios" target="_blank" rel="noreferrer" className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-base font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:rounded-full"><SocialIcon type="facebook" className="mr-2 h-5 w-5 shrink-0" />Facebook</a>
                <a href="https://www.tiktok.com/@miiniistudios" target="_blank" rel="noreferrer" className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-base font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:rounded-full"><SocialIcon type="tiktok" className="mr-2 h-5 w-5 shrink-0" />TikTok</a>
                <a href="https://instagram.com/MiiniiStudios" target="_blank" rel="noreferrer" className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-base font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:rounded-full"><SocialIcon type="instagram" className="mr-2 h-5 w-5 shrink-0" />Instagram</a>
              </div>
              <div className="mt-7 flex flex-col items-center gap-2 text-center text-sm leading-6 text-white/90 sm:mt-8 sm:text-base sm:leading-7">
                <p className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Meycauayan City of Bulacan, Philippines
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="px-4 py-4 text-center text-sm font-medium text-slate-500 sm:px-6 lg:px-8"><p>© 2026 Miinii. MiiniiStudios. 3D custom mini figures. All rights reserved.</p></footer>

      {activeGalleryIndex !== null && <GalleryModal items={collageItems} index={activeGalleryIndex} setIndex={setActiveGalleryIndex} onClose={() => setActiveGalleryIndex(null)} />}
      {activeProductIndex !== null && <ProductModal products={products} index={activeProductIndex} setIndex={setActiveProductIndex} onClose={() => setActiveProductIndex(null)} />}
    </main>
  );
}
