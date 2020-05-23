import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {
 
    model: any = {};
  
    constructor(){}
  
    ngOnInit() {
       }
}
