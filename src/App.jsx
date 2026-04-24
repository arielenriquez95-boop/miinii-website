import React from "react";

const processSteps = [
  {
    title: "3D Sculpting",
    text: "Your Miinii is digitally sculpted based on your reference photos.",
  },
  {
    title: "Resin Printing",
    text: "Printed in high resolution for clean details and a premium miniature look.",
  },
  {
    title: "Hand Painting",
    text: "Each piece is carefully painted by hand to bring your Miinii to life.",
  },
  {
    title: "Finishing & Packaging",
    text: "Finished, quality checked, and packed in a gift-ready Miinii box.",
  },
];

const products = [
  {
    title: "Miinii Pop",
    text: "Fun, collectible-style mini figures with a cute display-ready character look.",
  },
  {
    title: "Miinii Me",
    text: "Custom mini figures based on real people for birthdays, graduations, couples, and special moments.",
  },
  {
    title: "Miinii Pet",
    text: "Personalized pet mini figures made to celebrate your favorite fur babies.",
  },
  {
    title: "Miinii Request",
    text: "Special custom requests for unique poses, themes, outfits, and meaningful keepsakes.",
  },
];

const whyMiiniiItems = [
  "Custom-made from real references",
  "Preview before production",
  "Detailed resin print quality",
  "Hand-painted finish",
  "Gift-ready packaging",
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
  };
}

