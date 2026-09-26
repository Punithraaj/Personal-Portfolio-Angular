import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { IntroComponent } from './intro.component';
import { SectionScrollService } from '../section-scroll.service';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;
  let sectionScrollService: jasmine.SpyObj<SectionScrollService> & { activeSection: ReturnType<typeof signal<string>> };

  beforeEach(async () => {
    sectionScrollService = Object.assign(
      jasmine.createSpyObj<SectionScrollService>('SectionScrollService', ['scrollToSection']),
      { activeSection: signal('home') }
    );

    await TestBed.configureTestingModule({
      imports: [IntroComponent],
      providers: [{ provide: SectionScrollService, useValue: sectionScrollService }]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render resume and contact calls to action', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('.hero-actions a');
    expect(buttons.length).toBe(2);
    expect(compiled.textContent).toContain('Contact me');
    expect(compiled.textContent).toContain('View resume');
  });
});
