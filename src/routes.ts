import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import About from './pages/about';
import Auto from './pages/auto';
import data from './data/jump_map';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
    data
  },
  {
    path: '/:auto',
    component: Auto,
    data
  },
];
