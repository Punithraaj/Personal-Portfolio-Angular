import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EXPERIENCE_ITEMS } from '../portfolio-content';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  readonly experienceItems = EXPERIENCE_ITEMS;
}
