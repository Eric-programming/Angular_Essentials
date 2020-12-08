import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectInServiceService {
  private dataSource = new BehaviorSubject<string>('Default Data');
  currentData = this.dataSource.asObservable();
  constructor() {}
  updateData(data: string) {
    this.dataSource.next(data);
  }
}
