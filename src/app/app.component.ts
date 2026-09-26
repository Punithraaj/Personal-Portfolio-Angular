import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
    selector: 'app-root',
    imports: [ProfileComponent],
    template: '<app-profile></app-profile>',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Personal-Portfolio-Angular';
}
