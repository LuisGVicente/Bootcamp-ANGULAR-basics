import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForAvengersComponent } from './ng-for-avengers.component';

describe('NgForAvengersComponent', () => {
  let component: NgForAvengersComponent;
  let fixture: ComponentFixture<NgForAvengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForAvengersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForAvengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
