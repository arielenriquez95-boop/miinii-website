import React from "react";

const processSteps = [
  {
    title: "3D Sculpting",
    text: "Your Miinii is digitally sculpted based on your reference photos.",
    image: "/process-sculpting.png",
  },
  {
    title: "3D Printing",
    text: "Printed in high resolution for clean details and a premium miniature look.",
    image: "/process-printing.png",
  },
  {
    title: "Hand Painting",
    text: "Each piece is carefully painted by hand to bring your Miinii to life.",
    image: "/process-painting.png",
  },
  {
    title: "Finishing & Packaging",
    text: "Finished, quality checked, and packed in a gift-ready Miinii box.",
    image: "/process-packaging.png",
  },
];

const products = [
  {
    title: "Miinii Pop",
    image: "/miinii-pop.png",
    oldPrice: "₱3,490",
    price: "₱2,990",
  },
  {
    title: "Miinii Me",
    image: "/miinii-me.png",
    oldPrice: "₱3,490",
    price: "₱2,990",
  },
  {
    title: "Miinii Pet",
    image: "/miinii-pet.png",
    oldPrice: "₱3,490",
    price: "₱2,990",
  },
  {
    title: "Miinii Request",
    image: "/miinii-request.png",
    price: "Custom quote",
  },
];

const testimonials = [
  {
    name: "Happy Client",
    role: "Miinii Gift",
    text: "The final figure felt personal, cute, and gift-ready.",
  },
  {
    name: "Pet Owner",
    role: "Miinii Pet",
    text: "Our pet became a tiny keepsake we can display at home.",
  },
  {
    name: "Collector",
    role: "Miinii Pop",
    text: "A fun collectible with a handmade, premium feel.",
  },
  {
    name: "Gift Buyer",
    role: "Birthday Gift",
    text: "It was unique, thoughtful, and different from regular gifts.",
  },
  {
    name: "Couple Client",
    role: "Custom Duo",
    text: "The preview made the process easy before production started.",
  },
  {
    name: "Fur Parent",
    role: "Pet Keepsake",
    text: "A small piece, but it carried a lot of emotion.",
  },
];

const faqs = [
  {
    q: "How does the process work?",
    a: "Send your reference photos, review the 3D preview, then we print, paint, finish, and pack your Miinii.",
  },
  {
    q: "Can I request revisions?",
    a: "Yes. You can review the 3D preview before printing and request minor adjustments before production starts.",
  },
  {
    q: "Is it good as a gift?",
    a: "Yes. Miinii figures are made as personal gifts, keepsakes, display pieces, and collectibles.",
  },
  {
    q: "How long does production usually take?",
    a: "Production time depends on the queue, design complexity, and quantity. You can ask us directly for the current turnaround time before placing your order.",
  },
];

const collageItems = [
  "Hero Figure",
  "Gift Box",
  "Pet Figure",
  "Client Figure",
  "Packaging Shot",
  "Finished Miinii",
];

const requiredSections = ["home", "process", "products", "gallery", "faq", "contact"];

function validateWebsiteContent() {
  return {
    hasAllSections: requiredSections.length === 6 && requiredSections.every(Boolean),
    hasProcessSteps: processSteps.length >= 4,
    hasProducts: products.length === 4,
    hasFaqs: faqs.length >= 4,
    hasCollageItems: collageItems.length === 6,
    hasExactProductOptions: ["Miinii Pop", "Miinii Me", "Miinii Pet", "Miinii Request"].every((title) =>
      products.some((product) => product.title === title)
    ),
    hasProductPrices: products.every((product) => Boolean(product.price)),
    hasProductOldPrices: products.every((product) => product.title === "Miinii Request" || Boolean(product.oldPrice)),
    hasProductImages: products.every((product) => Boolean(product.image)),
  };
}

