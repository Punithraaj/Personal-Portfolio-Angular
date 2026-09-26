import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ProfileService {
  private readonly formspreeUrl = 'https://formspree.io/f/mwkwpzve';

  constructor(
    private http: HttpClient
  ) { }

  contactus(data: { name: string; subject: string; replyto: string; message: string }): Observable<unknown> {
    return this.http.post(this.formspreeUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    });
  }
}