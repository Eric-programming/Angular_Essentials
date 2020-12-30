import { Component, OnInit } from '@angular/core';
import { Person } from '../interface/Person';

@Component({
  selector: 'app-pipes-advanced',
  templateUrl: './pipes-advanced.component.html',
})
export class PipesAdvancedComponent implements OnInit {
  constructor() {}
  searchUser: string = '';
  people: Person[] = [
    {
      name: 'Tom',
      age: 12,
    },
    {
      name: 'Mark',
      age: 21,
    },
    {
      name: 'Rick',
      age: 33,
    },
  ];
  ngOnInit(): void {}
  times: number = 0;
  changeButtonName() {
    this.times++;
  }
  changeUsers() {
    // const newPpl: Person[] = [...this.people];
    // newPpl.push({ name: 'Steve', age: 10 });
    // this.people = newPpl;
    this.people.push({ name: 'Steve', age: 10 });
  }
}
