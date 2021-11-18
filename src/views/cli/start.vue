<template>
  <i-article>
    <article>
      <h1>介绍</h1>

      <p>Ark-CLI是一个实现快速生成项目模板、开发物料的脚手架</p>

      <h1>快速上手</h1>

      <inAnchor
        title="安装说明"
        h2
      ></inAnchor>
      <i-code
        lang="js"
        bg
      >{{ code.install }}</i-code>

      <inAnchor
        title="使用说明"
        h2
      ></inAnchor>
      <i-code
        lang="js"
        bg
      >{{ code.init }}</i-code>

      <p>再根据命令行提示输入项目的名称。</p>
      <p>然后根据命令行提示选择项目模板:</p>
      <p> 1.【r3框架项目】是基于r3框架搭建的vue项目，包含ark-ui和ark-ui-bcl</p>
      <p> 1.【ark-ui框架项目】是预装了ark-ui组件库的vue项目</p>
      <p>项目下载完毕后，可根据命令提示进入到项目根目录，使用npm start启动项目</p>
    </article>
  </i-article>
</template>

<script type="text/ecmascript-6">
import iArticle from '../../components/article.vue';
import iCode from 'iCode';
import Code from '../../code/cli/start';
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