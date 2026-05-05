import React from "react";

const processSteps = [
  { title: "3D Sculpting", text: "Your Miinii is digitally sculpted based on your reference photos.", image: "/process-sculpting.png" },
  { title: "3D Printing", text: "Printed in high resolution for clean details and a premium miniature look.", image: "/process-printing.png" },
  { title: "Hand Painting", text: "Each piece is carefully painted by hand to bring your Miinii to life.", image: "/process-painting.png" },
  { title: "Finishing & Packaging", text: "Finished, quality checked, and packed in a gift-ready Miinii box.", image: "/process-packaging.png" },
];

const products = [
  { title: "Miinii Pop", image: "/miinii-pop.png", oldPrice: "₱3,490", price: "₱2,990" },
  { title: "Miinii Me", image: "/miinii-me.png", oldPrice: "₱3,490", price: "₱2,990" },
  { title: "Miinii Pet", image: "/miinii-pet.png", oldPrice: "₱3,490", price: "₱2,990" },
  { title: "Miinii Request", image: "/miinii-request.png", price: "Custom quote" },
];

const aboutHighlights = [
  { title: "Photo-based sculpting", text: "We turn your references into a custom 3D sculpt before printing starts." },
  { title: "Resin printed details", text: "Each figure is printed in high resolution so small features stay clean and display-ready." },
  { title: "Hand-painted finish", text: "Every Miinii is painted and packed with a personal, gift-ready feel." },
];

const testimonials = [
  { name: "Client Review", role: "Custom figure order", text: "The preview process made it easy to request small changes, and the final figure felt really personal." },
  { name: "Gift Buyer", role: "Miinii keepsake", text: "It looked unique, thoughtful, and perfect for display. The gift box made it feel complete." },
  { name: "Pet Parent", role: "Miinii Pet", text: "The small details and painted finish made the piece feel special, not just like a regular figure." },
];

const faqs = [
  { q: "How does the process work?", a: "Send your reference photos, review the 3D preview, then we print, paint, finish, and pack your Miinii." },
  { q: "Can I request revisions?", a: "Yes. You can review the 3D preview before printing and request minor adjustments before production starts." },
  { q: "Is it good as a gift?", a: "Yes. Miinii figures are made as personal gifts, keepsakes, display pieces, and collectibles." },
];

function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.1 6.3l6.9 1l-5 4.9l1.2 6.8L12 17.8L5.8 21L7 14.2L2 9.3l6.9-1L12 2z" />
    </svg>
  );
}

function ArrowIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 5l7 7l-7 7" />
    </svg>
  );
}

function IconPlaceholder({ className = "h-7 w-7" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7 15l3-3a1.5 1.5 0 0 1 2.1 0L17 17" />
      <circle cx="9" cy="9" r="1.2" />
    </svg>
  );
}

