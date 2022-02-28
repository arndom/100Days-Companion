import { NavigateFunction } from 'react-router-dom';

export const navigateTo = (href: string, navigate: NavigateFunction) => navigate(href);
