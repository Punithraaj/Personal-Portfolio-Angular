import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ProfileService {
    baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  contactus(data: any): Observable<any> {
    return this.http.post('http://localhost:4200/contact',data);
  }
  }