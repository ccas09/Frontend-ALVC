import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News2CardComponent } from './news2-card.component';

describe('News2CardComponent', () => {
  let component: News2CardComponent;
  let fixture: ComponentFixture<News2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News2CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(News2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
