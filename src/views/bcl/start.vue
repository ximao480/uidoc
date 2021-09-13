<template>
  <i-article>
    <article>
      <h1>快速上手</h1>
      <inAnchor title="特性" h2></inAnchor>
      
     
      <inAnchor title="全局使用方式" h2></inAnchor>
      <Alert show-icon>
        全局使用，因为是基于R3框架编译的，所以只挂载了框架必备的组件，其余组件请按需引入，
      </Alert>
      <Alert type="warning">
        如果是基于框架R3项目请cdn方式引入
      </Alert>
      <i-code lang="js" bg>{{ code.cdnstart }}</i-code>
      <p>如果不是基于R3框架项目，可以用以下引用方式</p>
      <i-code lang="js" bg>{{ code.start }}</i-code>
      <inAnchor title="全局使用方式包含的组件" h2></inAnchor>
       <Alert show-icon>
        为了和arkui 的组件区分，前缀加了ark（全局使用的时候），按需引用无需
      </Alert>
      <i-code lang="js" bg>{{ code.tip }}</i-code>

      <!-- <inAnchor title="按需使用方式" h2></inAnchor>
      <Alert show-icon>
        按需引入，减轻项目包体及重复代码
      </Alert>
       <i-code lang="js" bg>{{ code.import }}</i-code> -->
      <inAnchor title="国际化" h2></inAnchor>
      <i-code lang="js" bg>{{ code.lang }}</i-code>
      <p>定制语言函数BCL_mergeLocaleMessage。用法同i18n插件的mergeLocaleMessage( locale, message )。可以用于自定义翻译和扩展语言翻译</p>
      <i-code lang="js" bg>{{ code.extendlang }}</i-code>
     
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
