import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
about1: any
about2: any
about3: any
about4: any

constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.about1 =  this.profileService.about
    this.about2 =  this.profileService.about2
    this.about3 =  this.profileService.about3
    this.about4 =  this.profileService.about4
  }


}
