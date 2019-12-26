import React from 'react';
import styles from './index.css';
import { Typography } from 'antd';
import { formatMessage } from 'umi-plugin-locale';

const { Title, Paragraph, Text } = Typography;

export default function() {
  return (
    <div className={styles.normal}>
      <Typography>
        <Title level={3}>hello ~</Title>
        <Paragraph>
          This is an <Text mark>Ant Design of React</Text> project.
        </Paragraph>
      </Typography>
    </div>
  );
}
