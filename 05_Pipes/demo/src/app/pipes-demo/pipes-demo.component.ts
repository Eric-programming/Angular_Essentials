import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
})
export class PipesDemoComponent implements OnInit {
  currentDate: Date = new Date(Date.now());
  isPalindromeTests: string[] = ['eye', 'qwe', '101', '@##@'];
  word: string = 'WORD';
  palindromeString: string = '';
  message$: Observable<string>;
  constructor() {
    this.word = new LowerCasePipe().transform(this.word);
  }
  send() {
    this.message$ = interval(500).pipe(map(() => 'Hello there'));
  }

  ngOnInit(): void {}
}
