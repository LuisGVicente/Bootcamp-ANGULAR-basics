import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-galaxy',
  templateUrl: './pro-galaxy.component.html',
  styleUrls: ['./pro-galaxy.component.scss']
})
export class ProGalaxyComponent implements OnInit {

  galaxyList = [
    {
      name: 'Marte',
      distance: '10101000km',
      gravity: '3,711 m/s²',
      surface: '144,8 millones km²'
    },
    {
      name: 'Namek',
      distance: '10101000km',
      gravity: '3,711 m/s²',
      surface: '144,8 millones km²'
    },
    {
      name: 'De Agostini',
      distance: '10101000km',
      gravity: '3,711 m/s²',
      surface: '144,8 millones km²'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }
  deletePlanet(i) {
    this.galaxyList.splice(i,1);
  }

}
