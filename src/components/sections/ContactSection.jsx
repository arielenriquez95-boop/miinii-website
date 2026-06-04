import { socialLinks } from "../../data/content";
import { SectionReveal } from "../ScrollReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";
import { SocialIcon } from "../icons/SocialIcon";

export function ContactSection() {
  return (
    <SectionScrollReveal id="contact" className="px-4 pb-8 sm:px-6 lg:px-8">
      <SectionReveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff6f31] via-[#f97316] to-[#c2410c] px-5 py-10 text-center shadow-2xl shadow-orange-300/70 sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <h2 className="section-title-heading max-w-3xl text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">Ready to create your own Miinii?</h2>
            <p className="section-title-text mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">
              Send your reference photos and let’s turn your favorite person, pet, or memory into a custom 3D mini figure.
            </p>
            <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.variant === "outline"
                      ? "inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-5 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20 sm:rounded-full"
                      : "inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-base font-black text-slate-950 shadow-xl transition hover:-translate-y-1 sm:rounded-full"
                  }
                >
                  <SocialIcon type={link.type} className="mr-2 h-5 w-5 shrink-0" />
                  {link.label}
                </a>
              ))}
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
      </SectionReveal>
    </SectionScrollReveal>
  );
}
