<template>
  <i-article>
    <article>
      <h1>PreviewPicture 图片预览</h1>
      <inAnchor title="概述" h2></inAnchor>
      <p>图片预览的基本功能</p>
      <inAnchor title="代码示例" h2></inAnchor>

      <Demo title="基础用法">
        <div slot="demo">
              <Button @click="showImage">图片预览</Button>
              <arkPreviewPicture :images="value"
                              :show="show"
                              @on-cancel="()=>{
                                  this.show = false;
                                }"
                              :defaultIndex="defaultIndex"/>

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
            <td>images</td>
            <td>图片预览的列表</td>
            <td>Array</td>
            <td>-</td>
          </tr>
          <tr>
            <td>show</td>
            <td>弹窗是否展示</td>
            <td></td>
            <td>false</td>
          </tr>
          <tr>
            <td>defaultIndex</td>
            <td>默认展示第几个</td>
            <td>string</td>
            <td>0</td>
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
  import Code from '../../code/bcl/ImageUpload';
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
        value: [{
          "NAME": "package.json",
          "URL": "http://arkui.dev.syman.cn/7ae2876ae1edf36a6e738d7b37910dd0.png",
          "Size": "2K"
        }, {
          "NAME": "build.config - 副本.json",
          "URL": "http://arkui.dev.syman.cn/7ae2876ae1edf36a6e738d7b37910dd0.png",
          "Size": "638B"
        }]
      }
    },
    methods: {
      showImage() {
        this.show = true;
      }
    },
  }
</script>
