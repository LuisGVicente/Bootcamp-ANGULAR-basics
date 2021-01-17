import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-to-do',
  templateUrl: './pro-to-do.component.html',
  styleUrls: ['./pro-to-do.component.scss']
})
export class ProToDoComponent implements OnInit {

toDoList = ['Pasear Elvis', 'Hablar con Wen', 'Aniquilar a la especie humana'];
  constructor() { }

  ngOnInit(): void {
  }
  addNewTask(newTask){
    this.toDoList.push(newTask);
  }

}
