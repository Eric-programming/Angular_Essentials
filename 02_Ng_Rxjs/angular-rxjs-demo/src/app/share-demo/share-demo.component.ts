import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: false;
}
@Component({
  selector: 'app-share-demo',
  template: '<p>{{data  | json}}</p>',
})
export class ShareDemoComponent implements OnInit {
  data: ITodo[];
  constructor(private http: HttpClient) {
    const req = this.getTodos();
    this.componentOne(req);
    this.componentTwo(req);
    this.componentThree(req);
  }

  ngOnInit(): void {}
  //Component #1
  componentOne(obs: Observable<ITodo[]>) {
    obs.subscribe((res) => console.log(res));
  }
  //Component #2
  componentTwo(obs: Observable<ITodo[]>) {
    obs.subscribe((res) => (this.data = res));
  }
  //Component #3
  componentThree(obs: Observable<ITodo[]>) {
    obs.subscribe((res) => alert('Total ' + res.length + ' data'));
  }
  //Service
  getTodos(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(share());
  }
}
