import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SectionScrollService } from '../section-scroll.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let sectionScrollService: jasmine.SpyObj<SectionScrollService> & { activeSection: ReturnType<typeof signal<string>> };

  beforeEach(async () => {
    sectionScrollService = Object.assign(
      jasmine.createSpyObj<SectionScrollService>('SectionScrollService', ['scrollToSection']),
      { activeSection: signal('projects') }
    );

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{ provide: SectionScrollService, useValue: sectionScrollService }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the menu after navigating to a section', () => {
    component.menuOpen = true;

    component.navigateToSection(new Event('click'), 'projects');

    expect(component.menuOpen).toBeFalse();
    expect(sectionScrollService.scrollToSection).toHaveBeenCalledWith('projects');
  });

  it('should mark the active section link', () => {
    const activeLink = fixture.nativeElement.querySelector('a[aria-current="location"]') as HTMLAnchorElement;
    expect(activeLink.textContent?.trim()).toBe('Projects');
  });
});
