import Home from '../pages/Home/Home';
import Milestones from '../pages/Home/Milestones/Milestones';
import Settings from '../pages/Home/Settings/Settings';
import Statistics from '../pages/Home/Statistics/Statistics';
import Join from '../pages/Join/Join';
import Landing from '../pages/Landing/Landing';
import User from '../pages/User';

export interface AppRouteType {
  to: string;
  element: React.ComponentType;
  subRoutes?: {
    to: string;
    element: React.ComponentType;
  }[];
}

export const appRoutes: AppRouteType[] = [
  {
    to: '/',
    element: Home,
    subRoutes: [
      { to: 'milestones', element: Milestones },
      { to: 'statistics', element: Statistics },
      { to: 'settings', element: Settings },
    ],
  },
  {
    to: 'users/:id',
    element: User,
  },
  {
    to: 'landing',
    element: Landing,
  },
  {
    to: 'join',
    element: Join,
  },
];
