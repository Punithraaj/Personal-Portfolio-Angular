import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionScrollService } from '../section-scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private readonly sectionScrollService: SectionScrollService) {}

  navigateToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.menuOpen = false;
    this.sectionScrollService.scrollToSection(sectionId);
  }
}
