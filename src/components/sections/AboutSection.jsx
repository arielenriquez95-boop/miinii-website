import { SectionReveal } from "../ScrollReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";

export function AboutSection() {
  return (
    <SectionScrollReveal id="about" className="relative overflow-x-hidden bg-white py-8 sm:py-24">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-[#16C1C1]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff6f31]/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-[#fff8f3] shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:rounded-[2rem] [transform:translateZ(0)]">
            <div className="flex flex-col md:grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative flex flex-row items-center gap-4 p-4 pb-0 md:block md:min-h-[420px] md:p-4">
                <div className="absolute inset-0 hidden bg-gradient-to-br from-slate-100 to-white md:block" />
                <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,rgba(22,193,193,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,111,49,0.16),transparent_35%)] md:block" />

                <div className="min-w-0 flex-1 text-left md:hidden">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#16C1C1]">About us</p>
                  <h2 className="mt-1.5 text-left text-xl font-black leading-[1.15] tracking-tight text-slate-950">
                    Meet the artist
                    <br />
                    behind Miinii.
                  </h2>
                </div>

                <div className="relative h-[7.75rem] w-[7.75rem] shrink-0 overflow-hidden rounded-full border border-white/70 bg-white shadow-md ring-1 ring-slate-100 md:mx-auto md:aspect-[4/4.5] md:h-full md:w-full md:max-h-none md:rounded-[1.5rem] md:shadow-inner">
                  <img src="/about-portrait.png" alt="Miinii artist portrait" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="flex flex-col justify-center p-4 md:p-10 lg:p-12">
                <div className="hidden md:block">
                  <p className="section-title-eyebrow mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#16C1C1]">About us</p>
                  <h2 className="section-title-heading text-5xl font-black tracking-tight text-slate-950">
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
        </SectionReveal>
      </div>
    </SectionScrollReveal>
  );
}
