import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ProfileService {
  private readonly formspreeUrl = 'https://formspree.io/f/mwkwpzve';

  constructor(
    private http: HttpClient
  ) { }

  contactus(data: { name: string; subject: string; replyto: string; message: string }): Observable<unknown> {
    return this.http.post(this.formspreeUrl, data);
  }
}