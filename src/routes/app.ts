import Home from '../pages/Home/Home';
import Join from '../pages/Join/Join';
import Landing from '../pages/Landing/Landing';
import User from '../pages/User';

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
    to: '/users/:id',
    element: User,
  },
  {
    to: '/landing',
    element: Landing,
  },
  {
    to: '/join',
    element: Join,
  },
];
