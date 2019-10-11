<template>
    <i-article>
        <article>
            <h1>DropMultiSelectFilter 下拉选择组件</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>FC组件，下拉多选，支持模糊搜索。</p>
            <inAnchor title="代码示例" h2></inAnchor>

            <Demo title="下拉多选并且有模糊搜索的用法">
                <div slot="demo">
                    <DropMultiSelectFilter
                                          :data="data1"
                                          :totalRowCount="totalRowCount"
                                          :pageSize="pageSize"
                                          :transfer="false"
                                          :showColnameKey="'show'"
                                          @on-page-change="changePage1"
                                          @on-input-value-change="InputValueChange"
                                          @on-fkrp-selected="selectedChange"
                                          :dataEmptyMessage="dataEmptyMessage"
                                          :columns="columns"
                                          :AutoData="AutoData">
                    </DropMultiSelectFilter>
                </div>
                <div slot="desc">
                    <p>下拉单选,模糊搜索可以输入1或者12或者123测试</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.DropMultiSelectFilter }}</i-code>
            </Demo>

            <Demo title="下拉多选有默认值用法">
                <div slot="demo">
                    <DropMultiSelectFilter
                                          :totalRowCount="totalRowCount"
                                          :pageSize="pageSize"
                                          :transfer="false"
                                          :showColnameKey="'show'"
                                          :defaultSelected="defaultSelected"
                                          @on-page-change="changePage3"
                                          :dataEmptyMessage="dataEmptyMessage"
                                          :data="data3">
                    </DropMultiSelectFilter>
                </div>
                <div slot="desc">
                    <p>下拉多选，有默认数据</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.DropMultiSelectFilter2 }}</i-code>
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
                        <td>single</td>
                        <td>是否是单选，可选值为 <code>true</code>、<code>false</code></td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>下拉气泡表格里数据</td>
                        <td>Object</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>totalRowCount</td>
                        <td>数据总条数</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>pageSize</td>
                        <td>每页条数</td>
                        <td>Number</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>AutoData</td>
                        <td>模糊搜索的数据</td>
                        <td>[]</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>columnsKey</td>
                        <td>定义input中展示的对象的key，</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>hidecolumns</td>
                        <td>定义下拉列表中不展示内容的key，</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>dataEmptyMessage</td>
                        <td>无数据的时候提示</td>
                        <td>String</td>
                        <td>暂无数据</td>
                    </tr>
                    <tr>
                        <td>showColnameKey</td>
                        <td>输入框上展示值的key</td>
                        <td>String</td>
                        <td>isak</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>占位文本</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>defaultSelected</td>
                        <td>下拉多选 默认选中数据</td>
                        <td>Array</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>transfer</td>
                        <td>是否将弹层放置于 body 内。</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>isShowPopTip</td>
                        <td>点击icon的时候是否显示下拉框</td>
                        <td>Function</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="data props" h3></inAnchor>
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
                        <td>start</td>
                        <td>表格起始的序号值</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>tabth</td>
                        <td>表头</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>row</td>
                        <td>表数据</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="tabth props" h3></inAnchor>
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
                        <td>colname</td>
                        <td>列头显示文字</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>对应列内容的字段名</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>isak</td>
                        <td>输入框是否显示该列（该字段名字可以根据showColnameKey来设置）</td>
                        <td>Boolean</td>
                        <td>无</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="row props" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>如果tabth 为 [
                            {
                            "colname": "ID",
                            "name": "ID",
                            "show": true
                            }
                            ] 该row为 [
                            {
                            "ID": {
                            "val": "1242"
                            }
                            },
                            {
                            "ID": {
                            "val": "1243"
                            }
                            },
                            {
                            "ID": {
                            "val": "4983"
                            }
                            }
                            ]</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="AutoData props" h3></inAnchor>
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
                        <td>id</td>
                        <td>数据id，支持ID （必传）</td>
                        <td>String</td>
                        <td>''</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>其他的属性随便传，界面显示根据columnsKey 和 hidecolumns 来设置</td>
                        <td></td>
                        <td></td>
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
                        <td>on-fkrp-selected</td>
                        <td>选中的值时触发</td>
                        <td>value（是个数组包含ID和lable）和 DropDownSelectFilter 组件实例</td>
                    </tr>
                    <tr>
                        <td>on-page-change</td>
                        <td>页码更改时触发</td>
                        <td>页码值value和 DropDownSelectFilter 组件实例</td>
                    </tr>
                    <tr>
                        <td>on-input-value-change</td>
                        <td>模糊搜索，输入值时触发</td>
                        <td>输入的值value和 DropDownSelectFilter 组件实例</td>
                    </tr>
                    <tr>
                        <td>on-focus</td>
                        <td>聚焦的时候触发</td>
                        <td>event 和 DropDownSelectFilter 组件实例</td>
                    </tr>
                    <tr>
                        <td>on-blur</td>
                        <td>失去焦点的时候触发</td>
                        <td>event 和 DropDownSelectFilter 组件实例</td>
                    </tr>
                    <tr>
                        <td>on-keyup</td>
                        <td>原生的 keyup 事件</td>
                        <td>event 和 DropDownSelectFilter 组件实例</td>
                    </tr>
                    <tr>
                        <td>on-keydown</td>
                        <td>原生的 keydown 事件</td>
                        <td>event 和 DropDownSelectFilter 组件实例</td>
                    </tr>
                    <tr>
                        <td>on-popper-show</td>
                        <td>气泡弹出时触发</td>
                        <td>DropDownSelectFilter 组件实例</td>
                    </tr>
                    <tr>
                        <td>on-popper-hide</td>
                        <td>气泡关闭时触发</td>
                        <td>DropDownSelectFilter 组件实例</td>
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
  import Code from '../../code/fkrp-select';
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
        data: Code.data5,
        data1: Code.data5,
        data2: Code.data,
        data3: Code.data,
        totalRowCount: 39,
        pageSize: 10,
        AutoData: [],
        defaultSelected: [],
        dataEmptyMessage: '数据加载中...', // 无数据的提示
        columns:['name','value']// 展现的组
      }
    },
    mounted() {
      setTimeout(() =>{
        this.defaultSelected = Code.defaultSelected;
      },300);
    },
    computed: {
      formatNumber () {
        if (this.value15 === '') return 'Enter number';
        function parseNumber(str) {
          const re = /(?=(?!\b)(\d{3})+$)/g;
          return str.replace(re, ',');
        }
        return parseNumber(this.value15);
      }
    },
    methods: {
      changePage(value) { // 分页改变是传过来的值
        let _self = this;
        if (value === 1) {
          _self.data = Code.data5;
        } else if (value === 2) {
          _self.dataEmptyMessage = '数据加载中...';
          setTimeout(() => {
            _self.data = Code.data6;
          }, 500);
        } else if (value === 3) {
          _self.data = Code.data7;
        } else if (value === 4) {
          _self.dataEmptyMessage = '暂无数据';
          _self.data = Code.data8;
        }
      },
      changePage1(value) { // 分页改变是传过来的值
        let _self = this;
        if (value === 1) {
          _self.data1 = Code.data5;
        } else if (value === 2) {
          _self.dataEmptyMessage = '数据加载中...';
          setTimeout(() => {
            _self.data1 = Code.data6;
          }, 500);
        } else if (value === 3) {
          _self.data1 = Code.data7;
        } else if (value === 4) {
          _self.dataEmptyMessage = '暂无数据';
          _self.data1 = Code.data8;
        }
      },
      changePage2(value) {
        let _self = this;
        if (value === 1) {
          _self.data2 = Code.data;
        } else if (value === 2) {
          _self.dataEmptyMessage = '数据加载中...';
          setTimeout(() => {
            _self.data2 = Code.data2;
          }, 500);
        } else if (value === 3) {
          _self.data2 = Code.data3;
        } else if (value === 4) {
          _self.dataEmptyMessage = '暂无数据';
          _self.data2 = Code.data4;
        }
      },
      changePage3(value) {
        let _self = this;
        if (value === 1) {
          _self.data3 = Code.data;
        } else if (value === 2) {
          _self.dataEmptyMessage = '数据加载中...';
          setTimeout(() => {
            _self.data3 = Code.data2;
          }, 500);
        } else if (value === 3) {
          _self.data3 = Code.data3;
        } else if (value === 4) {
          _self.dataEmptyMessage = '暂无数据';
          _self.data3 = Code.data4;
        }
      },
      InputValueChange(value) { // 模糊搜索是传过来的值
        let _self = this;
        if (value === '1') {
          _self.AutoData = Code.AutoData;
        } else if (value === '12') {
          _self.AutoData = Code.AutoData1;
        } else if (value === '123') {
          _self.AutoData = Code.AutoData2;
        } else {
          _self.AutoData = [];
        }
      },
      selectedChange(value){
        // 选中的人数组，包含ID和Lable
      }
    }
  }
</script>
