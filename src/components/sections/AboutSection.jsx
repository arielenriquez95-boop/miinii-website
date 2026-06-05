import { SectionContentReveal } from "../SectionContentReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";

function AboutHeadline({ className = "" }) {
  return (
    <h2 className={`section-title-heading font-black tracking-tight text-slate-950 ${className}`.trim()}>
      Meet the artist
      <br />
      behind Miinii.
    </h2>
  );
}

function AboutCopy({ className = "" }) {
  return (
    <div className={`space-y-5 border-l-2 border-[#16C1C1]/30 pl-5 sm:pl-6 ${className}`.trim()}>
      <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        Hi, I’m Ariel, the creator of Miinii. Miinii started from my love for 3D art, design, and meaningful custom gifts. What began as a creative idea became a mini studio that turns real people, pets, and special memories into handcrafted 3D miniatures.
      </p>
      <p className="text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
        Each Miinii is carefully made through digital sculpting, resin 3D printing, hand painting, finishing, and packaging. As Miinii continues to grow, we’re working toward building a bigger creative team so we can create more personalized mini figures for everyone while keeping the same care, quality, and handmade feel in every piece.
      </p>
    </div>
  );
}

function AboutPortrait({ sizeClass = "size-44 sm:size-52 lg:size-64 xl:size-72", showBadge = true, align = "center" }) {
  const alignClass = align === "right" ? "justify-end" : align === "left" ? "justify-start" : "justify-center";

  return (
    <div className={`relative flex ${alignClass} ${showBadge ? "pb-6" : "pb-0"}`}>
      <div className="absolute -inset-4 hidden rounded-full bg-gradient-to-br from-[#16C1C1]/20 via-transparent to-[#ff6f31]/15 blur-md lg:block" aria-hidden="true" />
      <div className={`relative overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80 ${sizeClass}`}>
        <img src="/about-portrait.png" alt="Miinii artist portrait" className="h-full w-full object-cover object-top" />
      </div>

      {showBadge && (
        <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/95 px-4 py-2 shadow-lg shadow-slate-900/10 backdrop-blur sm:px-5 sm:py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#16C1C1]" aria-hidden="true" />
          <span className="text-xs font-bold tracking-tight text-slate-900 sm:text-sm">Ariel · Miinii Creator</span>
        </div>
      )}
    </div>
  );
}

export function AboutSection() {
  return (
    <SectionScrollReveal id="about" className="relative overflow-x-hidden bg-white py-10 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-[#16C1C1]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6f31]/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile & tablet */}
        <div className="flex flex-col gap-6 lg:hidden">
          <div className="flex items-start justify-between gap-4">
            <SectionContentReveal delay={120} className="min-w-0 flex-1 text-left">
              <p className="section-title-eyebrow mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#16C1C1] sm:text-sm sm:tracking-[0.28em]">
                About us
              </p>
              <AboutHeadline className="text-2xl leading-[1.1] sm:text-3xl" />
            </SectionContentReveal>

            <SectionContentReveal delay={160} direction="right" className="shrink-0">
              <AboutPortrait showBadge={false} align="right" sizeClass="size-[7.75rem] sm:size-32" />
            </SectionContentReveal>
          </div>

          <SectionContentReveal delay={220}>
            <AboutCopy />
          </SectionContentReveal>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-14 xl:gap-20">
          <SectionContentReveal delay={120} direction="left" className="lg:col-span-5">
            <div className="relative mx-auto max-w-[380px]">
              <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-[#16C1C1]/15 blur-3xl" aria-hidden="true" />
              <div className="absolute -right-4 bottom-4 h-36 w-36 rounded-full bg-[#ff6f31]/15 blur-3xl" aria-hidden="true" />
              <AboutPortrait showBadge align="center" sizeClass="size-64 xl:size-72" />
            </div>
          </SectionContentReveal>

          <SectionContentReveal delay={220} direction="right" className="lg:col-span-7">
            <p className="section-title-eyebrow mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#16C1C1]">About us</p>
            <AboutHeadline className="text-4xl leading-[1.08] xl:text-[3.25rem]" />
            <AboutCopy className="mt-8" />
          </SectionContentReveal>
        </div>
      </div>
    </SectionScrollReveal>
  );
}
