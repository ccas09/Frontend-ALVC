import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorHomeScreenComponent } from './visitor-home-screen.component';

describe('VisitorHomeScreenComponent', () => {
  let component: VisitorHomeScreenComponent;
  let fixture: ComponentFixture<VisitorHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
