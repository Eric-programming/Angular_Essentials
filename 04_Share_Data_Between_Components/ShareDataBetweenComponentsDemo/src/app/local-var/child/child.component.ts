import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '',
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: string = 'This data was from child component';
  data2: string = 'hello';
}
