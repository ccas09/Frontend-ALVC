import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodistaEliminarScreenComponent } from './periodista-eliminar-screen.component';

describe('PeriodistaEliminarScreenComponent', () => {
  let component: PeriodistaEliminarScreenComponent;
  let fixture: ComponentFixture<PeriodistaEliminarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodistaEliminarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodistaEliminarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
