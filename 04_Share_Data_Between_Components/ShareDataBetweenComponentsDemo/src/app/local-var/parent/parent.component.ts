import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child #child></app-child> {{child.data}}',
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
