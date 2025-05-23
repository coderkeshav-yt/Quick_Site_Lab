declare module 'react-router-dom' {
  import * as React from 'react';

  // Route props
  interface RouteProps {
    path?: string;
    exact?: boolean;
    component?: React.ComponentType<any>;
    render?: (props: any) => React.ReactNode;
    children?: React.ReactNode | ((props: any) => React.ReactNode);
  }

  // Route component
  export class Route extends React.Component<RouteProps> {}

  // Router props
  interface RouterProps {
    children?: React.ReactNode;
  }

  // BrowserRouter component
  export class BrowserRouter extends React.Component<RouterProps> {}
  
  // Alias for BrowserRouter
  export const Router: typeof BrowserRouter;

  // Switch component
  interface SwitchProps {
    children?: React.ReactNode;
  }
  export class Switch extends React.Component<SwitchProps> {}

  // Link props
  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string | LocationDescriptor;
    replace?: boolean;
    innerRef?: React.Ref<HTMLAnchorElement>;
  }

  // Link component
  export class Link extends React.Component<LinkProps> {}

  // NavLink component
  interface NavLinkProps extends LinkProps {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?: (match: match<any>, location: Location) => boolean;
    location?: Location;
  }
  export class NavLink extends React.Component<NavLinkProps> {}

  // Redirect component
  interface RedirectProps {
    to: string | LocationDescriptor;
    push?: boolean;
    from?: string;
    exact?: boolean;
    strict?: boolean;
  }
  export class Redirect extends React.Component<RedirectProps> {}

  // Prompt component
  interface PromptProps {
    message: string | ((location: Location) => string | boolean);
    when?: boolean;
  }
  export class Prompt extends React.Component<PromptProps> {}

  // Memory Router
  interface MemoryRouterProps {
    initialEntries?: string[];
    initialIndex?: number;
    getUserConfirmation?: (message: string, callback: (ok: boolean) => void) => void;
    keyLength?: number;
    children?: React.ReactNode;
  }
  export class MemoryRouter extends React.Component<MemoryRouterProps> {}

  // Hash Router
  interface HashRouterProps {
    basename?: string;
    getUserConfirmation?: (message: string, callback: (ok: boolean) => void) => void;
    hashType?: 'slash' | 'noslash' | 'hashbang';
    children?: React.ReactNode;
  }
  export class HashRouter extends React.Component<HashRouterProps> {}

  // Static Router
  interface StaticRouterProps {
    basename?: string;
    location?: string | object;
    context?: object;
    children?: React.ReactNode;
  }
  export class StaticRouter extends React.Component<StaticRouterProps> {}

  // Location descriptor
  interface LocationDescriptorObject {
    pathname?: string;
    search?: string;
    hash?: string;
    state?: any;
  }
  type LocationDescriptor = string | LocationDescriptorObject;

  // Location
  interface Location extends LocationDescriptorObject {
    key?: string;
  }

  // Match
  interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
  }

  // Hooks
  export function useHistory(): {
    length: number;
    action: 'PUSH' | 'REPLACE' | 'POP';
    location: Location;
    push: (path: string | LocationDescriptor, state?: any) => void;
    replace: (path: string | LocationDescriptor, state?: any) => void;
    go: (n: number) => void;
    goBack: () => void;
    goForward: () => void;
    block: (prompt?: string | boolean | ((location: Location) => string | boolean)) => void;
    listen: (listener: (location: Location, action: 'PUSH' | 'REPLACE' | 'POP') => void) => () => void;
  };

  export function useLocation(): Location;

  export function useParams<P = {}>(): P;

  export function useRouteMatch<P = {}>(
    path?: string | string[] | RouteProps
  ): match<P> | null;

  // withRouter HOC
  interface WithRouterProps<P = {}> {
    match: match<P>;
    location: Location;
    history: {
      length: number;
      action: 'PUSH' | 'REPLACE' | 'POP';
      location: Location;
      push: (path: string | LocationDescriptor, state?: any) => void;
      replace: (path: string | LocationDescriptor, state?: any) => void;
      go: (n: number) => void;
      goBack: () => void;
      goForward: () => void;
      block: (prompt?: string | boolean | ((location: Location) => string | boolean)) => void;
      listen: (listener: (location: Location, action: 'PUSH' | 'REPLACE' | 'POP') => void) => () => void;
    };
  }
  export function withRouter<P extends WithRouterProps>(
    component: React.ComponentType<P>
  ): React.ComponentClass<Omit<P, keyof WithRouterProps>>;

  // Utility functions
  export function generatePath(pattern: string, params?: { [paramName: string]: string | number }): string;
  export function matchPath<P = {}>(
    pathname: string,
    props: string | string[] | RouteProps,
    parent?: match<any> | null
  ): match<P> | null;
}
