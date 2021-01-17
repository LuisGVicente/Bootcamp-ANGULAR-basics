import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProToDoComponent } from './pro-to-do.component';

describe('ProToDoComponent', () => {
  let component: ProToDoComponent;
  let fixture: ComponentFixture<ProToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
