<template>
  <i-article>
    
    <article>
      <h1>物料贡献使用说明</h1>
     <h3>设计原则</h3>
      <blockquote>
         Ark-CLI是一个实现快速生成项目模板、开发物料的脚手架，同时也是优秀的文档继承工具，
         可以读取项目中的props和methods 的注释生成html文档，同时也可以支持文档的在线编辑及配置修改等预览工作，
         极大的方便开发者选择和使用。
      </blockquote>
       <p>ark generate --doc</p>
      <inAnchor
        title=".arkdoc 目录结构"
        h2
      ></inAnchor>
      <i-code
        lang="js"
        bg
      >{{ code.catalogue }}</i-code>

    </article>
     <h1>arkcli上传文档兼容方式</h1>
    
      <blockquote>1、 支持vue 及 mdx文件 转成html</blockquote>
      
       <inAnchor
        title=".mdx使用方式 "
        h2
      ></inAnchor>
      <p> 1.mdx功能基本和markdown一致。</p>
         <p>2.但是mdx还支持import导入组件使用，功能更强大。</p>
        <p> 3.常见用法只需看下本示例中mdx文档是如何写的，基本够日常使用了。 </p>
         <p>4.更多用法可以看<a href="https://storybook.js.org/docs/react/writing-docs/mdx/">官方mdx用法篇</a></p>
      
      <i-code
        lang="js"
        bg
      >{{ code.mdx }}</i-code>
       <inAnchor
        title="vue 使用方式 "
        h2
      ></inAnchor>
      <blockquote>自动读取项目中的vue 注释</blockquote>
         <h5>步骤：</h5>
         <p>1.arkcli 默认自动读取.arkdoc/example/**.stories.js 下的文件，配置看.arkdoc/example/config/main.js</p>
        <!-- <i-code
        lang="js"
        bg
      >{{ code.vue }}</i-code> -->
     <p>2.检查是否有依赖包，如果有三方依赖，请在.arkdoc/example/config 中添加对应的cdn</p>
       <br/>
       <br/>
       <img style="width:600px" src="../../images/ark_cli_01.jpg"/>

      <blockquote>引入第三方的组件</blockquote>
      <p>1.逻辑上和之前一致，只是props 的注释要自己写</p>
     <h1>MocK 接口模拟用法</h1>


  </i-article>
</template>

<script type="text/ecmascript-6">
import iArticle from '../../components/article.vue';
import iCode from 'iCode';
import Code from '../../code/cli/explan';
import inAnchor from '../../components/anchor.vue';
import Study from '../../components/study.vue';

export default {
  name: '',

  components: {
    iArticle,
    iCode,
    inAnchor,
    Study
  },

  data() {
    return {
      code: Code
    }
  },

  methods: {

  },
}
</script>

<style scoped>
</style>