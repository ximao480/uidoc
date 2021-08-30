<template>
  <i-article>
    <article>
      <h1>ImageUpload 图片上传</h1>
      <inAnchor title="概述" h2></inAnchor>
      <p>封装了图片上传及预览的基本功能</p>
      <inAnchor title="代码示例" h2></inAnchor>

      <Demo title="基础用法">
        <div slot="demo">
          <bclImageUpload
                  :serviceId="localHost"
                  :PropsData="dataitem"
                  v-model="valuedata"
          ></bclImageUpload>
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
            <td>PropsData</td>
            <td>所有arkui ImageUpload 里面的属性接收位置</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>v-model</td>
            <td>value</td>
            <td>String/Array</td>
            <td>-</td>
          </tr>
          <tr>
            <td>http</td>
            <td>自己项目里面封装的axios[不传则走组件库自己的，报错请求会拦截不到]</td>
            <td>Function</td>
            <td>-</td>
          </tr>
          <tr>
            <td>serviceId</td>
            <td>上传接口网关</td>
            <td>String</td>
            <td>默认取当前浏览器host</td>
          </tr>
          </tbody>
        </table>
        <inAnchor title="Docfile props.PropsData" h3></inAnchor>
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
            <td>readonly</td>
            <td>是否可编辑</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>url</td>
            <td>接口路径</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>length</td>
            <td>上传图片数量控制 默认10条</td>
            <td>Number</td>
            <td>10</td>
          </tr>
          <tr>
            <td>sendData</td>
            <td>传送参数</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>name</td>
            <td>上传按钮文字描述</td>
            <td>String</td>
            <td>'上传'</td>
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
            <td>on-delete</td>
            <td>监听数据变化-删除图片时</td>
            <td>传参（index，实例）</td>
          </tr>
          <tr>
            <td>on-change</td>
            <td>当值改变时触发</td>
            <td>传参（数据，实例）</td>
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
  import {ImageUpload as bclImageUpload} from '@syman/ark-ui-bcl';

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      bclImageUpload
    },
    mixins: [Mixin],
    data() {
      return {
        code: Code,
        valuedata:  [{
          "NAME": "package.json",
          "URL": "http://arkui.dev.syman.cn/7ae2876ae1edf36a6e738d7b37910dd0.png",
          "Size": "2K"
        }, {
          "NAME": "build.config - 副本.json",
          "URL": "http://arkui.dev.syman.cn/7ae2876ae1edf36a6e738d7b37910dd0.png",
          "Size": "638B"
        }],
        localHost: 'r3-app',
        dataitem: {
          url: '/posts', // 上传地址
          // url: '/ad-app/p/cs/upload2', // 上传地址
          // url: '/p/c/upload/Avatar', // 上传地址
          sendData: {
            path: 'B1/New/',
            column: 'C1',
            tableName: 'B1'
          }, // 上传参数
          readonly: false,
          name: '上传'  //点击上传按钮名称
        }
      }
    },
  }
</script>
