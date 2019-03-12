// https://blog.strongbrew.io/rxjs-polling/#polling-and-reset

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, merge, switchMap, tap, delay, skip } from 'rxjs/operators';
import { concat, of, Observable, BehaviorSubject, timer } from 'rxjs';

@Component({
  selector: 'app-polling',
  template: `
    Bitcoin price: {{ polledBitcoin$ | async }}
  `,
  styleUrls: [ './polling.component.scss' ]
})
export class PollingComponent implements OnInit {
  polledBitcoin$: Observable<number>;
  load$ = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const bitcoin$ = this.http.get('https://blockchain.info/ticker');

    const whenToRefresh$ = of('').pipe(
      delay(5000),
      tap((_) => this.load$.next('')),
      skip(1)
    );

    const poll$ = concat(bitcoin$, whenToRefresh$);

    this.polledBitcoin$ = this.load$.pipe(
      concatMap((_) => poll$),
      map((response: { KRW: { last: number } }) => response.KRW.last)
    );
  }
}
