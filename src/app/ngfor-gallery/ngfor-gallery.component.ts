import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-gallery',
  templateUrl: './ngfor-gallery.component.html',
  styleUrls: ['./ngfor-gallery.component.scss']
})
export class NgforGalleryComponent implements OnInit {
  @Input() galleryList; 

  constructor() { }

  ngOnInit(): void {
  }

}
