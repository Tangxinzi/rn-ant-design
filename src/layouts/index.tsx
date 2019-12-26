import React from 'react';
import { Layout, Button, Icon, Menu } from 'antd';
import Link from 'umi/link';
import styles from './index.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout: React.FC = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light">
        <div className={styles.logo}>
          <Link to="/">Ant Design</Link>
        </div>
        <Menu mode="inline">
          <SubMenu title={
            <span>
              <span>通用</span>
            </span>
          }>
            <Menu.Item>
              <span>Button 按钮</span>
              <Link to="/button/index">Button 按钮</Link>
            </Menu.Item>
            <Menu.Item>
              <span>Icon 图标</span>
              <Link to="/icon/index">Icon 图标</Link>
            </Menu.Item>
            <Menu.Item>
              <span>Typography 排版</span>
              <Link to="/typography/index">Typography 排版</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Button type="link">
            <Icon type="left" />
            Go back
          </Button>
          <Button type="primary" shape="circle">N</Button>
        </Header>
        <Content className={styles.content}>
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>采用 React 封装的一套 Ant Design 的组件库，Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
