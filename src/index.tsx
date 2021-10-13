import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import 'antd/dist/antd.less';

ReactDom.render(
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById('root'),
);
