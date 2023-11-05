# README

- 运行项目：pnpm start
- 构建项目：pnpm build

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

项目详细配置见.umirc.ts、package.json

开发中的 [常用配置](https://umijs.org/docs/api/config#clicktocomponent)：

- clickToComponent
  - `Option+Click/Alt+Click` 点击组件跳转至编辑器源码位置。
  - `Option+Right-click/Alt+Right-click` 可以打开上下文，查看父组件。
- clientLoader

  - 为每个路由声明一个数据加载函数 clientLoader，将页面需要的加载数据程序提取到其中，可以让 Umi 提前在页面组件尚未加载好的时候进行数据的加载，避免瀑布流请求的问题，实现数据预加载。

- conventionRoutes：不进行配置，采用框架默认的约定式路由，也叫文件路由，文件系统即路由。base 默认从 src/pages 读取。

数据可视化：[AntV](https://antv.antgroup.com/)，企业级可视化解决方案，支持绝大多数图表类型。

如果只需要静态图表展示也可以考虑：[ChartCube](https://chartcube.alipay.com/)，可以快速配置出需要的可视化图表。
