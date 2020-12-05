import { Component, OnInit } from '@angular/core';
import { concat, Observable, of } from 'rxjs';

@Component({
  selector: 'app-concat-demo',
  template: '<p>{{content | json}}</p>',
})
export class ConcatDemoComponent implements OnInit {
  content: string[] = [];
  constructor() {}

  ngOnInit(): void {
    concat(this.getLetters(), this.getNumbers()).subscribe((e) => {
      this.content.push(...e);
    });
  }
  //Observables
  getNumbers(): Observable<string[]> {
    return of(['one', 'two', 'three']);
  }
  getLetters(): Observable<string[]> {
    return of(['A', 'B', 'C']);
  }
}
