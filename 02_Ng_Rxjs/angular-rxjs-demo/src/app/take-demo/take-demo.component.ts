import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-take-demo',
  template: '<p>{{display | json}}</p>',
})
export class TakeDemoComponent implements OnInit {
  display: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.TakeLastNElement();
  }
  //Subscribe
  //take the first N emitted value then complete
  TakeNElements() {
    this.GetUsers()
      .pipe(take(1))
      .subscribe((e) => this.display.push(e));
  }
  //take the last N emitted value then complete
  TakeLastNElement() {
    this.GetUsers()
      .pipe(takeLast(2))
      .subscribe((e) => this.display.push(e));
  }
  //Observable
  GetUsers(): Observable<string> {
    return of('Eric', 'Tom', 'Sam');
  }
}
