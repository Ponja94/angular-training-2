import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.changeNumber.emit()
  }
}
