import { Component, OnInit } from '@angular/core';
import { AsyncSubjectService } from './async-subject.service';

@Component({
  selector: 'app-async-subject',
  template: '{{data}}',
})
export class AsyncSubjectComponent implements OnInit {
  data: number;
  constructor(private ASubjectService: AsyncSubjectService) {}

  ngOnInit(): void {
    this.ASubjectService.data.next(12);
    this.ASubjectService.data.subscribe((e) => (this.data = e));
    this.ASubjectService.data.next(0);
    this.ASubjectService.data.next(1);
    this.ASubjectService.data.next(3); //Last value will be sent to its subs
    this.ASubjectService.data.complete();
  }
}
