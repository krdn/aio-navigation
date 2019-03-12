// Pulled all interfaces out of `navigation.service.ts` because of this:
// https://github.com/angular/angular-cli/issues/2034
// Then re-export them from `navigation.service.ts`

export interface NavigationNode {
  url?: string;       // "?": Optional Properties  꼭 필요치 안음.
  title?: string;
  tooltip?: string;
  hidden?: boolean;
  children?: NavigationNode[];
}


// intersection type으롯 선언됨 And로 선언된 두가지 모두가 포함되어야 한다.
export type NavigationResponse =
{ __versionInfo: VersionInfo } &    // Intersection Types
{ [name: string]: NavigationNode[] | VersionInfo };   // Union Types

export interface NavigationViews {
  [name: string]: NavigationNode[]; // Indexable Types
}

/**
 *  특정 URL에서 노드에 대한 탐색 정보
 *  url: the current URL
 *  view: 'SideNav' | 'TopBar' | 'Footer' | etc
 *  nodes: the current node and its ancestor nodes within that view
 *          현재의 노드와 그 뷰 내의 상위 노드
 */
export interface CurrentNode {
  url: string;
  view: string;
  nodes: NavigationNode[];
}

/**
 * A map of current nodes by view.
 * This is needed because some urls map to nodes in more than one view.
 * If a view does not contain a node that matches the current url then the value will be undefined.
 */
export interface CurrentNodes {
  [view: string]: CurrentNode;
}

export interface VersionInfo {
  raw: string;
  major: number;
  minor: number;
  patch: number;
  prerelease: string[];
  build: string;
  version: string;
  codeName: string;
  isSnapshot: boolean;
  full: string;
  branch: string;
  commitSHA: string;
}
