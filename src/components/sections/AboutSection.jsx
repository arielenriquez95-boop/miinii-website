import { SectionContentReveal } from "../SectionContentReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";

export function AboutSection() {
  return (
    <SectionScrollReveal id="about" className="relative overflow-x-hidden bg-white py-8 sm:py-24">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-[#16C1C1]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6f31]/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-[#fff8f3] shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:rounded-[2rem] [transform:translateZ(0)]">
            {/* Mobile & tablet */}
            <SectionContentReveal delay={80} className="lg:hidden">
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

            {/* Desktop */}
            <div className="hidden lg:grid lg:grid-cols-[minmax(280px,320px)_1fr] lg:items-center lg:gap-14 lg:p-12 lg:pr-14">
              <SectionContentReveal delay={160} direction="left" className="relative flex justify-center">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#16C1C1]/25 via-transparent to-[#ff6f31]/20 blur-sm" aria-hidden="true" />
                <div className="relative size-72 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80 xl:size-80">
                  <img src="/about-portrait.png" alt="Miinii artist portrait" className="h-full w-full object-cover object-top" />
                </div>
              </SectionContentReveal>

              <SectionContentReveal delay={240} direction="right" className="min-w-0">
                <p className="section-title-eyebrow mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#16C1C1]">About us</p>
                <h2 className="section-title-heading text-4xl font-black leading-[1.08] tracking-tight text-slate-950 xl:text-5xl">
                  Meet the artist
                  <br />
                  behind Miinii.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Hi, I’m Ariel, the creator of Miinii. Miinii started from my love for 3D art, design, and meaningful custom gifts. What began as a creative idea became a mini studio that turns real people, pets, and special memories into handcrafted 3D miniatures.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-500">
                  Each Miinii is carefully made through digital sculpting, resin 3D printing, hand painting, finishing, and packaging. As Miinii continues to grow, we’re working toward building a bigger creative team so we can create more personalized mini figures for everyone while keeping the same care, quality, and handmade feel in every piece.
                </p>
              </SectionContentReveal>
            </div>
          </div>
      </div>
    </SectionScrollReveal>
  );
}
