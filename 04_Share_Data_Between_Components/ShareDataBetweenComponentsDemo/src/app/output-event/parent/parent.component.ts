import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:
    '{{data}}<br/><app-child (dataEvent)="receiveData($event)"></app-child>',
})
export class ParentComponent implements OnInit {
  data: string = '';
  constructor() {}

  ngOnInit(): void {}
  receiveData(data: string) {
    this.data = data;
  }
}
