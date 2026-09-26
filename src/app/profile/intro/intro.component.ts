import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {}
