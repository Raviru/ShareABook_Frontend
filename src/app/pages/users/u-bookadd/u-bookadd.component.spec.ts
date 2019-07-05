import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UBookaddComponent } from './u-bookadd.component';

describe('UBookaddComponent', () => {
  let component: UBookaddComponent;
  let fixture: ComponentFixture<UBookaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UBookaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UBookaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
