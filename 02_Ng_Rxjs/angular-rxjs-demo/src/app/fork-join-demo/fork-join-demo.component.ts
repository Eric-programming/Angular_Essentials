import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Component({
  selector: 'app-fork-join-demo',
  template: '<p>{{data | json}}</p>',
})
export class ForkJoinDemoComponent implements OnInit {
  data: string[] = [];
  constructor() {
    forkJoin([this.getNumbers(), this.getLetters()]).subscribe((AllArr) => {
      AllArr.forEach((e) => {
        this.data.push(...e);
      });
    });
  }

  ngOnInit(): void {}
  //Observables
  getNumbers(): Observable<string[]> {
    return of(['one', 'two', 'three']);
  }
  getLetters(): Observable<string[]> {
    return of(['A', 'B', 'C']);
  }
}
