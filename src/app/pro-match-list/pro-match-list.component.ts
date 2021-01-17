import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pro-match-list',
  templateUrl: './pro-match-list.component.html',
  styleUrls: ['./pro-match-list.component.scss']
})
export class ProMatchListComponent implements OnInit {
@Input() matchList;
@Output() deleteMatchEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteMatch(i) {
    this.deleteMatchEmitter.emit(i);
  }

}
