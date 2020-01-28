
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentData;
@Output() childEvent = new EventEmitter();

fireEvent($){
  this.childEvent.emit('Hello World');
}
  constructor() { }

  ngOnInit() {
  }

}
