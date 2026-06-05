import { ScrollReveal } from "../ScrollReveal";
import { SectionContentReveal } from "../SectionContentReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";
import { ArrowIcon } from "../icons/ArrowIcon";
import { scrollToSection } from "../../utils/scroll";

export function HeroSection() {
  return (
    <SectionScrollReveal id="home" className="relative pt-16 sm:pt-16 lg:pt-20">
      <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#16C1C1]/20 blur-3xl animate-[pulseSoft_5s_ease-in-out_infinite]" />
      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#ff6f31]/20 blur-3xl animate-[pulseSoft_6s_ease-in-out_infinite]" />
      <div className="mx-auto grid max-w-7xl items-center gap-0 px-4 pb-8 pt-1 sm:gap-5 sm:px-6 sm:pb-6 sm:pt-1 md:pb-8 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <SectionContentReveal direction="left" delay={120} className="relative mx-auto -mt-3 w-[88%] max-w-[390px] sm:-mt-4 sm:w-full sm:max-w-lg lg:mx-0 lg:max-w-none">
          <div className="desktop-float relative overflow-visible rounded-[2.5rem] bg-transparent p-0 animate-[floatSoft_5s_ease-in-out_infinite]">
            <div className="aspect-[4/5] min-h-[330px] sm:min-h-0">
              <img src="/hero-image.png" alt="Miinii custom 3D mini figure" className="h-full w-full scale-105 object-contain sm:scale-100" />
            </div>
          </div>
        </SectionContentReveal>
        <div className="-mt-8 text-center sm:mt-0 lg:text-left">
          <ScrollReveal direction="right" delay={80} className="max-lg:block lg:contents">
            <h1 className="section-title-heading text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Turn your photos into <span className="text-[#ff6f31]">custom 3D mini figures</span>.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={140} className="max-lg:block lg:contents">
            <p className="section-title-text mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">
              Miinii creates handcrafted 3D mini figures based on real people and pets. Each piece is carefully sculpted, resin printed, and hand-painted into a one-of-a-kind keepsake.
            </p>
          </ScrollReveal>
          <SectionContentReveal direction="right" delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center rounded-full bg-[#ff6f31] px-8 py-[18px] text-lg font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-[#f05f20] sm:px-7 sm:py-4 sm:text-base"
              >
                Start Your Miinii
                <ArrowIcon className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("process")}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-[18px] text-lg font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-[#16C1C1] sm:px-7 sm:py-4 sm:text-base"
              >
                View Process
              </button>
            </div>
          </SectionContentReveal>
        </div>
      </div>
    </SectionScrollReveal>
  );
}