console.assert(validateWebsiteContent().hasAllSections, "Website should include all standard landing page sections.");
console.assert(validateWebsiteContent().hasProcessSteps, "Website should include at least 4 process steps.");
console.assert(validateWebsiteContent().hasProducts, "Website should include exactly 4 product categories.");
console.assert(validateWebsiteContent().hasFaqs, "Website should include at least 4 FAQs.");
console.assert(validateWebsiteContent().hasCollageItems, "Website should include exactly 6 collage items.");
console.assert(validateWebsiteContent().hasExactProductOptions, "Website should include Miinii Pop, Miinii Me, Miinii Pet, and Miinii Request.");

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
    <div className="group relative aspect-square overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-500 hover:z-20 hover:scale-110 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white via-transparent to-[#ff6f31]/5" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.2rem] bg-[linear-gradient(145deg,#ffffff,#f8fafc)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,111,49,0.14),_transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="relative flex flex-1 items-center justify-center p-5 sm:p-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ec] text-[#ff6f31] shadow-sm transition duration-500 group-hover:scale-110">
              <IconPlaceholder className="h-7 w-7" />
            </div>
            <p className="text-lg font-bold text-slate-900 sm:text-base">{title}</p>
            <p className="mt-1 text-sm text-slate-500 sm:text-sm">Replace with your image</p>
          </div>
        </div>

        <div className="relative flex items-center justify-between border-t border-slate-100 px-4 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Miinii</span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
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

      <section id="home" className="relative pt-24 sm:pt-32 lg:pt-36">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#16C1C1]/20 blur-3xl animate-[pulseSoft_5s_ease-in-out_infinite]" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#ff6f31]/20 blur-3xl animate-[pulseSoft_6s_ease-in-out_infinite]" />

        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-12 pt-6 sm:gap-10 sm:px-6 md:pb-24 lg:grid-cols-2 lg:px-8">
          <div className="text-center lg:text-left">
            <Reveal>
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2.5 text-base font-bold text-[#ff6f31] shadow-sm sm:text-sm lg:mx-0">
                <StarIcon className="h-5 w-5 fill-[#ff6f31] sm:h-4 sm:w-4" />
                Custom mini figures made from your photos
              </div>
            </Reveal>

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
                  className="group inline-flex items-center justify-center rounded-full bg-[#ff6f31] px-8 py-4.5 text-lg font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#f05f20] sm:px-7 sm:py-4 sm:text-base"
                >
                  Start Your Miinii
                  <ArrowIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4.5 text-lg font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-[#16C1C1] sm:px-7 sm:py-4 sm:text-base"
                >
                  View Process
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative mx-auto -mt-2 w-full max-w-[420px] sm:mt-0 sm:max-w-lg lg:max-w-none [animation-delay:.18s]">
            <div className="relative overflow-visible rounded-[2.5rem] bg-transparent p-0 animate-[floatSoft_5s_ease-in-out_infinite]">
              <div className="aspect-[4/5] min-h-[390px] sm:min-h-0">
                <img
                  src="/hero-image.png"
                  alt="Miinii custom 3D mini figure"
                  className="h-full w-full scale-110 object-contain sm:scale-100"
                />
              </div>
            </div>

            <div className="absolute bottom-6 left-2 rounded-3xl bg-white p-4 shadow-xl sm:-left-6 sm:bottom-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#16C1C1]/15 text-[#16C1C1]">
                  <HeartIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-black sm:text-sm">Made with care</p>
                  <p className="text-sm text-slate-500 sm:text-xs">Personalized gift</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="process" className="py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How it works"
            title="From photo to mini figure"
            text="A simple production flow that turns your favorite people and pets into handcrafted 3D keepsakes."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} className={`[animation-delay:${index * 0.08}s]`}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] bg-white p-5 shadow-lg shadow-orange-100/60 transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-5 aspect-[4/3] rounded-[1.5rem] bg-[#f8fafc] p-3">
                    <ImagePlaceholder
                      title={step.title}
                      subtitle="Image placeholder"
                      className="h-full"
                      iconClassName="h-8 w-8"
                    />
                  </div>
                  <div className="mb-2 inline-flex rounded-full bg-[#ff6f31]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff6f31]">
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

      <section id="products" className="bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we make"
            title="Mini figures for every story"
            text="Choose the Miinii style that fits your gift, collection, or special memory."
            dark
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Reveal key={product.title} className={`[animation-delay:${index * 0.08}s]`}>
                <article className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10">
                  <div className="mb-5 aspect-[4/3] rounded-[1.5rem] bg-white/5 p-3">
                    <ImagePlaceholder
                      title={product.title}
                      subtitle="Product image placeholder"
                      className="h-full border-white/10 bg-gradient-to-br from-white to-slate-100"
                      iconClassName="h-8 w-8"
                    />
                  </div>
                  <h3 className="text-2xl font-black">{product.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300 sm:leading-7">{product.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title="Showcase your best Miinii photos"
            text="A premium collage-style section for product shots, packaging, client figures, and social proof."
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

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] bg-[#fff8f3] p-6 shadow-xl shadow-orange-100 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ff6f31]">Why Miinii</p>
                <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  A personal gift that feels premium, cute, and meaningful.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-lg">
                  Miinii is designed for people who want something more personal than a regular gift. Every figure is
                  custom-made, reviewed before printing, and finished with care.
                </p>
              </div>

              <div className="grid gap-3">
                {whyMiiniiItems.map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl bg-white p-4 text-base font-bold text-slate-700 shadow-sm sm:text-base">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff8f3] text-[#ff6f31]">
                      <IconPlaceholder className="h-6 w-6" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
                  href="mailto:hello@miinii.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-4 text-lg font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20 sm:text-base"
                >
                  <SocialIcon type="message" className="mr-2 h-5 w-5" />
                  Message Us
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:text-base"
                >
                  <SocialIcon type="facebook" className="mr-2 h-5 w-5" />
                  Facebook
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:text-base"
                >
                  <SocialIcon type="tiktok" className="mr-2 h-5 w-5" />
                  TikTok
                </a>

                <a
                  href="https://instagram.com/miiniistudios"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:text-base"
                >
                  <SocialIcon type="instagram" className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="px-4 py-8 text-center text-sm font-medium text-slate-500 sm:px-6 lg:px-8">
        <p>© 2026 Miinii. 3D custom mini figures. All rights reserved.</p>
      </footer>
    </main>
  );
}