console.assert(validateWebsiteContent().hasAllSections, "Website should include all standard landing page sections.");
console.assert(validateWebsiteContent().hasProcessSteps, "Website should include at least 4 process steps.");
console.assert(validateWebsiteContent().hasProducts, "Website should include exactly 4 product categories.");
console.assert(validateWebsiteContent().hasFaqs, "Website should include at least 4 FAQs.");
console.assert(validateWebsiteContent().hasCollageItems, "Website should include exactly 6 collage items.");
console.assert(validateWebsiteContent().hasExactProductOptions, "Website should include Miinii Pop, Miinii Me, Miinii Pet, and Miinii Request.");
console.assert(validateWebsiteContent().hasProductPrices, "Each product should include a price.");
console.assert(validateWebsiteContent().hasProductOldPrices, "Discounted products should include an old strikethrough price.");
console.assert(validateWebsiteContent().hasProductImages, "Each product should include an image path.");

function IconPlaceholder({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7 15l3-3a1.5 1.5 0 0 1 2.1 0L17 17" />
      <circle cx="9" cy="9" r="1.2" />
    </svg>
  );
}

function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l3.1 6.3l6.9 1l-5 4.9l1.2 6.8L12 17.8L5.8 21L7 14.2L2 9.3l6.9-1L12 2z" />
    </svg>
  );
}

function ArrowIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7l-7 7" />
    </svg>
  );
}

function HeartIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6l1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function SocialIcon({ type, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "facebook") {
    return (
      <svg {...common}>
        <path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v3H7v4h3v5h4v-5h3l1-4h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }

  if (type === "tiktok") {
    return (
      <svg {...common}>
        <path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" />
        <path d="M14 4c1 2 2.5 3 5 3" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

function Reveal({ children, className = "" }) {
  return <div className={`animate-[fadeUp_.7s_ease-out_both] ${className}`}>{children}</div>;
}

function ImagePlaceholder({
  title = "Image Placeholder",
  subtitle = "Replace with your image",
  className = "",
  iconClassName = "h-8 w-8",
}) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-gradient-to-br from-white to-slate-50 text-center ${className}`}
    >
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6f31]/10 text-[#ff6f31]">
        <IconPlaceholder className={iconClassName} />
      </div>
      <p className="px-4 text-base font-bold text-slate-900 sm:text-lg">{title}</p>
      <p className="mt-1 px-5 text-xs leading-5 text-slate-500 sm:text-sm">{subtitle}</p>
    </div>
  );
}

function PremiumCollageCard({ title }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-500 hover:z-20 hover:scale-110 hover:bg-white/10 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/10 via-transparent to-[#ff6f31]/10" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.2rem] bg-slate-900/80 backdrop-blur">
        <div className="absolute inset-0 bg-teal-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative flex flex-1 items-center justify-center p-5 sm:p-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6f31]/15 text-[#ff9a6f] shadow-sm transition duration-500 group-hover:scale-110">
              <IconPlaceholder className="h-7 w-7" />
            </div>
            <p className="text-lg font-bold text-white sm:text-base">{title}</p>
            <p className="mt-1 text-sm text-slate-400 sm:text-sm">Replace with your image</p>
          </div>
        </div>

        <div className="relative flex items-center justify-between border-t border-white/10 px-4 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Miinii</span>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
            Photo Slot
          </span>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, dark = false }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-3 text-base font-bold uppercase tracking-[0.22em] text-[#16C1C1] sm:text-sm sm:tracking-[0.25em]">{eyebrow}</p>
      <h2 className={`text-4xl font-black tracking-tight sm:text-4xl md:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-lg leading-8 sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
    </Reveal>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f3] text-slate-900 [scroll-behavior:smooth]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); opacity: .8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2" aria-label="Go to Miinii home section">
            <img src="/miinii-logo.png" alt="Miinii Logo" className="h-12 w-auto object-contain sm:h-10" />
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#process" className="transition hover:text-[#ff6f31]">Process</a>
            <a href="#products" className="transition hover:text-[#ff6f31]">Products</a>
            <a href="#gallery" className="transition hover:text-[#ff6f31]">Gallery</a>
            <a href="#faq" className="transition hover:text-[#ff6f31]">FAQ</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-3 text-base font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#ff6f31] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Order Now
          </a>
        </div>
      </nav>

      <section id="home" className="relative pt-16 sm:pt-16 lg:pt-20">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#16C1C1]/20 blur-3xl animate-[pulseSoft_5s_ease-in-out_infinite]" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#ff6f31]/20 blur-3xl animate-[pulseSoft_6s_ease-in-out_infinite]" />

        <div className="mx-auto grid max-w-7xl items-center gap-0 px-4 pb-8 pt-1 sm:gap-5 sm:px-6 sm:pb-6 sm:pt-1 md:pb-8 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <Reveal className="relative mx-auto -mt-3 w-[88%] max-w-[390px] sm:-mt-4 sm:w-full sm:max-w-lg lg:mx-0 lg:max-w-none [animation-delay:.08s]">
            <div className="relative overflow-visible rounded-[2.5rem] bg-transparent p-0 animate-[floatSoft_5s_ease-in-out_infinite]">
              <div className="aspect-[4/5] min-h-[330px] sm:min-h-0">
                <img
                  src="/hero-image.png"
                  alt="Miinii custom 3D mini figure"
                  className="h-full w-full scale-105 object-contain sm:scale-100"
                />
              </div>
            </div>
          </Reveal>

          <div className="-mt-8 text-center sm:mt-0 lg:text-left">
            <Reveal className="[animation-delay:.08s]">
              <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
                Turn your photos into <span className="text-[#ff6f31]">custom 3D mini figures</span>.
              </h1>
            </Reveal>

            <Reveal className="[animation-delay:.16s]">
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-lg lg:mx-0">
                Miinii creates handcrafted 3D mini figures based on real people and pets. Each piece is carefully sculpted,
                resin printed, and hand-painted into a one-of-a-kind keepsake.
              </p>
            </Reveal>

            <Reveal className="[animation-delay:.24s]">
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center rounded-full bg-[#ff6f31] px-8 py-[18px] text-lg font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#f05f20] sm:px-7 sm:py-4 sm:text-base"
                >
                  Start Your Miinii
                  <ArrowIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-[18px] text-lg font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-[#16C1C1] sm:px-7 sm:py-4 sm:text-base"
                >
                  View Process
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <p className="mb-3 text-base font-bold uppercase tracking-[0.22em] text-[#16C1C1] sm:text-sm sm:tracking-[0.25em]">
              How it works
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              From photo to mini figure
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A simple production flow that turns your favorite people and pets into handcrafted 3D keepsakes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} className={`[animation-delay:${index * 0.08}s]`}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-[#fff8f3] p-4 shadow-sm transition hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/70 sm:p-5">
                  <div className="mb-5 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-transparent">
                    <img
                      src={step.image}
                      alt={`${step.title} process image`}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mb-3 inline-flex rounded-full bg-[#ff6f31] px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-sm shadow-orange-200">
                    Step {index + 1}
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 sm:text-xl">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600 sm:text-sm sm:leading-6">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-16 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we make"
            title="Mini figures for every story"
            text="Choose the Miinii style that fits your gift, collection, or special memory."
          />

          <div className="mx-auto grid max-w-sm gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Reveal key={product.title} className={`[animation-delay:${index * 0.08}s]`}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_24px_65px_rgba(15,23,42,0.14)] sm:p-5">
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-50/70 via-teal-50/40 to-white" />
                  <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#f8fafc] p-0">
                    <img
                      src={product.image}
                      alt={`${product.title} product sample`}
                      className="h-full w-full rounded-[1.5rem] object-contain transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="relative mb-2">
                    <span className="inline-flex rounded-full bg-slate-950/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px] sm:tracking-[0.18em]">
                      Miinii Collection
                    </span>
                  </div>
                  <h3 className="relative text-3xl font-black tracking-tight text-slate-950 sm:text-2xl">{product.title}</h3>
                  <div className="relative mt-3 flex flex-wrap items-center gap-2">
                    {product.oldPrice && (
                      <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-400 line-through ring-1 ring-slate-200">
                        {product.oldPrice}
                      </span>
                    )}
                    <span className="rounded-full bg-[#ff6f31]/15 px-4 py-2 text-sm font-black text-[#ff9a6f] ring-1 ring-[#ff6f31]/20">
                      {product.price}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#070B18] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title="Showcase your best Miinii photos"
            text="A premium collage-style section for product shots, packaging, client figures, and social proof."
            dark
          />

          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {collageItems.map((item) => (
                <PremiumCollageCard key={item} title={item} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      <section id="about" className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-[#16C1C1]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6f31]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-[#fff8f3] shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-slate-100 to-white p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,193,193,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,111,49,0.16),transparent_35%)]" />
                  <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-inner">
                    <img
                      src="/about-portrait.png"
                      alt="Miinii artist portrait placeholder"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/75 text-center backdrop-blur-sm">
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6f31]/10 text-[#ff6f31]">
                        <IconPlaceholder className="h-7 w-7" />
                      </div>
                      <p className="text-base font-black text-slate-950">Portrait Photo</p>
                      <p className="mt-1 px-5 text-sm leading-6 text-slate-500">Replace with your photo: /about-portrait.png</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#16C1C1]">About us</p>
                  <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Small figures, big memories.</h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    Miinii creates custom 3D mini figures from your photos, crafted with digital sculpting, resin printing, and careful hand painting.
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-500">
                    Each piece is made to feel personal, gift-ready, and display-worthy — perfect for people, pets, milestones, and special requests.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="[animation-delay:.12s]">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Handmade", "Sculpted and painted with care"],
                ["Personal", "Based on your favorite photos"],
                ["Gift-ready", "Finished with a premium keepsake feel"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="group rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/70"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff6f31]/10 text-[#ff6f31] transition duration-500 group-hover:scale-110">
                    <HeartIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="testimonials" className="bg-[#fff8f3] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-8 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#16C1C1]">Testimonials</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Kind words from Miinii clients</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Short notes from customers who turned their favorite moments into custom keepsakes.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} className={`[animation-delay:${index * 0.05}s]`}>
                <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-sm backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#16C1C1]/30 hover:shadow-xl hover:shadow-orange-100/60">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#16C1C1]/10 transition duration-500 group-hover:scale-125" />
                  <div className="relative mb-4 flex items-center justify-between gap-3">
                    <div className="flex gap-0.5 text-[#ff6f31]">
                      {[...Array(5)].map((_, starIndex) => (
                        <StarIcon key={starIndex} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="relative min-h-[56px] text-sm font-medium leading-7 text-slate-600">“{testimonial.text}”</p>

                  <div className="relative mt-4 border-t border-slate-100 pt-4">
                    <div>
                      <h3 className="text-sm font-black text-slate-950">{testimonial.name}</h3>
                      <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section id="faq" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            text="Here are simple answers your customers may want to know before placing an order."
          />

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.q} className={`[animation-delay:${index * 0.08}s]`}>
                <article className="rounded-3xl bg-white p-6 shadow-lg shadow-orange-100/60">
                  <h3 className="text-xl font-black text-slate-950 sm:text-lg">{faq.q}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600 sm:leading-7">{faq.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ff6f31] to-[#16C1C1] p-6 text-center shadow-2xl shadow-orange-200 sm:p-10 lg:p-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Ready to create your own Miinii?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-lg">
                Send your reference photos and let’s turn your favorite person, pet, or memory into a custom 3D mini figure.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="https://instagram.com/MiiniiStudios"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-4 text-lg font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20 sm:text-base"
                >
                  <SocialIcon type="message" className="mr-2 h-5 w-5" />
                  Message Us
                </a>

                <a
                  href="https://www.facebook.com/MiiniiStudios"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:text-base"
                >
                  <SocialIcon type="facebook" className="mr-2 h-5 w-5" />
                  Facebook
                </a>

                <a
                  href="https://www.tiktok.com/@miiniistudios"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:text-base"
                >
                  <SocialIcon type="tiktok" className="mr-2 h-5 w-5" />
                  TikTok
                </a>

                <a
                  href="https://instagram.com/MiiniiStudios"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:text-base"
                >
                  <SocialIcon type="instagram" className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </div>

              <div className="mt-8 text-center text-sm leading-7 text-white/90 sm:text-base">
                <p>miinii.ariel@gmail.com</p>
                <p>Meycauayan City of Bulacan, Philippines</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="px-4 py-4 text-center text-sm font-medium text-slate-500 sm:px-6 lg:px-8">
        <p>© 2026 Miinii. MiiniiStudios. 3D custom mini figures. All rights reserved.</p>
      </footer>
    </main>
  );
}
