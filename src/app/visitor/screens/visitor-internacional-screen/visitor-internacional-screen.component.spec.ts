import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorInternacionalScreenComponent } from './visitor-internacional-screen.component';

describe('VisitorInternacionalScreenComponent', () => {
  let component: VisitorInternacionalScreenComponent;
  let fixture: ComponentFixture<VisitorInternacionalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorInternacionalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorInternacionalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
