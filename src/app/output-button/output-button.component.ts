import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-output-button',
  templateUrl: './output-button.component.html',
  styleUrls: ['./output-button.component.scss']
})
export class OutputButtonComponent implements OnInit {
@Output() alertMeEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  alertMe(){
    console.log('Aviso hijo');
    this.alertMeEmitter.emit();
  }

}
