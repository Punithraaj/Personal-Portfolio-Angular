import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EDUCATION_ITEMS } from '../portfolio-content';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  readonly educationItems = EDUCATION_ITEMS;
}
