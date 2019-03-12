// src/app/shared/models/user.model.ts

// import {Car} from "./car.model";
import {Deserializable} from './models/deserializable.model';
import { BitCoin } from './BitCoin';

interface BitCoinMetadata {
  m15: number;  // FIXME: 15m이 실제 이름 Object.assign에서 오류발생 가능함.
  last: string;
  buy: number;
  sell: number;
  symbol: string;
}

export class BitCoinResponse implements Deserializable {
  bitCoins: BitCoin[];
  bitCoinMetadata: BitCoinMetadata;

  deserialize(input: any) {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    Object.assign(this as any, input); // input -> this

    input.bitCoins && (this.bitCoins = input.bitCoins
      .map((bitCoin: BitCoin) => new BitCoin().deserialize(bitCoin))
      );

    return this;
  }
}




