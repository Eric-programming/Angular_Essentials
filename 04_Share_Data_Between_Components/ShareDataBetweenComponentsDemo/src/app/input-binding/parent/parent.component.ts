import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:
    '<app-child data="This data was passed from parent to this current child component"></app-child>',
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
