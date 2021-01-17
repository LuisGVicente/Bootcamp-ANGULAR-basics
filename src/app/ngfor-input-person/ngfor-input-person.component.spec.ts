import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforInputPersonComponent } from './ngfor-input-person.component';

describe('NgforInputPersonComponent', () => {
  let component: NgforInputPersonComponent;
  let fixture: ComponentFixture<NgforInputPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforInputPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforInputPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
