import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSaludScreenComponent } from './visitor-salud-screen.component';

describe('VisitorSaludScreenComponent', () => {
  let component: VisitorSaludScreenComponent;
  let fixture: ComponentFixture<VisitorSaludScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorSaludScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSaludScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
