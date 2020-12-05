import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
interface User {
  name: string;
  id: number;
}
interface Review {
  ratings: number;
  userId: number;
}
interface MergeUserReview {
  user: User;
  reviews: Review[];
}
@Component({
  selector: 'app-merge-map-demo',
  template: '<p>{{data | json}}</p>',
})
export class MergeMapDemoComponent implements OnInit {
  data: MergeUserReview;
  constructor() {}

  ngOnInit(): void {
    this.MergeObservable().subscribe((e) => (this.data = e));
  }
  //Combine Two Observables into one
  MergeObservable(): Observable<MergeUserReview> {
    return this.ObservableNo1(1).pipe(
      mergeMap((user) =>
        this.ObservableNo2(user.id).pipe(
          map((reviews) => {
            return {
              user,
              reviews,
            };
          })
        )
      )
    );
  }

  //Observables
  ObservableNo1(userId: number): Observable<User> {
    const ListOfUsers: User[] = [
      { name: 'Eric', id: 1 },
      { name: 'Tom', id: 2 },
    ];
    return of(ListOfUsers.find((x) => x.id == userId));
  }
  ObservableNo2(userId: number): Observable<Review[]> {
    const listOfReviews: Review[] = [
      {
        ratings: 1,
        userId: 1,
      },
      {
        ratings: 2,
        userId: 2,
      },
    ];
    return of(listOfReviews.filter((x) => x.userId == userId));
  }
}
