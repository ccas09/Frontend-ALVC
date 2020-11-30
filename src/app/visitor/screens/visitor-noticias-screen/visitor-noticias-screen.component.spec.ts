import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorNoticiasScreenComponent } from './visitor-noticias-screen.component';

describe('VisitorNoticiasScreenComponent', () => {
  let component: VisitorNoticiasScreenComponent;
  let fixture: ComponentFixture<VisitorNoticiasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorNoticiasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorNoticiasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
