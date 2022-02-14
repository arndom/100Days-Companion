import Home from '../pages/Home/Home';
import Landing from '../pages/Landing/Landing';

export interface AppRouteType {
  to: string;
  element: React.ComponentType;
}

export const appRoutes: AppRouteType[] = [
  {
    to: '/',
    element: Home,
  },
  {
    to: '/landing',
    element: Landing,
  },
];
