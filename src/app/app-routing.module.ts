import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
