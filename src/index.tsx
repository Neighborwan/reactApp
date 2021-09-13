import { Button } from 'antd';
import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.less';

function App() {
  return (
    <div>
      <Button type="primary">click</Button>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
