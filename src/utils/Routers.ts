import React, { Key } from 'react';
import Home from '@/pages/HomePage/Home';
import RestaurantList from '@/pages/RestaurantListPage/RestaurantList';
import RestaurantDetail from '@/pages/RestaurantDetailPage/RestaurantDetail';

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
  {
    id: 2,
    Component: RestaurantList,
    path: '/restaurants',
  },
  {
    id: 3,
    Component: RestaurantDetail,
    path: '/restaurants/:restaurantId',
  },
];

export default Routers;
