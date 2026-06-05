import { SectionContentReveal } from "../SectionContentReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";

const aboutHighlights = [
  { label: "Digital sculpting", detail: "From your photos" },
  { label: "Hand-painted", detail: "Every piece unique" },
  { label: "Gift-ready", detail: "Premium packaging" },
];

export function AboutSection() {
  return (
    <SectionScrollReveal id="about" className="relative overflow-x-hidden bg-white py-8 sm:py-24">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-[#16C1C1]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6f31]/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile & tablet */}
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-[#fff8f3] shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:rounded-[2rem] lg:hidden">
          <SectionContentReveal delay={80}>
            <div className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="relative size-[7.75rem] shrink-0 overflow-hidden rounded-full border-2 border-white bg-white shadow-md ring-1 ring-slate-100 sm:size-32">
                  <img src="/about-portrait.png" alt="Miinii artist portrait" className="h-full w-full object-cover object-top" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#16C1C1]">About us</p>
                  <h2 className="mt-1.5 text-xl font-black leading-[1.15] tracking-tight text-slate-950 sm:text-2xl">
                    Meet the artist
                    <br />
                    behind Miinii.
                  </h2>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Hi, I’m Ariel, the creator of Miinii. Miinii started from my love for 3D art, design, and meaningful custom gifts. What began as a creative idea became a mini studio that turns real people, pets, and special memories into handcrafted 3D miniatures.
              </p>

              <p className="text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                Each Miinii is carefully made through digital sculpting, resin 3D printing, hand painting, finishing, and packaging. As Miinii continues to grow, we’re working toward building a bigger creative team so we can create more personalized mini figures for everyone while keeping the same care, quality, and handmade feel in every piece.
              </p>
            </div>
          </SectionContentReveal>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <SectionContentReveal delay={120} direction="left" className="relative lg:col-span-5 xl:col-span-5">
            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-[#16C1C1]/15 blur-3xl" aria-hidden="true" />
              <div className="absolute -right-4 bottom-4 h-36 w-36 rounded-full bg-[#ff6f31]/15 blur-3xl" aria-hidden="true" />

              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#16C1C1]/20 via-white to-[#ff6f31]/15" aria-hidden="true" />
                <div className="relative m-3 flex items-center justify-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-50 via-white to-orange-50/60 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70">
                  <div className="relative size-64 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 xl:size-72">
                    <img src="/about-portrait.png" alt="Miinii artist portrait" className="h-full w-full object-cover object-top" />
                  </div>
                </div>

                <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/95 px-5 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#16C1C1]" aria-hidden="true" />
                  <span className="text-sm font-bold tracking-tight text-slate-900">Ariel · Miinii Creator</span>
                </div>
              </div>
            </div>
          </SectionContentReveal>

          <SectionContentReveal delay={220} direction="right" className="lg:col-span-7 xl:col-span-7">
            <p className="section-title-eyebrow mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#16C1C1]">About us</p>
            <h2 className="section-title-heading max-w-xl text-4xl font-black leading-[1.06] tracking-tight text-slate-950 xl:text-[3.25rem]">
              Meet the artist behind Miinii.
            </h2>

            <div className="mt-8 space-y-5 border-l-2 border-[#16C1C1]/30 pl-6">
              <p className="text-lg leading-8 text-slate-600">
                Hi, I’m Ariel, the creator of Miinii. Miinii started from my love for 3D art, design, and meaningful custom gifts. What began as a creative idea became a mini studio that turns real people, pets, and special memories into handcrafted 3D miniatures.
              </p>
              <p className="text-base leading-7 text-slate-500">
                Each Miinii is carefully made through digital sculpting, resin 3D printing, hand painting, finishing, and packaging. As Miinii continues to grow, we’re working toward building a bigger creative team so we can create more personalized mini figures for everyone while keeping the same care, quality, and handmade feel in every piece.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {aboutHighlights.map((item, index) => (
                <SectionContentReveal key={item.label} delay={320 + index * 70} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-[#fff8f3]/80 px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#16C1C1]/30 hover:shadow-md">
                    <p className="text-sm font-black text-slate-950">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
                  </div>
                </SectionContentReveal>
              ))}
            </div>
          </SectionContentReveal>
        </div>
      </div>
    </SectionScrollReveal>
  );
}
