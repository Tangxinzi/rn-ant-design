import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/button/index',
          component: './button/index',
        },
        {
          path: '/icon/index',
          component: './icon/index',
        },
        {
          path: '/typography/index',
          component: './typography/index',
        },
        {
          path: '/affix/index',
          component: './affix/index',
        },
        {
          path: '/breadcrumb/index',
          component: './breadcrumb/index',
        },
        {
          path: '/page-header/index',
          component: './page-header/index',
        },
        {
          path: '/steps/index',
          component: './steps/index',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'rn-ant-design',
        dll: true,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
export default config;
