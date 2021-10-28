import React from 'react';
import App from '../App';
import { RouteConfig } from 'react-router-config';
import Home from '../pages/Home';
import HelloWorld from '../pages/HelloWorld';
import { Redirect } from 'react-router';

const routes: RouteConfig[] = [
  {
    component: App,
    routes: [
      {
        component: () => <Redirect to="/reactApp/home" />,
        path: '/reactApp',
        exact: true,
      },
      {
        component: Home,
        path: '/reactApp/home',
      },
      {
        component: HelloWorld,
        path: '/reactApp/helloworld',
      },
      {
        path: '*',
        component: () => <div>404</div>,
      },
    ],
  },
];

export default routes;
