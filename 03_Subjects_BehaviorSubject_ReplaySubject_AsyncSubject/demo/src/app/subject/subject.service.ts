import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  data = new Subject<number>(); // subject allows publish and subscribe.
  setData(value: number) {
    this.data.next(value);
  }
}
