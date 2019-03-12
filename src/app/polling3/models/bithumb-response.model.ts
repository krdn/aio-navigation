// src/app/shared/models/user.model.ts

// https://apidocs.bithumb.com/docs/ticker

// import {Car} from "./car.model";
import {Deserializable} from './deserializable.model';
// import { BitCoin } from './BitCoin';

interface Data {
  opening_price: string;
  closing_price: string;
  min_price: string;
  max_price: string;
  average_price: string;
  units_traded: string;
  volume_1day: string;
  volume_7day: string;
  buy_price: string;
  sell_price: string;
  '24H_fluctate': string;
  '24H_fluctate_rate': string;
  date: number;
}

export class BithumbResponse implements Deserializable {
  status: string;
  data: Data;

  deserialize(input: any) {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    Object.assign(this as any, input); // input -> this

    // this.Data

    // input.bitCoins && (this.bitCoins = input.bitCoins
    //   .map((bitCoin: BitCoin) => new BitCoin().deserialize(bitCoin))
    //   );

    return this;
  }
}




