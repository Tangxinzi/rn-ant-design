import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <Button type="primary" shape="circle" icon="search" />
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon="search">
        Search
      </Button>
      <Button shape="circle" icon="search" />
      <Button icon="search">Search</Button>
      <br />
      <Button shape="circle" icon="search" />
      <Button icon="search">Search</Button>
      <Button type="dashed" shape="circle" icon="search" />
      <Button type="dashed" icon="search">
        Search
      </Button>
    </div>
  );
}
