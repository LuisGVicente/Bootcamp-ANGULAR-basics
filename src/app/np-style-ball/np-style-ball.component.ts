import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-style-ball',
  templateUrl: './np-style-ball.component.html',
  styleUrls: ['./np-style-ball.component.scss']
})
export class NpStyleBallComponent implements OnInit {
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
