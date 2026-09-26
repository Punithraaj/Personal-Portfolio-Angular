import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent],
  template: '<app-profile></app-profile>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Personal-Portfolio-Angular';
}
