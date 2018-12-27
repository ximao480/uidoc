<template>
    <i-article>
        <article>
            <h1>FkrpSelect 下拉选择组件</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>FC组件，支持下拉单选和下拉多选，单选和多选都支持模糊搜索。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="下拉单选">
                <div slot="demo">
                    <FkrpSelect :single="true"
                                :data="data"
                                :totalRowCount="totalRowCount"
                                :pageSize="pageSize"
                                @on-page-change="changePage"
                                @on-fkrp-selected="selectedChange"
                                :dataEmptyMessage="dataEmptyMessage">
                    </FkrpSelect>
                </div>
                <div slot="desc">
                    <p>下拉单选</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_select_single }}</i-code>
            </Demo>

            <Demo title="下拉单选并且有模糊搜索的用法">
                <div slot="demo">
                    <FkrpSelect :single="true"
                                :data="data1"
                                :totalRowCount="totalRowCount"
                                :pageSize="pageSize"
                                @on-page-change="changePage1"
                                @on-input-value-change="InputValueChange"
                                @on-fkrp-selected="selectedChange"
                                :dataEmptyMessage="dataEmptyMessage"
                                :columns="columns"
                                :AutoData="AutoData">
                    </FkrpSelect>
                </div>
                <div slot="desc">
                    <p>下拉单选,模糊搜索可以输入1或者12或者123测试</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_select_single1 }}</i-code>
            </Demo>

            <Demo title="下拉多选用法">
                <div slot="demo">
                    <FkrpSelect :single="false"
                                :totalRowCount="totalRowCount"
                                :pageSize="pageSize"
                                @on-page-change="changePage2"
                                :dataEmptyMessage="dataEmptyMessage"
                                :data="data2">
                    </FkrpSelect>
                </div>
                <div slot="desc">
                    <p>下拉多选，选中的数据超过两条置灰</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_select_multiple }}</i-code>
            </Demo>

            <Demo title="下拉多选有默认值用法">
                <div slot="demo">
                    <FkrpSelect :single="false"
                                :totalRowCount="totalRowCount"
                                :pageSize="pageSize"
                                :defaultSelected="defaultSelected"
                                @on-page-change="changePage3"
                                :dataEmptyMessage="dataEmptyMessage"
                                :data="data3">
                    </FkrpSelect>
                </div>
                <div slot="desc">
                    <p>下拉多选，有默认数据</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_select_multiple1 }}</i-code>
            </Demo>

            <ad></ad>

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
                        <td>Array</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>columns</td>
                        <td>模糊搜索要显示的列</td>
                        <td>Array</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>dataEmptyMessage</td>
                        <td>无数据的时候提示</td>
                        <td>String</td>
                        <td>暂无数据</td>
                    </tr>
                    <tr>
                        <td>defaultSelected</td>
                        <td>下拉多选 默认选中数据</td>
                        <td>Array</td>
                        <td>空</td>
                    </tr>
                    <!--<tr>-->
                        <!--<td>icon</td>-->
                        <!--<td>输入框尾部图标，仅在 text 类型下有效</td>-->
                        <!--<td>String</td>-->
                        <!--<td>-</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>prefix</td>-->
                        <!--<td>输入框头部图标</td>-->
                        <!--<td>String</td>-->
                        <!--<td>-</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>suffix</td>-->
                        <!--<td>输入框尾部图标</td>-->
                        <!--<td>String</td>-->
                        <!--<td>-</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>search</td>-->
                        <!--<td>是否显示为搜索型输入框</td>-->
                        <!--<td>Boolean</td>-->
                        <!--<td>false</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>enter-button</td>-->
                        <!--<td>开启 search 时可用，是否有确认按钮，可设为按钮文字</td>-->
                        <!--<td>Boolean | String</td>-->
                        <!--<td>false</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>rows</td>-->
                        <!--<td>文本域默认行数，仅在 textarea 类型下有效</td>-->
                        <!--<td>Number</td>-->
                        <!--<td>2</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>autosize</td>-->
                        <!--<td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td>-->
                        <!--<td>Boolean | Object</td>-->
                        <!--<td>false</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>number</td>-->
                        <!--<td>将用户的输入转换为 Number 类型</td>-->
                        <!--<td>Boolean</td>-->
                        <!--<td>false</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>autofocus</td>-->
                        <!--<td>自动获取焦点</td>-->
                        <!--<td>Boolean</td>-->
                        <!--<td>false</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>autocomplete</td>-->
                        <!--<td>原生的自动完成功能，可选值为 off 和 on</td>-->
                        <!--<td>String</td>-->
                        <!--<td>off</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>element-id</td>-->
                        <!--<td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>-->
                        <!--<td>String</td>-->
                        <!--<td>-</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>spellcheck</td>-->
                        <!--<td>原生的 spellcheck 属性</td>-->
                        <!--<td>Boolean</td>-->
                        <!--<td>false</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>wrap</td>-->
                        <!--<td>原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效</td>-->
                        <!--<td>String</td>-->
                        <!--<td>soft</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>regx</td>-->
                        <!--<td>正则表达式</td>-->
                        <!--<td>正则表达式的类型</td>-->
                        <!--<td>无</td>-->
                    <!--</tr>-->
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
                        <td>onFkrpSelected</td>
                        <td>选中的值时触发</td>
                        <td>value（是个数组包含ID和lable）和 FkrpSelect 组件实例this</td>
                    </tr>
                    <tr>
                        <td>on-page-change</td>
                        <td>页码更改时触发</td>
                        <td>页码值value和 FkrpSelect 组件实例this</td>
                    </tr>
                    <tr>
                        <td>on-input-value-change</td>
                        <td>设置模糊搜索后，输入值时触发</td>
                        <td>输入的值value和 FkrpSelect 组件实例this</td>
                    </tr>
                    <!--<tr>-->
                        <!--<td>on-focus</td>-->
                        <!--<td>输入框聚焦时触发</td>-->
                        <!--<td>event和input组件实例this</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-blur</td>-->
                        <!--<td>输入框失去焦点时触发</td>-->
                        <!--<td>event和input组件实例this</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-keyup</td>-->
                        <!--<td>原生的 keyup 事件</td>-->
                        <!--<td>event和input组件实例this</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-keydown</td>-->
                        <!--<td>原生的 keydown 事件</td>-->
                        <!--<td>event和input组件实例this</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-keypress</td>-->
                        <!--<td>原生的 keypress 事件</td>-->
                        <!--<td>event和input组件实例this</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-search</td>-->
                        <!--<td>开启 search 时可用，点击搜索或按下回车键时触发</td>-->
                        <!--<td>value和input组件实例this</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-regx-check</td>-->
                        <!--<td>添加正则后，校验出错的时候触发</td>-->
                        <!--<td>正确的值value和input组件实例this和错误的值errorValue</td>-->
                    <!--</tr>-->
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
        defaultSelected: Code.defaultSelected,
        dataEmptyMessage: '数据加载中...', // 无数据的提示
        columns:['name','value']// 展现的组
      }
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