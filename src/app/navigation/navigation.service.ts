import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { combineLatest, ConnectableObservable, Observable } from 'rxjs';
import { map, publish, publishLast, publishReplay } from 'rxjs/operators';

// Import and re-export the Navigation model types
import { CurrentNodes, NavigationNode, NavigationResponse, NavigationViews, VersionInfo } from './navigation.model';
export { CurrentNodes, CurrentNode, NavigationNode, NavigationResponse, NavigationViews, VersionInfo } from './navigation.model';

export const navigationPath = 'generated/navigation.json';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  /**
   * 네비게이션 메뉴를 렌더링하는 데 사용할 수있는 관찰 가능한 네비게이션 트리 컬렉션
   */
  navigationViews: Observable<NavigationViews>; // Service에서 Observable로 정의 하면 subscribe 데이터를 받아 볼수 있게된다.

  /**
   * 실행중인 doc-app의 현재 버전
   */
  versionInfo: Observable<VersionInfo>;

  currentNodes: Observable<CurrentNodes>;

  constructor(
    private http: HttpClient
  ) {
    const navigationInfo = this.fetchNavigationInfo();
    this.navigationViews = this.getNavigationViews(navigationInfo);


    // The version information is packaged inside the navigation response to save us an extra request.
    this.versionInfo = this.getVersionInfo(navigationInfo);
  }

  // navigation.json 파일을 읽어들인다.
  private fetchNavigationInfo(): Observable<NavigationResponse> {
    const navigationInfo = this.http.get<NavigationResponse>(navigationPath)
      .pipe(publishLast());   // 마지막 Stream만 전달된다.
    (navigationInfo as ConnectableObservable<NavigationResponse>).connect();
    return navigationInfo;
  }


  private getVersionInfo(navigationInfo: Observable<NavigationResponse>) {
    // navigation.json에 __versionInfo에 저장되어 있음
    const versionInfo = navigationInfo.pipe(
      map(response => response.__versionInfo),
      publish(),
    );
    (versionInfo as ConnectableObservable<VersionInfo>).connect();
    return versionInfo;
  }

  private getNavigationViews(navigationInfo: Observable<NavigationResponse>): Observable<NavigationViews> {
    const navigationViews = navigationInfo.pipe(
      map(response => {
        const views = Object.assign({}, response);
        Object.keys(views).forEach(key => {
          if (key[0] === '_') { delete views[key]; }
        });
        return views as NavigationViews;
      }),
      publishLast(),
    );
    (navigationViews as ConnectableObservable<NavigationViews>).connect();
    return navigationViews;
  }

  /**
   * Get an observable of the current nodes (the ones that match the current URL)
   * We use `publishReplay(1)` because otherwise subscribers will have to wait until the next
   * URL change before they receive an emission.
   * See above for discussion of using `connect`.
   */
  // private getCurrentNodes(navigationViews: Observable<NavigationViews>): Observable<CurrentNodes> {
  //   const currentNodes = combineLatest(
  //     navigationViews.pipe(map(views => this.computeUrlToNavNodesMap(views))),
  //     this.location.currentPath,

  //     (navMap, url) => {
  //       const matchSpecialUrls = /^api/.exec(url);
  //       if (matchSpecialUrls) {
  //         url = matchSpecialUrls[0];
  //       }
  //       return navMap.get(url) || { '' : { view: '', url: url, nodes: [] }};
  //     })
  //     .pipe(publishReplay(1));
  //   (currentNodes as ConnectableObservable<CurrentNodes>).connect();
  //   return currentNodes;
  // }

  /**
   * Compute a mapping from URL to an array of nodes, where the first node in the array
   * is the one that matches the URL and the rest are the ancestors of that node.
   *
   * @param navigation - A collection of navigation nodes that are to be mapped
   */
  private computeUrlToNavNodesMap(navigation: NavigationViews) {
    const navMap = new Map<string, CurrentNodes>();
    Object.keys(navigation)
      .forEach(view => navigation[view]
        .forEach(node => this.walkNodes(view, navMap, node)));
    return navMap;
  }

  /**
   * Add tooltip to node if it doesn't have one and have title.
   * If don't want tooltip, specify `"tooltip": ""` in navigation.json
   */
  private ensureHasTooltip(node: NavigationNode) {
    const title = node.title;
    const tooltip = node.tooltip;
    if (tooltip == null && title) {
      // add period if no trailing punctuation
      node.tooltip = title + (/[a-zA-Z0-9]$/.test(title) ? '.' : '');
    }
  }
  /**
   * Walk the nodes of a navigation tree-view,
   * patching them and computing their ancestor nodes
   */
  private walkNodes(
    view: string, navMap: Map<string, CurrentNodes>,
    node: NavigationNode, ancestors: NavigationNode[] = []) {
    const nodes = [node, ...ancestors];
    const url = node.url;
    this.ensureHasTooltip(node);

    // only map to this node if it has a url
    if (url) {
      // Strip off trailing slashes from nodes in the navMap - they are not relevant to matching
      const cleanedUrl = url.replace(/\/$/, '');
      if (!navMap.has(cleanedUrl)) {
        navMap.set(cleanedUrl, {});
      }
      const navMapItem = navMap.get(cleanedUrl)!;
      navMapItem[view] = { url, view, nodes };
    }

    if (node.children) {
      node.children.forEach(child => this.walkNodes(view, navMap, child, nodes));
    }
  }
}
