import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ContactComponent } from './contact.component';
import { ProfileService } from '../profile.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let profileService: jasmine.SpyObj<ProfileService>;

  beforeEach(async () => {
    profileService = jasmine.createSpyObj<ProfileService>('ProfileService', ['contactus']);

    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [{ provide: ProfileService, useValue: profileService }]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stop invalid submissions', () => {
    const form = {
      invalid: true,
      control: { markAllAsTouched: jasmine.createSpy('markAllAsTouched') }
    } as unknown as NgForm;

    component.onSubmit(form);

    expect(form.control.markAllAsTouched).toHaveBeenCalled();
    expect(profileService.contactus).not.toHaveBeenCalled();
  });

  it('should reset the form after a successful submission', () => {
    profileService.contactus.and.returnValue(of({}));
    const form = {
      invalid: false,
      control: { markAllAsTouched: jasmine.createSpy('markAllAsTouched') },
      resetForm: jasmine.createSpy('resetForm')
    } as unknown as NgForm;
    component.model = {
      name: 'Punithraj',
      subject: 'Hello',
      email: 'punithraaj14@gmail.com',
      message: 'Checking in'
    };

    component.onSubmit(form);

    expect(profileService.contactus).toHaveBeenCalledWith({
      name: 'Punithraj',
      subject: 'Hello',
      replyto: 'punithraaj14@gmail.com',
      message: 'Checking in'
    });
    expect(component.submitSuccess).toContain('Message sent successfully');
    expect(form.resetForm).toHaveBeenCalled();
    expect(component.isSubmitting).toBeFalse();
  });

  it('should surface submission errors', () => {
    profileService.contactus.and.returnValue(throwError(() => new Error('failed')));
    const form = {
      invalid: false,
      control: { markAllAsTouched: jasmine.createSpy('markAllAsTouched') },
      resetForm: jasmine.createSpy('resetForm')
    } as unknown as NgForm;

    component.onSubmit(form);

    expect(component.submitError).toContain('Unable to send');
    expect(component.isSubmitting).toBeFalse();
  });
});
