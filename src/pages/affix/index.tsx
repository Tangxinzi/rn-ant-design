import React from 'react';
import { Affix, Button } from 'antd';
import styles from './index.css';

export default function() {
  return (
    <div style={{ height: '150vh' }}>
      <Affix offsetTop={30} onChange={affixed => console.log(affixed)}>
        <Button>30px to affix top</Button>
      </Affix>
    </div>
  );
}
