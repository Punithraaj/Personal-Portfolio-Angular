import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { FooterComponent } from './footer.component';
import { SectionScrollService } from '../section-scroll.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let sectionScrollService: jasmine.SpyObj<SectionScrollService> & { activeSection: ReturnType<typeof signal<string>> };

  beforeEach(async () => {
    sectionScrollService = Object.assign(
      jasmine.createSpyObj<SectionScrollService>('SectionScrollService', ['scrollToSection']),
      { activeSection: signal('home') }
    );

    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [{ provide: SectionScrollService, useValue: sectionScrollService }]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render resume link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href*="drive.google.com"]')?.textContent).toContain('Resume');
  });
});
