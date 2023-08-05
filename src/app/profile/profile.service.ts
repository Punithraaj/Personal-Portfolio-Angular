import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})
export class ProfileService {
    constructor (private http: HttpClient) {}
cvUrl = "https://drive.google.com/file/d/1Bngz7t8l_RAtwVmtHjnPe6CIoFWK9AfY/view?usp=sharing";
fbUrl = "https://www.facebook.com/roaring.raaj/"
instaUrl = "https://www.instagram.com/roaring_raaj/"
linkedinUrl = "https://www.linkedin.com/in/roaring-raaj"
githubUrl = "https://github.com/Punithraaj"
twitterUrl = "https://twitter.com/roaringraaj"
}
