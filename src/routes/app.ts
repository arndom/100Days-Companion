import Home from '../pages/Home/Home';

export interface AppRouteType {
  to: string;
  element: React.ComponentType;
}

export const appRoutes: AppRouteType[] = [
  // sample route
  {
    to: '/',
    element: Home,
  },
];
