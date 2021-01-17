import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-avengers',
  templateUrl: './ng-for-avengers.component.html',
  styleUrls: ['./ng-for-avengers.component.scss']
})
export class NgForAvengersComponent implements OnInit {

  avengers: string[] = ['Spiderman','Iron Man','Hulk','Thor'];
  lista: any[] = [
    {imgUrl: 'src/assets/lobez.jpg', title: 'Lobezno I'},
    {imgUrl: 'src/assets/marvel.jpg', title: 'Logo'},
    {imgUrl: 'src/assets/redlobez.jpg', title: 'Lobezno II'},
    {imgUrl: 'src/assets/xprof.jpg', title: 'Profesor X'},
    {imgUrl: 'src/assets/z.jpg', title: 'Zombies'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
