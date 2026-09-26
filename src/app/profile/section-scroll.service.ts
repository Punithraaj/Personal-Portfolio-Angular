import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionScrollService {
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;
  private readonly activeSectionState = signal<string>('home');

  readonly activeSection = this.activeSectionState.asReadonly();

  startTracking(sectionIds: string[]): void {
    this.stopTracking();

    const sections = sectionIds
      .map((sectionId) => this.document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) {
      return;
    }

    this.activeSectionState.set(this.getInitialSection(sectionIds));

    const view = this.document.defaultView;
    if (!view || !('IntersectionObserver' in view)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio ||
              Math.abs(first.boundingClientRect.top) - Math.abs(second.boundingClientRect.top)
          )[0];

        if (activeEntry?.target instanceof HTMLElement) {
          this.activeSectionState.set(activeEntry.target.id);
        }
      },
      {
        rootMargin: '-28% 0px -52% 0px',
        threshold: [0.2, 0.35, 0.5, 0.65]
      }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  stopTracking(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  restoreSectionFromHash(sectionIds: string[]): void {
    const hashSection = this.document.defaultView?.location.hash.replace('#', '');
    if (!hashSection || !sectionIds.includes(hashSection)) {
      return;
    }

    this.document.defaultView?.requestAnimationFrame(() => {
      this.scrollToSection(hashSection, true);
    });
  }

  scrollToSection(sectionId: string, replaceHistory: boolean = false): void {
    const section = this.document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    this.activeSectionState.set(sectionId);

    const prefersReducedMotion = view.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = section.getBoundingClientRect().top + view.scrollY - this.getHeaderOffset();

    view.scrollTo({
      top: Math.max(top, 0),
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    this.updateFragment(sectionId, replaceHistory || view.location.hash === `#${sectionId}`);
  }

  private getInitialSection(sectionIds: string[]): string {
    const hashSection = this.document.defaultView?.location.hash.replace('#', '');
    if (hashSection && sectionIds.includes(hashSection)) {
      return hashSection;
    }

    return sectionIds[0] ?? 'home';
  }

  private getHeaderOffset(): number {
    const header = this.document.querySelector('.site-header');
    if (!(header instanceof HTMLElement)) {
      return 96;
    }

    return header.offsetHeight + 16;
  }

  private updateFragment(sectionId: string, replaceHistory: boolean): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    const fragmentUrl = `${view.location.pathname}${view.location.search}#${sectionId}`;
    const updateHistory = replaceHistory ? view.history.replaceState : view.history.pushState;
    updateHistory.call(view.history, null, '', fragmentUrl);
  }
}
