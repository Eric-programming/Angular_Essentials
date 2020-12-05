import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: false;
}
@Component({
  selector: 'app-debounce-time-demo',
  template:
    '<input type="text" class="form-control" [(ngModel)]="searchTearm" [ngbTypeahead]="search"/>',
})
export class DebounceTimeDemoComponent implements OnInit {
  searchTearm: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.getTitle(term))
    );

  getTitle(title: string): Observable<string[]> {
    return this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((res) =>
          res
            .filter((e) => e.title.toLowerCase().includes(title.toLowerCase()))
            .map((e) => e.title)
        )
      );
  }
}
