import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorEspectaculosScreenComponent } from './visitor-espectaculos-screen.component';

describe('VisitorEspectaculosScreenComponent', () => {
  let component: VisitorEspectaculosScreenComponent;
  let fixture: ComponentFixture<VisitorEspectaculosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorEspectaculosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorEspectaculosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
