import { Component, OnInit } from '@angular/core';
import { ReplaySubjectService } from './replay-subject.service';

@Component({
  selector: 'app-replay-subject',
  template: '{{data | json}}',
})
export class ReplaySubjectComponent implements OnInit {
  constructor(private RSubjectService: ReplaySubjectService) {
    this.RSubjectService.data.next(500);
    this.RSubjectService.data.next(50);
    this.RSubjectService.data.next(5);
    this.RSubjectService.data.subscribe((e) => this.data.push(e));
  }
  data: number[] = [];

  ngOnInit(): void {}
}
