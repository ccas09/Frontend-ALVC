import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailScreenComponent } from './search-detail-screen.component';

describe('SearchDetailScreenComponent', () => {
  let component: SearchDetailScreenComponent;
  let fixture: ComponentFixture<SearchDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDetailScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
