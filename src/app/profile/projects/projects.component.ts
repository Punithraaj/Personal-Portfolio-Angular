import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECT_ITEMS } from '../portfolio-content';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projects = PROJECT_ITEMS;
}
