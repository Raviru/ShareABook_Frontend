import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UOrdersComponent } from './u-orders.component';

describe('UOrdersComponent', () => {
  let component: UOrdersComponent;
  let fixture: ComponentFixture<UOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
