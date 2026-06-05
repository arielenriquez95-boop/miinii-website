import { HEADER_OFFSET } from "../constants/layout";

export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: sectionPosition - HEADER_OFFSET,
    behavior: "smooth",
  });
}
