import React from 'react';
import Aside from './components/Aside';
import { Layout } from 'antd';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import './app.less';

export default function App(props: RouteConfigComponentProps) {
  return (
    <Layout className="main">
      <Aside />
      <Layout.Content style={{ overflow: 'auto' }}>
        {renderRoutes(props.route?.routes)}
      </Layout.Content>
    </Layout>
  );
}
