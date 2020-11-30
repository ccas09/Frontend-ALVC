import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodistasModificarScreenComponent } from './periodistas-modificar-screen.component';

describe('PeriodistasModificarScreenComponent', () => {
  let component: PeriodistasModificarScreenComponent;
  let fixture: ComponentFixture<PeriodistasModificarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodistasModificarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodistasModificarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
