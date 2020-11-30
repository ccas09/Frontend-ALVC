import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodistasComponent } from './periodistas.component';

describe('PeriodistasComponent', () => {
  let component: PeriodistasComponent;
  let fixture: ComponentFixture<PeriodistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
