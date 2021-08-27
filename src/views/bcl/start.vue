<template>
  <i-article>
    <article>
      <h1>快速上手</h1>
      <inAnchor title="特性" h2></inAnchor>
      <Alert show-icon>
        按需引入，减轻项目包体及重复代码
      </Alert>

      <inAnchor title="使用方式" h2></inAnchor>
      <i-code lang="js" bg>{{ code.start }}</i-code>
      <inAnchor title="webpack5 支持cdn链接引入，配置内容" h2></inAnchor>
      <p>使用webpack5 及以上版本，如果安装失败请检查node和npm 版本</p>
      <inAnchor title="引入方式" h2></inAnchor>
      <ul>
        <li>找到自己项目的webpack.config.js 文件</li>

          <li>头部添加 ModuleFederationPlugin 引入代码</li>

          <li>const { ModuleFederationPlugin } = require("webpack").container;</li>

          <li>在 plugins 中添加改组件库的引用方法</li>
      </ul>
      <i-code lang="js" bg>{{ code.webpack5 }}</i-code>
      <inAnchor title="项目中的使用方法" h2></inAnchor>
      <ul>
        <li>项目入口文件（main.js或者是index.js）请用个js文件放置好，然后用import ('该文件')</li>
        <i-code lang="js" bg>{{ code.first }}</i-code>

        <li>组件的使用方法</li>
        <i-code lang="js" bg>{{ code.second }}</i-code>
      </ul>

      <inAnchor title="表格用webpack联邦模块导入，渲染时会卡死" h3></inAnchor>
      <inAnchor title="webpack4 升级到webpack5" h2></inAnchor>
      <ul>
        <li>修改对应使用工具的版本号</li>
        <i-code lang="js" bg>{{code.version}}</i-code>
        <li>如果安装失败，可以尝试一下方案</li>
        <i-code bg>1.使用npm cache clean --force清除安装失败的 2.安装失败请删除node_modules文件， 然后在npm install</i-code>
        <li>webpack.config.js 中</li>
        <i-code lang="js" bg>{{code.webpackConfig}}</i-code>
      </ul>
    </article>
  </i-article>
</template>
<script>
  import iArticle from '../../components/article.vue';
  import iCode from 'iCode';
  import Code from '../../code/bcl/start';
  import inAnchor from '../../components/anchor.vue';
  import Study from '../../components/study.vue';

  export default {
    components: {
      iArticle,
      iCode,
      inAnchor,
      Study
    },
    data () {
      return {
        code: Code
      }
    },
    methods: {

    }
  }
</script>
