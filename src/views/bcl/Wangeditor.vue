<template>
  <i-article>
    <article>
      <h1>Wangeditor 富文本编译器</h1>
      <inAnchor title="概述" h2></inAnchor>
      <p>富文本编译器</p>
      <inAnchor title="代码示例" h2></inAnchor>

      <Demo title="基础用法">
        <div slot="demo">
                <arkWangeditor v-model="value"></arkWangeditor>
        </div>
        <i-code lang="html" slot="code">{{ code.base }}</i-code>
      </Demo>

      <div class="api">
        <inAnchor title="API" h2></inAnchor>
        <inAnchor title="Docfile props" h3></inAnchor>
        <table>
          <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>value</td>
            <td>支持v-model，渲染</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>tabAction</td>
            <td>是否可点击菜单</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>isActives</td>
            <td>是否可以激活</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
           <tr>
            <td>http</td>
            <td>传入当前项目的http，防止报错弹窗拦截不到</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          
          </tbody>
        </table>
       
        <inAnchor title="Docfile events" h3></inAnchor>
        <table>
          <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>返回值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>on-cancel</td>
            <td>弹窗关闭事件</td>
            <td>传参（index，实例）</td>
          </tr>
         
          </tbody>
        </table>
      </div>
    </article>
  </i-article>
</template>
<script>
  import iArticle from '../../components/article.vue';
  import iCode from 'iCode';
  import Demo from '../../components/demo.vue';
  import Code from '../../code/bcl/Wangeditor';
  import inAnchor from '../../components/anchor.vue';
  import Mixin from '../../mixins/common';
  // import {ImageUpload as bclImageUpload} from '@syman/ark-ui-bcl';

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      // bclImageUpload
    },
    mixins: [Mixin],
    
    data() {
      return {
        code: Code,
        show: false,
        defaultIndex: 0,
        value:'<h2>这个是一个测试</h2>'
      }
    },
    methods: {
      showImage() {
        this.show = true;
      }
    },
  }
</script>
