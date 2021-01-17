import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-securata',
  templateUrl: './securata.component.html',
  styleUrls: ['./securata.component.scss']
})
export class SecurataComponent implements OnInit {
  @Input() age: number= 16;
  constructor() { }

  ngOnInit(): void {
  }

}
