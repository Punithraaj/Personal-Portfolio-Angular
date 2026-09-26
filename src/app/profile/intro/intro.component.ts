import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionScrollService } from '../section-scroll.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  constructor(private readonly sectionScrollService: SectionScrollService) {}

  navigateToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.sectionScrollService.scrollToSection(sectionId);
  }
}
