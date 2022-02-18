import Home from '../pages/Home/Home';
import Landing from '../pages/Landing/Landing';
import PublicRoadmap from '../pages/PublicRoadmap/PublicRoadmap';
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
    to: '/public-roadmap',
    element: PublicRoadmap,
  },
];
