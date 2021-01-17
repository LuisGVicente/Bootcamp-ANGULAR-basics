import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProGalaxyListComponent } from './pro-galaxy-list.component';

describe('ProGalaxyListComponent', () => {
  let component: ProGalaxyListComponent;
  let fixture: ComponentFixture<ProGalaxyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProGalaxyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProGalaxyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
