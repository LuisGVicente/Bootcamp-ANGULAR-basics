import { Component, Input, OnInit } from '@angular/core';
interface Persona {
  name: string;
  age: number;
  role: string;
}
@Component({
  selector: 'app-ngfor-input-person',
  templateUrl: './ngfor-input-person.component.html',
  styleUrls: ['./ngfor-input-person.component.scss']
})
export class NgforInputPersonComponent implements OnInit {
@Input() personaList: Persona;
  constructor() { }

  ngOnInit(): void {
  }

}
