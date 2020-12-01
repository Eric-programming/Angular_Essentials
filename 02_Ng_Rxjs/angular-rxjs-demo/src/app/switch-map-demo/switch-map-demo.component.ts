import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
interface IUser {
  id: number;
  name: string;
}
interface IComment {
  userId: number;
  content: string;
}
interface ICommentUsers {
  userId: number;
  content: string;
  name: string;
}
@Component({
  selector: 'app-switch-map-demo',
  template: '{{commentsUsers | json}}',
})
export class SwitchMapDemoComponent implements OnInit {
  commentsUsers: ICommentUsers[];
  constructor() {}

  ngOnInit(): void {
    this.getCommentUsers().subscribe((res) => (this.commentsUsers = res));
  }
  getCommentUsers(): Observable<ICommentUsers[]> {
    return this.getUser().pipe(
      switchMap((users: IUser[]) =>
        this.getComments().pipe(
          map((comments: IComment[]) =>
            comments.map((comment) => {
              const data: ICommentUsers = {
                userId: comment.userId,
                content: comment.content,
                name: users.find((user) => user.id === comment.userId).name,
              };
              return data;
            })
          )
        )
      )
    );
  }

  //Request
  getUser(): Observable<IUser[]> {
    const data = [
      {
        id: 0,
        name: 'Eric',
      },
      {
        id: 1,
        name: 'Tom',
      },
      {
        id: 2,
        name: 'Justin',
      },
    ];
    return of(data);
  }
  getComments(): Observable<IComment[]> {
    const data = [
      {
        userId: 0,
        content: 'Good',
      },
      {
        userId: 1,
        content: 'Good',
      },
      {
        userId: 2,
        content: 'Good',
      },
    ];
    return of(data);
  }
}
