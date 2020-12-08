import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child [data]="data"></app-child>',
})
export class ParentComponent implements OnInit {
  constructor() {}
  data: string =
    'This data was passed from parent to this current child component';
  ngOnInit(): void {}
}
