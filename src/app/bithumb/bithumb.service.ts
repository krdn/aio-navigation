import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, take, first, find, last } from 'rxjs/operators';
import { BithumbData } from './bithumb.model';

@Injectable()
export class BithumbService {

  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    // https://www.bithumb.com/u1/US127
    // * {currency} = BTC, ETH, DASH, LTC, ETC, XRP, BCH, XMR, ZEC,
    // QTUM, BTG, EOS, ICX, VET, TRX, ELF, MITH, MCO, OMG, KNC,
    // GNT, ZIL, ETHOS, PAY, WAX, POWR, LRC, GTO, STEEM, STRAT,
    // ZRX, REP, AE, XEM, SNT, ADA, PPT, CTXC, CMT, THETA, WTC,
    // ITC, TRUE, ABT, RNT, PLY, WAVES, LINK, ENJ, PST, SALT, RDN,
    // LOOM, PIVX, INS, BCD, BZNT, XLM, OCN, BSV, TMTG, BAT, WET,
    // XVG, IOST, POLY, HC, ROM, AMO, ETZ, ARN, APIS, MTL, DACC,
    // DAC, BHP, BTT (기본값: BTC), ALL(전체)
    const apiUrl = 'https://api.bithumb.com/public/ticker/BTC';
    return this.http.get(apiUrl);
  }

  // Find 메소트 사용
  getBithumb(): Observable<BithumbData> {
    return this.getJSON()
      .pipe(
        map(res => res.data)
      );
  }

  //
  getBithumbJson(): Observable<any> {
    return this.getJSON()
      .pipe(
        map((res: {data: BithumbData}) => res.data)
      );
  }

}
