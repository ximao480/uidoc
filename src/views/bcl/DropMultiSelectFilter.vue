<template>
  <i-article>
    <article>
      <h1>DropMultiSelectFilter 下拉多选</h1>
      <inAnchor title="概述" h2></inAnchor>
      <p>封装了基本公共，包含接口请求，翻页，模糊查询功能</p>
      <inAnchor title="代码示例" h2></inAnchor>

      <Demo title="基础用法">
        <div slot="demo">
          <vbsDropMultiSelectFilter :PropsData="propsData"
                                :Url="url"
                                v-model="value"
                                :http="network"
                                :AutoRequest="sendAutoMessage"
                                :TableRequest="sendTableMessage"
                                @on-valueChange="valueChange"
                                :EventFun="eventFun"></vbsDropMultiSelectFilter>
        </div>
        <i-code lang="html" slot="code">{{ code.base }}</i-code>
      </Demo>


      <div class="api">
        <inAnchor title="API" h2></inAnchor>
        <inAnchor title="DropDownSelectFilter props" h3></inAnchor>
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
            <td>属性集合</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>value</td>
            <td>值</td>
            <td>Array, String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>http</td>
            <td>接通项目网关</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>EventFun</td>
            <td>函数集合</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Url</td>
            <td>服务资源API</td>
            <td>Object</td>
            <td>{ autoUrl:'/p/cs/fuzzyquerybyak', tableUrl:'/p/cs/QueryList' }</td>
          </tr>
          <tr>
            <td>AutoRequest</td>
            <td>模糊传参</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>TableRequest</td>
            <td>表格模糊传参</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>autoDataMethods</td>
            <td>模糊数据回调</td>
            <td>Function</td>
            <td>-</td>
          </tr>
          <tr>
            <td>tableDataMethods</td>
            <td>表格数据回调</td>
            <td>Function</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
        <inAnchor title="DropDownSelectFilter events" h3></inAnchor>
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
            <td>DropDownSelectFilter组件实例this</td>
          </tr>
          <tr>
            <td>on-clear</td>
            <td>当清除数据时触发</td>
            <td>DropDownSelectFilter组件实例this</td>
          </tr>
          <tr>
            <td>on-keydown</td>
            <td>原生的 keydown 事件</td>
            <td>DropDownSelectFilter组件实例this</td>
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
  import Code from '../../code/bcl/DropMultiSelectFilter';
  import inAnchor from '../../components/anchor.vue';
  import Mixin from '../../mixins/common';
  import {DropMultiSelectFilter as vbsDropMultiSelectFilter} from '@syman/ark-ui-bcl';

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      vbsDropMultiSelectFilter
    },
    mixins: [Mixin],
    data() {
      return {
        code: Code,
        sendAutoMessage: {
          colid: 1,
          fixedcolumns: {

          }
        },
        value:[
          {
            ID:'1',
            Label:'121212'
          }
        ],
        sendTableMessage: {
          isdroplistsearch: true,
          refcolid: 12,
        },
        propsData: {
          placeholder: '下拉单选9999',
          enterType: true,
          pageSize:30,
        },
        eventFun: {
          //   'on-input-value-change':()=>{
          //       console.log(111);
          //   }
        },
        url: {
          autoUrl: '/p/cs/fuzzyquerybyak',
          tableUrl: 'p/cs/QueryList'
        }
      }
    },
    methods: {
      valueChange($) {
        console.log('v-model', this);
      }
    }
  }
</script>
