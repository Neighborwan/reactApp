import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Aside() {
  return (
    <Layout.Sider theme="light" collapsible>
      <Menu>
        <Menu.Item>
          <Link to="/reactApp/home">麦基</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/reactApp/helloworld">女少贤</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/reactApp/counter">王王京</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
