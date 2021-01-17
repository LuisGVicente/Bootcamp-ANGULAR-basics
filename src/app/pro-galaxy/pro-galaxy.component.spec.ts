import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProGalaxyComponent } from './pro-galaxy.component';

describe('ProGalaxyComponent', () => {
  let component: ProGalaxyComponent;
  let fixture: ComponentFixture<ProGalaxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProGalaxyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
