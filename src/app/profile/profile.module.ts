import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { SplitPipe } from './split.pipe';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    SplitPipe,
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
  ],
 
})
export class ProfileModule { }
