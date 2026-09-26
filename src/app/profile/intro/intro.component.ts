import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  navigateToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }
}
