import React, { Key } from 'react';
import Home from '@/pages/Home';
export interface IRouter {
  index?: boolean;
  id: Key;
  component: React.FC<{}>;
  path: string;
  exact: boolean;
}

const Routers = [
  {
    id: 1,
    Component: Home,
    path: '/',
    exact: true,
  },
];

export default Routers;
