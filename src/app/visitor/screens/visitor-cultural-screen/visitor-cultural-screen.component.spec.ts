import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorCulturalScreenComponent } from './visitor-cultural-screen.component';

describe('VisitorCulturalScreenComponent', () => {
  let component: VisitorCulturalScreenComponent;
  let fixture: ComponentFixture<VisitorCulturalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorCulturalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorCulturalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
