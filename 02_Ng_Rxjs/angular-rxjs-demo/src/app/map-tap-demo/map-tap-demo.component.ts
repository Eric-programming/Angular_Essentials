import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-map-tap-demo',
  template: '<p>{{User}}</p>',
})
export class MapTapDemoComponent implements OnInit {
  User: string;
  constructor() {}

  ngOnInit(): void {
    this.usingTap().subscribe((res) => (this.User = res));
  }

  private GetUser(): Observable<string> {
    return of('Eric');
  }
  //Change data before subscribe
  usingMap(): Observable<string> {
    return this.GetUser().pipe(map((x) => '@' + x));
  }
  //Can't change data before subscribe
  usingTap(): Observable<string> {
    return this.GetUser().pipe(tap((x) => '@' + x));
  }
}
