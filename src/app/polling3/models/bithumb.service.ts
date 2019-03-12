import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BithumbService {
  // polledBitcoin$: Observable<number>;
  // polledBitcoin$: Observable<BitCoin>;
  // load$ = new BehaviorSubject('');

  constructor(private http: HttpClient) {
  }

  // getBitCoin(): Observable<BitCoinResponse> {
  //   // https://www.bithumb.com/u1/US127
  //   // * {currency} = BTC, ETH, DASH, LTC, ETC, XRP, BCH, XMR, ZEC,
  //   // QTUM, BTG, EOS, ICX, VET, TRX, ELF, MITH, MCO, OMG, KNC,
  //   // GNT, ZIL, ETHOS, PAY, WAX, POWR, LRC, GTO, STEEM, STRAT,
  //   // ZRX, REP, AE, XEM, SNT, ADA, PPT, CTXC, CMT, THETA, WTC,
  //   // ITC, TRUE, ABT, RNT, PLY, WAVES, LINK, ENJ, PST, SALT, RDN,
  //   // LOOM, PIVX, INS, BCD, BZNT, XLM, OCN, BSV, TMTG, BAT, WET,
  //   // XVG, IOST, POLY, HC, ROM, AMO, ETZ, ARN, APIS, MTL, DACC,
  //   // DAC, BHP, BTT (기본값: BTC), ALL(전체)
  //   const apiUrl = 'https://api.bithumb.com/public/ticker/BTC';

  //   return this.http.get<BitCoinResponse>(apiUrl)
  //     .pipe(
  //       map(response => new BitCoinResponse().deserialize(response))
  //     );
  // }

  // getBitCoin2(): Observable<BitCoin> {
  //   const bitcoin$ = this.http.get('https://blockchain.info/ticker');

  //   const whenToRefresh$ = of('').pipe(
  //     delay(5000),
  //     tap((_) => this.load$.next('')),
  //     skip(1)
  //   );

  //   const poll$ = concat(bitcoin$, whenToRefresh$);

  //   this.polledBitcoin$ = this.load$.pipe(
  //     concatMap((_) => poll$),
  //     map((response: { KRW: { last: number } }) => response.KRW.last)
  //   );
  //   return this.polledBitcoin$;
  //   // return this.http.get('https://blockchain.info/ticker')
  //   //   .map((res: Response) => res.json().response);
  // }
}
