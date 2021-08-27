let code = {};

code.start = `
npm install @syman/ark-ui-bcl --save

npm install babel-plugin-import --save-dev

在项目中添加 .babelrc 文件 { "plugins": [["import", { "libraryName": "@syman/ark-ui-bcl", "libraryDirectory": "src/components" }]] }

import { DropDownSelectFilter } from '@syman/ark-ui-bcl';

`;

code.webpack5 = `new ModuleFederationPlugin({

name: "自己项目定义的名称",
remotes: 
  { // 远程项目的名称
    arkui_BCL: "arkui_BCL@https://cdn.jsdelivr.net/npm/@syman/ark-ui-bcl/0.0.1/remoteEntry.js"
  },
shared: ['vue', '@syman/ark-ui,'axios'] // 公共组件库
})`;

code.first = `
 webpack.config.js 的入口文件是
 entry: './src/main.js',
 
 1.把main.js 的文件内容剪切到一个新建的js文件中，
 2.在空白的main.js 文件中import ('该js文件')
`;

code.second = `
  引入组件
  let BusDropDownSelectFilter = () => import('arkui_BCL/DropDownSelectFilter')

  可以自定义修改组件 // 异步引入模块，data.default中修改或者添加自己的逻辑，但是可以修改的使用方法具体已每个组件的文档为主，
  BusDropDownSelectFilter().then((data)=>{ return data.default.methods = Object.assig(data.default.methods,'你自己的methods'); })

  修改后在挂载到自己对应的实例上
  components: { BusDropDownSelectFilter:BusDropDownSelectFilter },

`;

code.version = `
  "html-webpack-plugin": "^4.5.0",
  "webpack": "^5.1.3",
  "webpack-cli": "^3.3.12",
  "webpack-dev-server": "^3.11.2",
  "webpack-merge": "^5.7.3"
`;

code.webpackConfig = `
VueLoaderPlugin 引用方式修改
const VueLoaderPlugin = require('vue-loader/lib/plugin');

devtool 使用方式修改
devtool:env && env.production ? 'source-map' : false

webpack < 5 used to include polyfills for node.js core modules by default
在运行过程中出现了很多这样的报错信息，是由于在webpack5中移除了nodejs核心模块的polyfill自动引入，
所以需要手动引入，如果打包过程中有使用到nodejs核心模块，webpack会提示进行相应配置

如果图片或字体出现错误
options: { limit: 8192, esModule: false, // webpack5 默认打开 }
`;
export default code;
