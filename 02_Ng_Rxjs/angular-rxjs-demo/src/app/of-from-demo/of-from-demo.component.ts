import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
class Animal {
  name: string;
}
@Component({
  selector: 'app-of-from-demo',
  template: '<p>{{name}}</p>',
})
export class OfFromDemoComponent implements OnInit {
  private bird: Observable<Animal>;
  name: string;
  constructor() {}

  ngOnInit(): void {
    const bird = new Animal();
    bird.name = 'bird';
    this.getBirdUsingFrom(bird);
  }
  //Of can turn a varible into a observable
  getBirdUsingOf(bird: Animal): void {
    this.bird = of(bird);
    this.bird.subscribe((res) => (this.name = res.name + ' from a varible'));
  }

  //From can turn a promise into a observable
  getBirdUsingFrom(bird: Animal): void {
    const birdPromise: Promise<Animal> = Promise.resolve(bird);
    this.bird = from(birdPromise);
    this.bird.subscribe((res) => (this.name = res.name + ' from promise'));
  }
}
