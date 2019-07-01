import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UCandsComponent } from './u-cands.component';

describe('UCandsComponent', () => {
  let component: UCandsComponent;
  let fixture: ComponentFixture<UCandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UCandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UCandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
