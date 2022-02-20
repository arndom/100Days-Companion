import Home from '../pages/Home/Home';
import Milestones from '../pages/Home/Milestones/Milestones';
import Settings from '../pages/Home/Settings/Settings';
import Statistics from '../pages/Home/Statistics/Statistics';
import Join from '../pages/Join/Join';
import Landing from '../pages/Landing/Landing';
import User from '../pages/User';
import PublicRoadmap from '../pages/PublicRoadmap/PublicRoadmap';

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
  {
    to: 'roadmap',
    element: PublicRoadmap,
  },
];
