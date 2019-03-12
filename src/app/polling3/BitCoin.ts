import { Deserializable } from './models/deserializable.model';
import { CoinValue } from './CoinValue';

export class BitCoin implements Deserializable {
  contry: string;
  value: CoinValue;

  deserialize(input: any) {
    Object.assign(this as any, input);

    return this;
  }
}
