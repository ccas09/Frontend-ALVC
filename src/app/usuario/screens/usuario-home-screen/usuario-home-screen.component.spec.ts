import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioHomeScreenComponent } from './usuario-home-screen.component';

describe('UsuarioHomeScreenComponent', () => {
  let component: UsuarioHomeScreenComponent;
  let fixture: ComponentFixture<UsuarioHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
