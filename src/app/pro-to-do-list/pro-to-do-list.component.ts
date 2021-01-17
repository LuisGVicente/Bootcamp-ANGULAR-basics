import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-to-do-list',
  templateUrl: './pro-to-do-list.component.html',
  styleUrls: ['./pro-to-do-list.component.scss']
})
export class ProToDoListComponent implements OnInit {
@Input() toDoList: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
