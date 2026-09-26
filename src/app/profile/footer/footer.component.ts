import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { PROFILE } from '../portfolio-content';
import { SectionScrollService } from '../section-scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();

  showBackToTop = false;

  constructor(private readonly sectionScrollService: SectionScrollService) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = window.scrollY > 480;
  }

  scrollToTop(): void {
    this.sectionScrollService.scrollToSection('home');
  }
}
