import { Layout } from 'antd';
import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.less';
import './index.less';
import Aside from './components/Aside';

function App() {
  return (
    <Layout className="main">
      <Aside />
      <Layout.Content>main</Layout.Content>
    </Layout>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
