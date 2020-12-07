import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  template: '<p>{{data}}</p> <button (click)="SendData()">Send Data</button>',
})
export class SubjectComponent implements OnInit {
  constructor(private subjectService: SubjectService) {}
  data: number;
  ngOnInit(): void {
    this.subjectService.data.next(2);
    this.subjectService.data.subscribe((e) => (this.data = e)); //Doesn't get the current Value
  }
  SendData() {
    this.subjectService.data.next(Math.random());
  }
}
