import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '华为云社区知识图谱',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '知识图谱演示',
      path: '/knowlegeMap',
      component: './KnowledgeMap',
    },
    {
      name: '智能问答',
      path: '/Q&A',
      component: './Q&A',
    },
  ],
  npmClient: 'pnpm',
  clickToComponent: { editor: 'vscode' },
  esbuildMinifyIIFE: true,
  clientLoader: {},
});
