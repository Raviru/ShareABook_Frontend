import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UCatalogueComponent } from './u-catalogue.component';

describe('UCatalogueComponent', () => {
  let component: UCatalogueComponent;
  let fixture: ComponentFixture<UCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
