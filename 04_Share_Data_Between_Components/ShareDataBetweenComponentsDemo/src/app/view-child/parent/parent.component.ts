import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template:
    '<button (click)="GetData()">Click</button><br/><app-child></app-child><p>{{data}}</p>',
})
export class ParentComponent {
  data: string = '';
  @ViewChild(ChildComponent) child: ChildComponent;
  constructor() {}

  GetData(): void {
    this.data = this.child.childData;
  }
}
