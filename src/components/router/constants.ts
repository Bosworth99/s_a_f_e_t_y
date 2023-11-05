import { Alpha } from '../../views/alpha/Alpha';
import { Beta } from '../../views/beta/Beta';
import { Gamma } from '../../views/gamma/Gamma';

import type { RouteNode } from './types';

export const RouteNodes: RouteNode[] = [
  {
    pathname: `/alpha`,
    component: Alpha,
  },
  {
    pathname: `/beta`,
    component: Beta,
  },
  {
    pathname: `/gamma`,
    component: Gamma,
  },
];
