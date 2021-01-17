import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pro-match-form',
  templateUrl: './pro-match-form.component.html',
  styleUrls: ['./pro-match-form.component.scss']
})
export class ProMatchFormComponent implements OnInit {
newTeam1: string;
newTeam2: string;
newScore: string;
@Output() sendMatchEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  sendMatch(){
    this.sendMatchEmitter.emit({ team1: this.newTeam1, team2: this.newTeam2, finalScore: this.newScore});
    this.newTeam1 = '';
    this.newTeam2 = '';
    this.newScore = '';
   
  }

}
