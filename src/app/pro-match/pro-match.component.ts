import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-match',
  templateUrl: './pro-match.component.html',
  styleUrls: ['./pro-match.component.scss']
})
export class ProMatchComponent implements OnInit {
 matchList = [
  {
    team1: 'G2',
    team2: 'Danwon',
    finalScore: '3-1'
  },
  {
    team1: 'Fnatic',
    team2: 'Sunning',
    finalScore: '2-3'
  },
  {
    team1: 'FPX',
    team2: 'G2',
    finalScore: '3-0'
  },
  {
    team1: 'Mad Lions',
    team2: 'Vodafone Giants',
    finalScore: '3-1'
  },
 ];
  constructor() { }

  ngOnInit(): void {
  }
  deleted($event){
    console.log($event);
    this.matchList.splice($event,1);
  }
  addMatch($event){
    this.matchList.push($event);
   
  }

}
