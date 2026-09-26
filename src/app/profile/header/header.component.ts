import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { NAV_ITEMS } from '../portfolio-content';
import { SectionScrollService } from '../section-scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly navigationItems = NAV_ITEMS;
  readonly activeSection = this.sectionScrollService.activeSection;

  menuOpen = false;

  constructor(private readonly sectionScrollService: SectionScrollService) {}

  navigateToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.menuOpen = false;
    this.sectionScrollService.scrollToSection(sectionId);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen = false;
  }
}
