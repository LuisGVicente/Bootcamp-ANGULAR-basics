import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  fruit1: string = 'Banana';
  fruit2: string = 'Orange';
  fruit3: string = 'Strawberry';
  constructor() { }

  ngOnInit(): void {
  }

}
