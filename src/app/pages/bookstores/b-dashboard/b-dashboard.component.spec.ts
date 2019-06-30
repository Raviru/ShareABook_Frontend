import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BDashboardComponent } from './b-dashboard.component';

describe('BDashboardComponent', () => {
  let component: BDashboardComponent;
  let fixture: ComponentFixture<BDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
