import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {
  @Input() srcImg: string;
  @Input() altImg: string = 'Wolverine';
  constructor() { }

  ngOnInit(): void {
  }

}
