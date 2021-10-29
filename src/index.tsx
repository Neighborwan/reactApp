import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import 'antd/dist/antd.less';

ReactDom.render(
  <HashRouter>{renderRoutes(routes)}</HashRouter>,
  document.getElementById('root'),
);
