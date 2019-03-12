import { Component, OnInit } from '@angular/core';

import { BitCoinService } from './polling3/bit-coin.service';
import { BitCoin } from './polling3/BitCoin';

import {interval} from 'rxjs/internal/observable/interval';
import {startWith, switchMap} from 'rxjs/operators';

import { CurrentNodes, NavigationService, NavigationNode, VersionInfo } from './navigation/navigation.service';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bitCoins: BitCoin[];

  sideNavNodes: NavigationNode[];
  footerNodes: NavigationNode[];

  title = 'aio-navigation';

  versionInfo: VersionInfo;

  constructor(
    private navigationService: NavigationService,
    private bitCoinServe: BitCoinService) {
  }

  ngOnInit() {
    //statuses: BitCoin[];

    // this.navigationService.currentNodes.subscribe(currentNodes => this.currentNodes = currentNodes);

    // 구독(subscribe) 설정
    this.navigationService.navigationViews.subscribe(views => {
      this.footerNodes = views.Footer || [];
      this.sideNavNodes = views.SideNav || [];
      // this.topMenuNodes = views['TopBar']  || [];
      // this.topMenuNarrowNodes = views['TopBarNarrow'] || this.topMenuNodes;
    });

    this.navigationService.versionInfo.subscribe(
      vi => this.versionInfo = vi
    );

    console.log(this.footerNodes);




  //   interval(5000)
  //   .pipe(
  //     startWith(0),
  //     switchMap(() => this.bitCoinServe.getBitCoin())
  //   )
  //   .subscribe(res => {
  //     console.log('Tweets updated');
  //     // this.statuses = res.buy;
  //     // console.log(res.buy );
  //     this.bitCoins = res.bitCoins;
  //   })
  // ;


  }
}
