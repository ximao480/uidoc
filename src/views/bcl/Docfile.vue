<template>
  <i-article>
    <article>
      <h1>Docfile 文件上传</h1>
      <inAnchor title="概述" h2></inAnchor>
      <p>封装了文件上传的基本功能，包含删除提示等</p>
      <inAnchor title="代码示例" h2></inAnchor>

      <Demo title="基础用法">
        <div slot="demo">
          <bclDocfile
                  v-model="value"
                  :dataitem="dataitem"
                  :serviceId="localHost"
          ></bclDocfile>
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
            <td>dataitem</td>
            <td>上传文件类型字段元数据配置，如在定制界面使用，需和元数据配置参数保持一致</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>itemWebconf</td>
            <td>查询接口</td>
            <td>Object</td>
            <td>{UploadAccept：’文件格式’}</td>
          </tr>
          <tr>
            <td>v-model</td>
            <td>value</td>
            <td>String/Array</td>
            <td>-</td>
          </tr>
          <tr>
            <td>webConfSingle</td>
            <td>是否需要isPreview标记</td>
            <td>Object</td>
            <td>{ docFile：{isPreview：’’, url: ‘’ }}</td>
          </tr>
          <tr>
            <td>encodeControl</td>
            <td>对下载的url地址进行转换，处理特殊字符</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>accept</td>
            <td>文件上传格式控制</td>
            <td>String</td>
            <td>*</td>
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
        <inAnchor title="Docfile props.dataitem" h3></inAnchor>
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
            <td>filesLength</td>
            <td>上传文件数量</td>
            <td>Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>filesize</td>
            <td>文件上传大小（自己换算成kb）</td>
            <td>Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>sendData</td>
            <td>接口传参 {path: ${this.item.tableName}/${this.item.itemId}/}</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>accept</td>
            <td>接收上传文件的类型</td>
            <td>String</td>
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
            <td>on-change</td>
            <td>当值改变时触发</td>
            <td>传参（fileList）</td>
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
  import Code from '../../code/bcl/Docfile';
  import inAnchor from '../../components/anchor.vue';
  import Mixin from '../../mixins/common';
  import {Docfile as bclDocfile} from '@syman/ark-ui-bcl';

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      bclDocfile
    },
    mixins: [Mixin],
    data() {
      return {
        code: Code,
        value: [{
          "name": "package.json",
          "url": "http://r3-project-file.oss-cn-hangzhou.aliyuncs.com/haha/package.json",
          "Size": "2K"
        }],
        dataitem: {
          url: '/posts', // 上传地址
        },
        dataitem: {
          readonly: false, //控制字段是否可编辑
          url:'/p/cs/batchUpload',
          filesLength:2,
          filesize:2*1024*1024,
          accept: '*',
          sendData:{
            path: '',
          },
        },
        localHost:'add-app'

      }
    },
    methods: {
      valueChange($) {
        console.log('v-model', this);
      }
    }
  }
</script>