function Reveal({ children, className = "" }) {
  return <div className={`animate-[fadeUp_.7s_ease-out_both] ${className}`}>{children}</div>;
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

function ImageSlot({ title }) {
  return (
    <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-slate-300 bg-gradient-to-br from-white to-slate-50 text-center">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6f31]/10 text-[#ff6f31]"><IconPlaceholder /></div>
      <p className="px-4 text-base font-bold text-slate-900">{title}</p>
      <p className="mt-1 px-5 text-sm leading-5 text-slate-500">Replace with your image</p>
    </div>
  );
}

function AboutUsSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#fff8f3] py-14 sm:py-20">
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#16C1C1]/20 blur-3xl animate-[pulseSoft_6s_ease-in-out_infinite]" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-[#ff6f31]/20 blur-3xl animate-[pulseSoft_7s_ease-in-out_infinite]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-10 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-slate-950 p-4 shadow-2xl shadow-orange-100">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6f31]/25 via-transparent to-[#16C1C1]/25" />
            <div className="relative grid gap-3 sm:grid-cols-2">
              <div className="sm:row-span-2"><ImageSlot title="Founder / Studio Shot" /></div>
              <ImageSlot title="Hand Painting" />
              <ImageSlot title="Gift-ready Miinii" />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#16C1C1]">About Us</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Small figures, big memories.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Miinii creates custom 3D mini figures from photos, made for meaningful gifts, personal keepsakes, and collectible display pieces. Each project is carefully sculpted, resin printed, hand-painted, and packed with a premium personal touch.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-3">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.title} className={`[animation-delay:${index * 0.08}s]`}>
                <article className="group flex gap-4 rounded-3xl border border-white bg-white/85 p-4 shadow-lg shadow-orange-100/60 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-100">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff6f31]/12 text-[#ff6f31] transition duration-500 group-hover:rotate-6 group-hover:scale-110"><StarIcon className="h-5 w-5" /></div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Client Love" title="Made to feel personal" text="Short social-proof cards you can replace with real customer reviews once available." />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} className={`[animation-delay:${index * 0.08}s]`}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-[#fff8f3] p-6 shadow-[0_16px_45px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#16C1C1]/15 transition duration-500 group-hover:scale-125" />
                <div className="relative mb-5 flex gap-1 text-[#ff6f31]">
                  {Array.from({ length: 5 }).map((_, starIndex) => <StarIcon key={starIndex} />)}
                </div>
                <p className="relative text-base leading-7 text-slate-700">“{item.text}”</p>
                <div className="relative mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">M</div>
                  <div>
                    <h3 className="font-black text-slate-950">{item.name}</h3>
                    <p className="text-sm font-semibold text-slate-500">{item.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f3] text-slate-900 [scroll-behavior:smooth]">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatSoft { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes pulseSoft { 0%, 100% { transform: scale(1); opacity: .8; } 50% { transform: scale(1.08); opacity: 1; } }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#home" className="text-2xl font-black text-slate-950">Miinii</a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#process" className="transition hover:text-[#ff6f31]">Process</a>
            <a href="#products" className="transition hover:text-[#ff6f31]">Products</a>
            <a href="#gallery" className="transition hover:text-[#ff6f31]">Gallery</a>
            <a href="#about" className="transition hover:text-[#ff6f31]">About</a>
            <a href="#testimonials" className="transition hover:text-[#ff6f31]">Reviews</a>
            <a href="#faq" className="transition hover:text-[#ff6f31]">FAQ</a>
          </div>
          <a href="#contact" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#ff6f31]">Order Now</a>
        </div>
      </nav>

      <section id="home" className="relative pt-24 sm:pt-28 lg:pt-32">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#16C1C1]/20 blur-3xl animate-[pulseSoft_5s_ease-in-out_infinite]" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#ff6f31]/20 blur-3xl animate-[pulseSoft_6s_ease-in-out_infinite]" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="order-2 lg:order-1"><div className="aspect-[4/5] rounded-[2.5rem] bg-white/70 p-5 shadow-2xl shadow-orange-100 animate-[floatSoft_5s_ease-in-out_infinite]"><ImageSlot title="Hero Figure" /></div></Reveal>
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <Reveal><h1 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-7xl">Turn your photos into <span className="text-[#ff6f31]">custom 3D mini figures</span>.</h1></Reveal>
            <Reveal className="[animation-delay:.16s]"><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">Miinii creates handcrafted 3D mini figures based on real people and pets. Each piece is carefully sculpted, resin printed, and hand-painted into a one-of-a-kind keepsake.</p></Reveal>
            <Reveal className="[animation-delay:.24s]"><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"><a href="#contact" className="group inline-flex items-center justify-center rounded-full bg-[#ff6f31] px-8 py-4 text-base font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1">Start Your Miinii <ArrowIcon className="ml-2 transition group-hover:translate-x-1" /></a><a href="#process" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-[#16C1C1]">View Process</a></div></Reveal>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How it works" title="From photo to mini figure" text="A simple production flow that turns your favorite people and pets into handcrafted 3D keepsakes." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{processSteps.map((step, index) => <Reveal key={step.title} className={`[animation-delay:${index * 0.08}s]`}><article className="group h-full rounded-[2rem] border border-slate-100 bg-[#fff8f3] p-4 shadow-sm transition hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/70"><div className="mb-5 aspect-[4/3]"><ImageSlot title={step.title} /></div><div className="mb-3 inline-flex rounded-full bg-[#ff6f31] px-3 py-1 text-xs font-black uppercase tracking-wider text-white">Step {index + 1}</div><h3 className="text-xl font-black text-slate-950">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section id="products" className="bg-white py-16 text-slate-950 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What we make" title="Mini figures for every story" text="Choose the Miinii style that fits your gift, collection, or special memory." />
          <div className="mx-auto grid max-w-sm gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">{products.map((product, index) => <Reveal key={product.title} className={`[animation-delay:${index * 0.08}s]`}><article className="group h-full rounded-[2rem] border border-slate-100 bg-white p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-2"><div className="mb-5 aspect-[4/5]"><ImageSlot title={product.title} /></div><span className="inline-flex rounded-full bg-slate-950/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Miinii Collection</span><h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{product.title}</h3><div className="mt-3 flex flex-wrap items-center gap-2">{product.oldPrice && <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-400 line-through ring-1 ring-slate-200">{product.oldPrice}</span>}<span className="rounded-full bg-[#ff6f31]/15 px-4 py-2 text-sm font-black text-[#ff6f31] ring-1 ring-[#ff6f31]/20">{product.price}</span></div></article></Reveal>)}</div>
        </div>
      </section>

      <section id="gallery" className="bg-[#070B18] py-16 text-white sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="Gallery" title="Showcase your best Miinii photos" text="A premium collage-style section for product shots, packaging, client figures, and social proof." dark /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Hero Figure", "Gift Box", "Pet Figure", "Client Figure", "Packaging Shot", "Finished Miinii"].map((item) => <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:scale-105"><div className="rounded-[1.2rem] bg-slate-900/80 p-5"><ImageSlot title={item} /></div></div>)}</div></div></section>

      <AboutUsSection />
      <TestimonialsSection />

      <section id="faq" className="py-16 sm:py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionHeader eyebrow="FAQ" title="Common questions" text="Here are simple answers your customers may want to know before placing an order." /><div className="grid gap-4">{faqs.map((faq, index) => <Reveal key={faq.q} className={`[animation-delay:${index * 0.08}s]`}><article className="rounded-3xl bg-white p-6 shadow-lg shadow-orange-100/60"><h3 className="text-lg font-black text-slate-950">{faq.q}</h3><p className="mt-3 text-base leading-7 text-slate-600">{faq.a}</p></article></Reveal>)}</div></div></section>

      <section id="contact" className="px-4 pb-8 sm:px-6 lg:px-8"><Reveal><div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ff6f31] to-[#16C1C1] p-6 text-center shadow-2xl shadow-orange-200 sm:p-10 lg:p-16"><div className="mx-auto max-w-3xl"><h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Ready to create your own Miinii?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">Send your reference photos and let’s turn your favorite person, pet, or memory into a custom 3D mini figure.</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><a href="#" className="rounded-full border border-white/30 bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur">Message Us</a><a href="#" className="rounded-full bg-white px-6 py-4 text-base font-black text-slate-950 shadow-xl">Facebook</a><a href="#" className="rounded-full bg-white px-6 py-4 text-base font-black text-slate-950 shadow-xl">TikTok</a><a href="#" className="rounded-full bg-white px-6 py-4 text-base font-black text-slate-950 shadow-xl">Instagram</a></div><div className="mt-8 text-center text-sm leading-7 text-white/90"><p>miinii.ariel@gmail.com</p><p>Meycauayan City of Bulacan, Philippines</p></div></div></div></Reveal></section>

      <footer className="px-4 py-4 text-center text-sm font-medium text-slate-500"><p>© 2026 Miinii. MiiniiStudios. 3D custom mini figures. All rights reserved.</p></footer>
    </main>
  );
}
