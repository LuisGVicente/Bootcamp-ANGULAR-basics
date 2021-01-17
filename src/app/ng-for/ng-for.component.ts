import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  avengers = ['Spiderman', 'Thor', 'Mortadelo', 'Filemon'];
  constructor() { }

  ngOnInit(): void {
  }

}
