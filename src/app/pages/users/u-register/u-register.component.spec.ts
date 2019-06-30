import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { URegisterComponent } from './u-register.component';

describe('URegisterComponent', () => {
  let component: URegisterComponent;
  let fixture: ComponentFixture<URegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ URegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(URegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
