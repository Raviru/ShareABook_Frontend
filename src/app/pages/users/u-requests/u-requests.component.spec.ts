import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { URequestsComponent } from './u-requests.component';

describe('URequestsComponent', () => {
  let component: URequestsComponent;
  let fixture: ComponentFixture<URequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ URequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(URequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
