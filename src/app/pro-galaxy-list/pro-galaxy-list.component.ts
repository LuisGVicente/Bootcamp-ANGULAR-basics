import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pro-galaxy-list',
  templateUrl: './pro-galaxy-list.component.html',
  styleUrls: ['./pro-galaxy-list.component.scss']
})
export class ProGalaxyListComponent implements OnInit {
@Input() galaxyList;
@Output() selectPlanetEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectPlanet(i){
    this.selectPlanetEmitter.emit(i);
  }

}
