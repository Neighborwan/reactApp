import React from 'react';
import App from '../App';
import { RouteConfig } from 'react-router-config';
import Home from '../pages/Home';
import HelloWorld from '../pages/HelloWorld';
import { Redirect } from 'react-router';
import Counter from 'src/pages/Counter';

const routes: RouteConfig[] = [
  {
    component: App,
    routes: [
      {
        component: () => <Redirect to="/home" />,
        path: '/',
        exact: true,
      },
      {
        component: Home,
        path: '/home',
      },
      {
        component: HelloWorld,
        path: '/helloworld',
      },
      {
        component: Counter,
        path: '/counter',
      },
      {
        path: '*',
        component: () => <div>404</div>,
      },
    ],
  },
];

export default routes;
