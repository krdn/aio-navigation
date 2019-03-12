import { Deserializable } from './models/deserializable.model';
export class CoinValue implements Deserializable {
  m15: number; // FIXME: 15m이 실제 이름 Object.assign에서 오류발생 가능함.
  last: string;
  buy: number;
  sell: number;
  symbol: string;

  deserialize(input: any) {
    Object.assign(this as any, input);
    return this;
  }
}
