import { ScrollReveal } from "./ScrollReveal";

export function SectionHeader({ eyebrow, title, text, dark = false }) {
  const headingColor = dark ? "text-white" : "text-slate-950";
  const textColor = dark ? "text-slate-300" : "text-slate-600";

  return (
    <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="section-title-eyebrow mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#16C1C1]">{eyebrow}</p>
      <h2 className={`section-title-heading text-4xl font-black tracking-tight md:text-5xl ${headingColor}`}>{title}</h2>
      <p className={`section-title-text mt-4 text-lg leading-8 ${textColor}`}>{text}</p>
    </ScrollReveal>
  );
}
