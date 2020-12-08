import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '',
})
export class ChildComponent implements OnInit {
  childData: string = 'This data was passed from child to parent';
  constructor() {}

  ngOnInit(): void {}
}
