import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorSubjectService {
  data = new BehaviorSubject<number>(100);
  setData(value: number) {
    this.data.next(value);
  }
}
