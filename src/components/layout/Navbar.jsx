import { navSections } from "../../data/content";
import { scrollToSection } from "../../utils/scroll";

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <button type="button" onClick={() => scrollToSection("home")} className="flex items-center gap-2" aria-label="Go to Miinii home section">
          <img src="/miinii-logo.png" alt="Miinii Logo" className="h-12 w-auto object-contain sm:h-10" />
        </button>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          {navSections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className="capitalize transition hover:text-[#ff6f31]"
            >
              {section.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="rounded-full bg-slate-950 px-5 py-3 text-base font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#ff6f31] sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Order Now
        </button>
      </div>
    </nav>
  );
}
