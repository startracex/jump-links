import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import data from './data/jump_map';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    data
  },
  {
    path: '/:auto',
    component: lazy(() => import('./pages/auto')),
    data
  },
];
