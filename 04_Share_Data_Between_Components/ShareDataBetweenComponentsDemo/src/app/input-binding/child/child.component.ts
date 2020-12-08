import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>{{data}}</p>',
})
export class ChildComponent implements OnInit {
  @Input() data: string = 'This is Default data';
  constructor() {}

  ngOnInit(): void {}
}
