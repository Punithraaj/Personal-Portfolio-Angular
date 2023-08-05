import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit{
  cvUrl: any;
  fbUrl: any;
  instaUrl: any;
  linkedinUrl: any;
  githubUrl: any;
  twitterUrl: any;

  constructor(private profileService:ProfileService) {}
  ngOnInit(): void {
    this.cvUrl = this.profileService.cvUrl
    this.fbUrl = this.profileService.fbUrl
    this.instaUrl = this.profileService.instaUrl,
    this.linkedinUrl = this.profileService.linkedinUrl
    this.githubUrl = this.profileService.githubUrl
    this.twitterUrl = this.profileService.twitterUrl 
  }

}
