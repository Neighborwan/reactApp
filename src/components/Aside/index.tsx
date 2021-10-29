import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Aside() {
  return (
    <Layout.Sider theme="light" collapsible>
      <Menu>
        <Menu.Item>
          <Link to="/home">麦基</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/helloworld">女少贤</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/counter">王王京</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
