import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-person',
  templateUrl: './info-person.component.html',
  styleUrls: ['./info-person.component.scss']
})
export class InfoPersonComponent implements OnInit {
  // @Input() infoPerson: {name: string, age: number, role: string};
  @Input() list = [{ name: 'pepe', age: 20, role: 'fontanero'},
  { name: 'Juan', age: 15, role: 'carpintero'}];

  constructor() { }

  ngOnInit(): void {
  }

}
