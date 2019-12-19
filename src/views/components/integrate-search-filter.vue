<template>
    <i-article>
        <article>
            <h1>IntegrateSearchFilter 集成搜索组件</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <IntegrateSearchFilter
                            :dropDownList="dropList">
                    </IntegrateSearchFilter>
                </div>
                <div slot="desc">
                    <p>基础用法</p>
                    <p></p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <Demo title="有标签">
                <div slot="demo">
                    <IntegrateSearchFilter
                            :tagList="tagList"
                            :dropDownList="dropList">
                    </IntegrateSearchFilter>
                </div>
                <div slot="desc">
                    <p>有标签</p>
                    <p>可以有多个标签</p>
                </div>
                <i-code lang="html" slot="code">{{ code.tag}}</i-code>
            </Demo>

            <Demo title="有默认检索项">
                <div slot="demo">
                    <IntegrateSearchFilter
                            v-model="selectValue"
                            :tagList="tagList"
                            :dropDownList="dropList">
                    </IntegrateSearchFilter>
                </div>
                <div slot="desc">
                    <p>有默认检索项</p>
                    <p>v-model绑定的值</p>
                </div>
                <i-code lang="html" slot="code">{{ code.defaultValue}}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="FkrpSelect props" h3></inAnchor>
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
                        <td>绑定的值，可使用 v-model 双向绑定</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>dropDownList</td>
                        <td>左侧下拉条</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>trigger</td>
                        <td>左侧下拉条的触发方式，可选值为 hover（悬停）click（点击）contextMenu（右键）</td>
                        <td>String</td>
                        <td>hover</td>
                    </tr>
                    <tr>
                        <td>tagList</td>
                        <td>标签</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>searchMethod</td>
                        <td>点击搜索Icon时回调方法</td>
                        <td>Function</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>searchItemMaxWidth</td>
                        <td>检索项最大宽度，超出这个宽度显示省略号</td>
                        <td>Number</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>integrateSearchWidth</td>
                        <td>集成搜索框的宽度</td>
                        <td>Number</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>searchItemTrigger</td>
                        <td>检索项触发方式,可选值为 hover（悬停）click（点击）contextMenu（右键）</td>
                        <td>String</td>
                        <td>hover</td>
                    </tr>
                    <tr>
                        <td>searchItemPlacement</td>
                        <td>检索项气泡出现的位置，可选值为top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end</td>
                        <td>String</td>
                        <td>top</td>
                    </tr>
                    <tr>
                        <td>isSearchItemShow</td>
                        <td>是否显示检索项</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="dropDownList props" h3></inAnchor>
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
                        <td>label</td>
                        <td>字段名称</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>column</td>
                        <td>字段</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>占位文本</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>组件类型, 可选值为 Input  Select  DatePicker DropDownSelectFilter</td>
                        <td>String</td>
                        <td>Input</td>
                    </tr>
                    <tr>
                        <td>componentAttribute</td>
                        <td>组件属性,参考ark-ui的属性</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>componentEvent</td>
                        <td>组件events,参考ark-ui的events</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>list</td>
                        <td>选项，当type为Select时此选项必填，参考ark-ui的下拉选项</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="tagList props" h3></inAnchor>
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
                        <td>label</td>
                        <td>标签字段名称</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>column</td>
                        <td>标签字段</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>trigger</td>
                        <td>标签触发方式</td>
                        <td>String</td>
                        <td>hover</td>
                    </tr>
                    <tr>
                        <td>list</td>
                        <td>选项 例如[{label: 标签1}]</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="FkrpSelect events" h3></inAnchor>
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
                        <td>on-clear-all</td>
                        <td>清除全部检索项时触发</td>
                        <td> event </td>
                    </tr>
                    <tr>
                        <td>on-clear-item</td>
                        <td>删除单个检索项时触发</td>
                        <td>该检索项下标index </td>
                    </tr>
                    <tr>
                        <td>on-value-change</td>
                        <td>单个组件改变时触发</td>
                        <td>该组件的配置项和改变的值 </td>
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
  import Code from '../../code/integrate-search-filter';
  import inAnchor from '../../components/anchor.vue';

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor
    },
    data () {
      return {
        code: Code,
        dropList: Code.dropList,
        tagList: Code.tagList,
        selectValue: []
      }
    },
    computed: {
    },
    methods: {
    },
    mounted() {
      this.selectValue = [
        {
          label: '测试1',
          column: 'test1',
          placeholder: '请输入测试1',
          type: 'Input',
          componentAttribute: {
          },
          value: 'aaaa'
        },
        {
          label: '测试2',
          column: 'test2',
          placeholder: '请输入测试2',
          type: 'Input',
          componentAttribute: {
          },
          value: 'bbbb'
        },
        {
          label: '测试3',
          column: 'test3',
          placeholder: '请输入测试3',
          type: 'Input',
          componentAttribute: {
          },
          value: 'cccc'
        },
        {
          label: '测试4',
          column: 'test4',
          placeholder: '请输入测试4',
          type: 'Input',
          componentAttribute: {
          },
          value: 'dddd'
        },
        {
          label: '测试5',
          column: 'test5',
          placeholder: '请输入测试5',
          type: 'Input',
          componentAttribute: {
          },
          value: 'eeee'
        },
        {
          label: '测试6',
          column: 'test6',
          placeholder: '请输入测试6',
          type: 'Input',
          componentAttribute: {
          },
          value: 'ffff'
        }
      ];
    }
  }
</script>
