
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model: { name?: string; subject?: string; email?: string; message?: string } = {};

  constructor(private readonly http: HttpClient) {}

  onSubmit(name: string, subject: string, email: string, message: string): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(
      'https://formspree.io/f/mwkwpzve',
      { name, subject, replyto: email, message },
      { headers }
    ).subscribe({
      next: () => this.model = {},
      error: (error) => console.error('Contact form submission failed', error)
    });
  }
}
