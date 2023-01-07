import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  cvUrl: any
  constructor(private profileService:ProfileService) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl
  }

}
