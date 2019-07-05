import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UMenubarComponent } from './u-menubar.component';

describe('UMenubarComponent', () => {
  let component: UMenubarComponent;
  let fixture: ComponentFixture<UMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
