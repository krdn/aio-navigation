import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {interval} from 'rxjs/internal/observable/interval';
import { startWith, switchMap, map } from 'rxjs/operators';
// import { Car,  } from './car.model';
import { Observable } from 'rxjs';
import { ICar } from './ICar';

@Component({
  selector: 'app-user-car',
  // templateUrl: './user-car.component.html',
  template: `
    내차는 : {{ carInfo }}
`,
  styleUrls: ['./user-car.component.scss']
})
export class UserCarComponent implements OnInit {

  carInfo: string;

  constructor(private userService: UserService) {

  }

  ngOnInit() {

    const user$ = this.userService.getUserFind('John');
    // const user$ = this.userService.getUserFilter('John');

    user$.subscribe((res: ICar) => {
      this.carInfo = res.brand + '(' + res.year + ')';
      console.log(res);
      }
    );

  }

}
