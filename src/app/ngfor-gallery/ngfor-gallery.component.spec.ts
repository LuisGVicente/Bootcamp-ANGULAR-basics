import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforGalleryComponent } from './ngfor-gallery.component';

describe('NgforGalleryComponent', () => {
  let component: NgforGalleryComponent;
  let fixture: ComponentFixture<NgforGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
