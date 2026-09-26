import { Component, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NAV_ITEMS } from './portfolio-content';
import { SectionScrollService } from './section-scroll.service';

declare global {
  interface Window {
    AOS?: {
      init: (options?: Record<string, unknown>) => void;
      refreshHard?: () => void;
    };
  }
}

@Component({
    selector: 'app-profile',
    imports: [
        HeaderComponent,
        IntroComponent,
        AboutComponent,
        ExperienceComponent,
        ProjectsComponent,
        SkillsComponent,
        EducationComponent,
        ContactComponent,
        FooterComponent
    ],
    templateUrl: './profile.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit, OnDestroy {
  private readonly sectionIds = ['home', ...NAV_ITEMS.map((item) => item.id)];

  constructor(private readonly sectionScrollService: SectionScrollService) {}

  ngAfterViewInit(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.sectionScrollService.startTracking(this.sectionIds);
    this.sectionScrollService.restoreSectionFromHash(this.sectionIds);
    this.initializeAosWhenAvailable(prefersReducedMotion);
  }

  ngOnDestroy(): void {
    this.sectionScrollService.stopTracking();
  }

  private initializeAosWhenAvailable(prefersReducedMotion: boolean, attempt: number = 0): void {
    if (window.AOS) {
      window.requestAnimationFrame(() => {
        window.AOS?.init({
          once: true,
          duration: prefersReducedMotion ? 0 : 650,
          disable: prefersReducedMotion,
          easing: 'ease-out-cubic'
        });
        window.AOS?.refreshHard?.();
      });
      return;
    }

    if (attempt >= 25) {
      return;
    }

    window.setTimeout(() => this.initializeAosWhenAvailable(prefersReducedMotion, attempt + 1), 120);
  }
}
