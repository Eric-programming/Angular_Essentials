import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from './behavior-subject.service';

@Component({
  selector: 'app-behavior-subject',
  template: '<p>{{data}}</p> <button (click)="SendData()">Send Data</button>',
})
export class BehaviorSubjectComponent implements OnInit {
  constructor(private BsubjectService: BehaviorSubjectService) {}
  data: number;
  ngOnInit(): void {
    this.BsubjectService.data.next(2);
    this.BsubjectService.data.subscribe((e) => (this.data = e)); //Get the current Value
  }
  SendData() {
    this.BsubjectService.data.next(Math.random());
  }
}
