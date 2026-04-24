import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Icon({ name, className = "h-6 w-6" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    sparkles: (
      <svg {...commonProps}>
        <path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
        <path d="M19 17v4" />
        <path d="M17 19h4" />
      </svg>
    ),
    gift: (
      <svg {...commonProps}>
        <rect x="3" y="8" width="18" height="13" rx="2" />
        <path d="M12 8v13" />
        <path d="M3 12h18" />
        <path d="M7.5 8C5.6 8 5 6.8 5 5.8C5 4.7 5.9 4 6.9 4C8.7 4 10 6.1 12 8" />
        <path d="M16.5 8C18.4 8 19 6.8 19 5.8C19 4.7 18.1 4 17.1 4C15.3 4 14 6.1 12 8" />
      </svg>
    ),
    brush: (
      <svg {...commonProps}>
        <path d="M9 15l6.8-6.8a2.8 2.8 0 0 1 4 4L13 19" />
        <path d="M7 17c-2.5.4-4 1.7-4 4c2.3 0 3.6-1.5 4-4z" />
        <path d="M7 17l2 2" />
      </svg>
    ),
    printer: (
      <svg {...commonProps}>
        <path d="M6 9V3h12v6" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v7H6z" />
        <path d="M18 12h.01" />
      </svg>
    ),
    cube: (
      <svg {...commonProps}>
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
        <path d="M4 6.5l8 4.5l8-4.5" />
        <path d="M12 11v9" />
      </svg>
    ),
    heart: (
      <svg {...commonProps}>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6l1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
    star: (
      <svg {...commonProps}>
        <path d="M12 2l3.1 6.3l6.9 1l-5 4.9l1.2 6.8L12 17.8L5.8 21L7 14.2L2 9.3l6.9-1L12 2z" />
      </svg>
    ),
    check: (
      <svg {...commonProps}>
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    message: (
      <svg {...commonProps}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </svg>
    ),
    instagram: (
      <svg {...commonProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
    arrow: (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="M13 5l7 7l-7 7" />
      </svg>
    ),
    paw: (
      <svg {...commonProps}>
        <circle cx="6" cy="7" r="2" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="8" cy="13" r="2" />
        <path d="M12 12c3.5 0 6 2.1 6 5a3 3 0 0 1-3 3c-1.3 0-2-.8-3-.8s-1.7.8-3 .8a3 3 0 0 1-3-3c0-2.9 2.5-5 6-5z" />
      </svg>
    ),
    user: (
      <svg {...commonProps}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
    package: (
      <svg {...commonProps}>
        <path d="M21 8l-9-5l-9 5l9 5l9-5z" />
        <path d="M3 8v8l9 5l9-5V8" />
        <path d="M12 13v8" />
        <path d="M8 17l2 2l5-6" />
      </svg>
    ),
  };

  return icons[name] || icons.sparkles;
}

const processSteps = [
  {
    icon: "cube",
    title: "3D Sculpting",
    text: "Your figure is digitally sculpted based on your reference photos.",
  },
  {
    icon: "printer",
    title: "Resin Printing",
    text: "Printed in high resolution for clean details and a premium miniature look.",
  },
  {
    icon: "brush",
    title: "Hand Painting",
    text: "Each piece is carefully painted by hand to bring the character to life.",
  },
  {
    icon: "package",
    title: "Finishing & Packaging",
    text: "Finished, quality checked, and packed in a Miinii gift box.",
  },
];

const products = [
  {
    icon: "user",
    title: "Miinii Me",
    text: "Custom human mini figures for birthdays, graduations, couples, and special memories.",
  },
  {
    icon: "paw",
    title: "Miinii Pets",
    text: "Adorable custom pet mini figures made to celebrate your fur babies.",
  },
  {
    icon: "gift",
    title: "Miinii Custom",
    text: "Personalized keepsakes for events, gifts, collections, and meaningful milestones.",
  },
];

const faqs = [
  {
    q: "How does the process work?",
    a: "Send your reference photos, review the 3D preview, then we print, paint, finish, and pack your Miinii.",
  },
  {
    q: "Can I request revisions?",
    a: "Yes. You can review the preview before printing and request minor adjustments before production starts.",
  },
  {
    q: "Is it good as a gift?",
    a: "Yes. Miinii figures are made as personal gifts, keepsakes, display pieces, and collectibles.",
  },
];

const requiredSections = ["home", "process", "products", "gallery", "faq", "contact"];

function validateWebsiteContent() {
  return {
    hasAllSections: requiredSections.every(Boolean),
    hasProcessSteps: processSteps.length >= 4,
    hasProducts: products.length >= 3,
    hasFaqs: faqs.length >= 3,
  };
}

console.assert(validateWebsiteContent().hasAllSections, "Website should include all standard landing page sections.");
console.assert(validateWebsiteContent().hasProcessSteps, "Website should include at least 4 process steps.");
console.assert(validateWebsiteContent().hasProducts, "Website should include at least 3 product categories.");
console.assert(validateWebsiteContent().hasFaqs, "Website should include at least 3 FAQs.");

function SectionHeader({ eyebrow, title, text, dark = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto mb-10 max-w-2xl text-center"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#16C1C1]">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl md:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {text}
      </p>
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f3] text-slate-900">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2" aria-label="Go to Miinii home section">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff6f31] shadow-lg shadow-orange-200">
              <Icon name="sparkles" className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-black tracking-tight">Miinii</p>
              <p className="hidden text-xs font-medium text-slate-500 sm:block">
                3D custom mini figures
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#process" className="transition hover:text-[#ff6f31]">Process</a>
            <a href="#products" className="transition hover:text-[#ff6f31]">Products</a>
            <a href="#gallery" className="transition hover:text-[#ff6f31]">Gallery</a>
            <a href="#faq" className="transition hover:text-[#ff6f31]">FAQ</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#ff6f31]"
          >
            Order Now
          </a>
        </div>
      </nav>

      <section id="home" className="relative pt-28 sm:pt-32 lg:pt-36">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#16C1C1]/20 blur-3xl" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#ff6f31]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 md:pb-24 lg:grid-cols-2 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-bold text-[#ff6f31] shadow-sm lg:mx-0"
            >
              <Icon name="star" className="h-4 w-4 fill-[#ff6f31]" />
              Custom mini figures made from your photos
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="text-4xl font-black leading-[1.03] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Turn your photos into custom 3D mini figures.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0"
            >
              Miinii creates handcrafted 3D mini figures based on real people and pets. Each piece is carefully sculpted, resin printed, and hand-painted into a one-of-a-kind keepsake.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-full bg-[#ff6f31] px-7 py-4 text-base font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#f05f20]"
              >
                Start Your Miinii
                <Icon name="arrow" className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-[#16C1C1]"
              >
                View Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mx-auto mt-8 grid grid-cols-3 gap-3 rounded-3xl bg-white/80 p-3 shadow-lg shadow-orange-100/70 backdrop-blur sm:max-w-lg lg:mx-0 lg:max-w-xl"
            >
              {[
                ["3D", "Sculpted"],
                ["Resin", "Printed"],
                ["Hand", "Painted"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-2xl bg-[#fff8f3] p-3 text-center sm:p-4">
                  <p className="text-xl font-black text-slate-950 sm:text-2xl">{a}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-sm">{b}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-gradient-to-br from-[#ff6f31] via-[#ff8d5c] to-[#16C1C1] p-4 shadow-2xl shadow-orange-200 sm:p-5"
            >
              <div className="rounded-[2rem] bg-white/95 p-4 sm:p-7">
                <div className="aspect-[4/5] rounded-[1.75rem] bg-[#f2f4f7] p-3 shadow-inner sm:p-4">
                  <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-slate-300 bg-white text-center">
                    <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-[#ff6f31]/10 sm:h-36 sm:w-36">
                      <Icon name="gift" className="h-14 w-14 text-[#ff6f31] sm:h-20 sm:w-20" />
                    </div>
                    <p className="max-w-xs px-4 text-xl font-black text-slate-950 sm:text-2xl">
                      Place your Miinii product photo here
                    </p>
                    <p className="mt-3 max-w-xs px-5 text-sm leading-6 text-slate-500">
                      Replace this area with your best figure, box, or lifestyle product shot.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-1 bottom-8 rounded-3xl bg-white p-4 shadow-xl sm:-left-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#16C1C1]/15">
                  <Icon name="heart" className="h-5 w-5 text-[#16C1C1]" />
                </div>
                <div>
                  <p className="text-sm font-black">Made with care</p>
                  <p className="text-xs text-slate-500">Personalized gift</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              "Perfect for birthdays, anniversaries, graduations, and milestones.",
              "Made from reference photos and reviewed before printing.",
              "Premium resin print with careful hand-painted finishing.",
            ].map((text) => (
              <motion.div
                key={text}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex gap-3 rounded-3xl border border-slate-100 bg-[#fff8f3] p-5 shadow-sm"
              >
                <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-[#16C1C1]" />
                <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How it works"
            title="From photo to mini figure"
            text="A simple production flow that turns your favorite people and pets into handcrafted 3D keepsakes."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-lg shadow-orange-100/60 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute right-5 top-4 text-6xl font-black text-slate-100">
                  {index + 1}
                </div>
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6f31]/10 transition group-hover:scale-110">
                  <Icon name={step.icon} className="h-7 w-7 text-[#ff6f31]" />
                </div>
                <h3 className="relative text-xl font-black text-slate-950">{step.title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {products.map((product) => (
              <motion.div
                key={product.title}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/10 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16C1C1]/20">
                  <Icon name={product.icon} className="h-7 w-7 text-[#16C1C1]" />
                </div>
                <h3 className="text-2xl font-black">{product.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{product.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title="Showcase your best Miinii photos"
            text="Use this area for your product shots, packaging photos, client figures, and social proof."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {["Product Shot", "Gift Box", "Pet Figure", "Client Display"].map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className={`group aspect-[4/5] overflow-hidden rounded-[2rem] bg-white p-4 shadow-lg shadow-orange-100 transition hover:-translate-y-2 ${
                  index === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <div className="flex h-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-orange-50 to-teal-50 text-center">
                  <div>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-sm transition group-hover:scale-110">
                      <Icon name="sparkles" className="h-8 w-8 text-[#ff6f31]" />
                    </div>
                    <p className="text-lg font-black text-slate-950">{item}</p>
                    <p className="mt-2 px-6 text-sm text-slate-500">Replace with your image</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 rounded-[2rem] bg-[#fff8f3] p-6 shadow-xl shadow-orange-100 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12"
          >
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ff6f31]">
                Why Miinii
              </p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                A personal gift that feels premium, cute, and meaningful.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Miinii is designed for people who want something more personal than a regular gift. Every figure is custom-made, reviewed before printing, and finished with care.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                "Custom-made from real references",
                "Preview before production",
                "Detailed resin print quality",
                "Hand-painted finish",
                "Gift-ready packaging",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-sm">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-[#16C1C1]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
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
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl bg-white p-6 shadow-lg shadow-orange-100/60"
              >
                <h3 className="text-lg font-black text-slate-950">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ff6f31] to-[#16C1C1] p-6 text-center shadow-2xl shadow-orange-200 sm:p-10 lg:p-16"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Ready to create your own Miinii?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Send your reference photos and let’s turn your favorite person, pet, or memory into a custom 3D mini figure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://instagram.com/miiniistudios"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-black text-slate-950 shadow-xl transition hover:-translate-y-1"
              >
                <Icon name="instagram" className="mr-2 h-5 w-5" />
                Visit Instagram
              </a>
              <a
                href="mailto:hello@miinii.com"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
              >
                <Icon name="message" className="mr-2 h-5 w-5" />
                Message Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-4 py-8 text-center text-sm font-medium text-slate-500 sm:px-6 lg:px-8">
        <p>© 2026 Miinii. 3D custom mini figures. All rights reserved.</p>
      </footer>
    </main>
  );
}
