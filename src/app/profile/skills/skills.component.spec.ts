import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render each skill group', () => {
    const cards = fixture.nativeElement.querySelectorAll('.skill-card');
    expect(cards.length).toBe(component.skillGroups.length);
    expect(fixture.nativeElement.textContent).toContain('Backend');
    expect(fixture.nativeElement.textContent).toContain('Java');
  });
});
