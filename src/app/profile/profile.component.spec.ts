import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    window.AOS = {
      init: jasmine.createSpy('init'),
      refreshHard: jasmine.createSpy('refreshHard')
    };
    spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);

    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the projects section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#projects')).not.toBeNull();
  });
});
