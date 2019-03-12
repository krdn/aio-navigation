import {Deserializable} from './deserializable.model';
// import { Car } from './car.model';
// import { Response } from 'selenium-webdriver/http';
import { User } from './user.model';

// interface Response {
//   id: number;
//   name: string;
// }

export class CarResponse implements Deserializable {
  status: string;
  response: User[];

  // any: CarResponse, Car, ....
  deserialize(input: any) {
    // this === CarResponse
    Object.assign(this as any, input);

    // tslint:disable-next-line:no-unused-expression
    input.response && (this.response = input.response
      .map((res: User) => new User().deserialize(res))
    );

    return this;
  }
}
