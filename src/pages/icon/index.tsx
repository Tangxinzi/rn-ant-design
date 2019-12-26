import React from 'react';
import styles from './index.css';
import { Icon } from 'antd';

export default function() {
  return (
    <div className={styles.normal}>
      <Icon type="cloud-sync" style={{ fontSize: '16px', color: '#08c' }} />
    </div>
  );
}
