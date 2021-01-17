import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpStyleBallComponent } from './np-style-ball.component';

describe('NpStyleBallComponent', () => {
  let component: NpStyleBallComponent;
  let fixture: ComponentFixture<NpStyleBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpStyleBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpStyleBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
