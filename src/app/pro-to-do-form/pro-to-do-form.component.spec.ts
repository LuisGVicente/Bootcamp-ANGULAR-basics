import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProToDoFormComponent } from './pro-to-do-form.component';

describe('ProToDoFormComponent', () => {
  let component: ProToDoFormComponent;
  let fixture: ComponentFixture<ProToDoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProToDoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProToDoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
