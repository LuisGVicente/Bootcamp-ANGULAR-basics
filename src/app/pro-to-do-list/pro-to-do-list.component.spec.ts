import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProToDoListComponent } from './pro-to-do-list.component';

describe('ProToDoListComponent', () => {
  let component: ProToDoListComponent;
  let fixture: ComponentFixture<ProToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProToDoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
