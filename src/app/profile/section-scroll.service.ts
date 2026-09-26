import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionScrollService {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    const fragmentUrl = `${window.location.pathname}${window.location.search}#${sectionId}`;
    if (window.location.hash === `#${sectionId}`) {
      window.history.replaceState(null, '', fragmentUrl);
      return;
    }

    window.history.pushState(null, '', fragmentUrl);
  }
}
