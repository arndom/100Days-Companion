import Home from '../pages/Home/Home';
import User from '../pages/User';

export interface AppRouteType {
  to: string;
  element: React.ComponentType;
}

export const appRoutes: AppRouteType[] = [
  // sample route
  {
    to: '/',
    element: Home
  },
  {
    to: '/users/:id',
    element: User
  },
];
