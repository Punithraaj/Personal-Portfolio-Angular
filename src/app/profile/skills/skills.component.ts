import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SKILL_GROUPS } from '../portfolio-content';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  readonly skillGroups = SKILL_GROUPS;
}
