import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, take, first, find, last } from 'rxjs/operators';
import { User } from './user.model';
import { CarResponse } from './car-response.model';
import { ICar } from './ICar';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }

  // Find 메소트 사용
  getUserFind(name: string): Observable<any> {
    return this.getJSON()
      .pipe(
        map(res => res.response.find((res1: any) => res1.name === name)),
        map((user: any ) => user.car)
      );
  }

  // FIXME: 현재 작동 안함. 배열인 경우 사용할수 있는지 학습 필요.
  getUserJson(name: string): Observable<any> {
    return this.getJSON()
      .pipe(
        map((res: {response: {id: any}}) => res.response.id)
      );
  }

  getUserFilter(name: string): Observable<any> {
    return this.getJSON()
      .pipe(
         map(res => res.response
          .filter((item: any) => item.name === name)),
          map((users: any ) => users[0].car)
      );
  }


}
