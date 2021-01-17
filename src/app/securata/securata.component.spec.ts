import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurataComponent } from './securata.component';

describe('SecurataComponent', () => {
  let component: SecurataComponent;
  let fixture: ComponentFixture<SecurataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
