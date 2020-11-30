import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodistaHomeScreenComponent } from './periodista-home-screen.component';

describe('PeriodistaHomeScreenComponent', () => {
  let component: PeriodistaHomeScreenComponent;
  let fixture: ComponentFixture<PeriodistaHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodistaHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodistaHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
