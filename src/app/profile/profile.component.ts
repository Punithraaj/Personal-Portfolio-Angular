import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

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
        SkillsComponent,
        EducationComponent,
        ContactComponent,
        FooterComponent
    ],
    templateUrl: './profile.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !window.AOS) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.AOS?.init({
        once: true,
        duration: 650,
        easing: 'ease-out-cubic'
      });
      window.AOS?.refreshHard?.();
    });
  }
}
