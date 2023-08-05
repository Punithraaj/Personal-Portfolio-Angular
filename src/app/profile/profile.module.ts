import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SplitPipe } from './split.pipe';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    ProfileComponent,
    SplitPipe,
    HeaderComponent,
    IntroComponent,
  ],
 
})
export class ProfileModule { }
