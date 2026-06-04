import { processSteps } from "../../data/content";
import { ProcessCard } from "../cards/ProcessCard";
import { ScrollReveal } from "../ScrollReveal";
import { SectionScrollReveal } from "../SectionScrollReveal";
import { SectionHeader } from "../SectionHeader";

export function ProcessSection() {
  return (
    <SectionScrollReveal id="process" className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="From photo to mini figure"
          text="A simple production flow that turns your favorite people and pets into handcrafted 3D keepsakes."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 90} className="h-full" style={{ "--desktop-float-delay": `${index * 140}ms` }}>
              <ProcessCard step={step} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionScrollReveal>
  );
}
