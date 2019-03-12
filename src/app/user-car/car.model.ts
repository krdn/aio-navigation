import {Deserializable} from './deserializable.model';

export class Car1 implements Deserializable {
  brand: string;
  year: number;

  deserialize(input: any) {
    Object.assign(this as any, input);
    return this;
  }
}

interface ICar {
  brand: string;
  year: number;
}
