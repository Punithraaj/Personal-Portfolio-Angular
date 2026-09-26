import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ABOUT_PARAGRAPHS, PROFILE } from '../portfolio-content';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  readonly aboutParagraphs = ABOUT_PARAGRAPHS;
  readonly profile = PROFILE;
}
