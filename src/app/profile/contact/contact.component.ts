
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'app-contact',
    imports: [FormsModule],
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model: { name?: string; subject?: string; email?: string; message?: string } = {};
  submitError = '';
  submitSuccess = '';
  isSubmitting = false;

  constructor(private readonly profileService: ProfileService) {}

  onSubmit(form: NgForm): void {
    if (this.isSubmitting) {
      return;
    }

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.submitError = '';
    this.submitSuccess = '';
    this.isSubmitting = true;

    this.profileService.contactus({
      name: this.model.name ?? '',
      subject: this.model.subject ?? '',
      replyto: this.model.email ?? '',
      message: this.model.message ?? ''
    }).subscribe({
      next: () => {
        this.submitSuccess = 'Message sent successfully. I will get back to you soon.';
        this.model = {};
        form.resetForm();
        this.isSubmitting = false;
      },
      error: () => {
        this.submitError = 'Unable to send your message right now. Please try again shortly.';
        this.isSubmitting = false;
      }
    });
  }
}
