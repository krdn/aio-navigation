
import { Deserializable } from './deserializable.model';
import { map } from 'rxjs/operators';
// import { Car } from './car.model';

interface Car {
  brand: string;
  year: number;
}

export class User implements Deserializable {
  id: number;
  name: string;
  car: Car;

  deserialize(input: any) {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    Object.assign(this as any, input); // input -> this
    return this;
  }
}
