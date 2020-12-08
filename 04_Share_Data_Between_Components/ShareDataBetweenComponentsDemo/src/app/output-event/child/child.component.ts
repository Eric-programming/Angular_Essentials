import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="sendData()">Send Data</button>',
})
export class ChildComponent {
  @Output() dataEvent = new EventEmitter<string>();
  data: string = 'This data was passed from child to parent';
  constructor() {}
  sendData() {
    this.dataEvent.emit(this.data);
  }
}
