<template>
  <i-article>
    <article>
      <h1>commonTableByAgGrid ag表格</h1>
      <inAnchor
        title="概述"
        h2
      ></inAnchor>
      <p>封装了ag-grid的基本功能。</p>
      <p>【注意!!!】从1.0.4版本开始，表格参数options对象可以不传datas空对象了。之前版本不传会报错且导致表格很多功能失效</p>
      <p>【注意!!!】从1.1.0版本开始，我们对底层ag-grid升级到了最新版本，使接口跟ag官网基本保持一致</p>
      <inAnchor
        title="代码示例"
        h2
      ></inAnchor>

      <Demo title="基础用法">
        <div slot="demo">
          <arkCommonTableByAgGrid
            ref="agGrid"
            height="300px"
            :columns="columns"
            :data="rows"
            :renderParams="renderParams"
          ></arkCommonTableByAgGrid>
        </div>
        <i-code
          lang="html"
          slot="code"
        >{{ code.base }}</i-code>
      </Demo>

      <Demo title="列排序">
        <div slot="demo">
          <arkCommonTableByAgGrid
            ref="agGrid"
            height="300px"
            :options="{floatingFilter:false}"
            :columns="columns1"
            :data="rows1"
          ></arkCommonTableByAgGrid>
        </div>
        <i-code
          lang="html"
          slot="code"
        >{{ code.sort }}</i-code>
      </Demo>

      <Demo title="合并单元格">
        <div slot="desc">
          <p style='color:red;'>注意事项!!!：</p>
          <p>1.使用行合并<code>rowSpan</code>时，需要给表格传参数<code>suppressRowTransform: true</code>(ag-grid官网有说明这点)</p>
          <p>2.使用行合并<code>rowSpan</code>时，需要自己根据情况，给跨行的单元格设置背景色为白色。不设置的话显示默认背景色透明，看起来就好像合并没生效一样，其实是因为单元格透明后可以看见被遮挡的单元格的内容(ag-grid官网有说明这点)</p>
          <p>3.使用行合并<code>rowSpan</code>时，尽量保证最后一行不出现跨行。会发生什么现象，好奇的话可以点击本案例里表格【描述】那列进行排序，可以看到。官网没说怎么处理，这里提供两种方案参考解决：1.见本案例中注释掉的代码部分，即手动设置行高 2.把最后一行跨行单元格恢复成透明背景</p>
        </div>
        <div slot="demo">
          <arkCommonTableByAgGrid
            ref="agGrid"
            height="300px"
            :options="{suppressRowTransform: true}"
            :columns="columns2"
            :data="rows2"
          ></arkCommonTableByAgGrid>
        </div>
        <i-code
          lang="html"
          slot="code"
        >{{ code.cellspan }}</i-code>
      </Demo>

      <div class="api">
        <inAnchor
          title="API"
          h2
        ></inAnchor>
        <inAnchor
          title="commonTableByAgGrid props"
          h3
        ></inAnchor>
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
              <td>options</td>
              <td>对应ag-grid的gridOptions的配置。注意：1.1.0版本之前的组件库里的ag-grid版本较低，可能会出现实际用的api名称与最新ag-grid官网提供的api不一致的情况出现</td>
              <td>Object</td>
              <td>可参考ag-grid官网的网格属性</td>
            </tr>
            <tr>
              <td>height</td>
              <td>表格的高度。例如 300px</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>data</td>
              <td>表格行数据</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>columns</td>
              <td>表格列数据。相当于ag表格的列定义(columnDef)</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>renderParams</td>
              <td>用于自定义单元格渲染组件(详细用法见下文)</td>
              <td>Function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <inAnchor
          title="commonTableByAgGrid events"
          h3
        ></inAnchor>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>grid-ready</td>
              <td>表格准备完毕</td>
              <td>event(返回ag-grid的原生事件对象。包含表格的api和表格数据)</td>
            </tr>
            <tr>
              <td>on-row-dblclick</td>
              <td>行双击事件</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-selection-change</td>
              <td>行选中事件</td>
              <td>rows: 选中的行数据</td>
            </tr>
            <tr>
              <td>on-sort-change</td>
              <td>列排序回调事件</td>
              <td>event</td>
            </tr>
            <tr>
              <td>row-data-changed</td>
              <td>使用api.setRowData()或通过更改rowDatabound属性将新数据设置到网格中会触发该事件</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-column-moved</td>
              <td>列移动回调</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-column-pinnedk</td>
              <td>列固定回调</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-row-click</td>
              <td>行单击回调</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-cell-double-click</td>
              <td>单元格双击回调</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-cell-single-click</td>
              <td>单元格单击回调</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-column-visible</td>
              <td>显示或隐藏列时触发回调</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-column-resized</td>
              <td>表格列宽度变化</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-body-scroll</td>
              <td>表格水平滚动</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-filter-changed</td>
              <td>表格列过滤后触发回调</td>
              <td>event</td>
            </tr>
            <tr>
              <td>on-grid-size-changed</td>
              <td>表格大小变化后触发回调</td>
              <td>event</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <inAnchor
          title="注意事项"
          h2
        ></inAnchor>
        <p>
          1.使用时，需要注意是否会覆盖掉组件库里内置的事件。目前组件库内置事件有如下几个：
        </p>
        <i-code
          lang="html"
          slot="code"
        >{{ code.eventList }}</i-code>
        <p>2.renderParams函数返回对象里的`renderComponent`支持组件和`render`函数渲染两种方式。推荐直接传入组件，因为传render函数的话，组件的注册流程是业务组件库处理的，所以render函数里的vue实例是指向业务组件库的vue，如果render组件里用到项目里的router或者vuex会出现拿不到值的情况，解决方案是，手动传给你render组件router和vuex</p>
        <p>3.业务组件库1.1.0版本之前，ag表格中没提到属性和方法，可以去`ag-grid`[官方文档](https://www.ag-grid.com/javascript-grid/getting-started/)(网上慢的话，试下翻墙看。或者看[ag中文文档](http://www.itxst.com/ag-grid/z2mbaiju.html))上查阅。大部分属性和方法业务组件是已经支持的，可以试着调用一下。特别注意：使用官网上事件回调时，如果不生效，试着改成on开头。例如官网上有方法gridReady，实际要写成onGridReady(这个因为我们的ag企业版的版本太低，跟官网api命名有些出入)</p>
        <p>4.建议传值给表格时，先赋值列数据，再赋值行数据</p>
        <p>5.表格配置项属性`options`不是个响应式数据，请在表格渲染前就定义好</p>
        <p>6.行数据和列数据支持响应式更新。需要注意一点，更新条件是通过数组浅比较实现的，所以如果只改数据里某一项的值并不会自动更新。解决这个问题可以通过返回一个新数组实现数据响应式更新，例如`rowData = [...rowData]</p>
        <p>7.业务组件库1.1.0版本及以上版本，如果出现表格样式问题，需要查看项目里是否引用了旧版ag-grid.css和ag-theme-balham.css的样式(包括node_modules里面也要搜索下。或者升级@syman/burgeon-r3库到3.1.0以上,@syman/burgeon-r3-component库升级到到2.0.0以上，因为这个两个包的之前也含有旧版表格样式)，然后删除掉，因为旧版表格样式会影响新版表格</p>
      </div>

      <div>
        <inAnchor
          title="功能答疑"
          h2
        ></inAnchor>

        <Alert show-icon>
          <p>Q: 如何获取AG表格的原生方法</p>
          <p>A: 给组件节点加上一个`ref`属性，例如`ref=''table`之后通过`this.$refs.table`可以拿到ag表格原生的`api`和`columnApi`方法。例如`const {api, columnApi} = this.$refs.table`</p>
        </Alert>
      </div>
    </article>
  </i-article>
</template>

<script type="text/ecmascript-6">
import iArticle from '../../components/article.vue';
import iCode from 'iCode';
import Demo from '../../components/demo.vue';
import inAnchor from '../../components/anchor.vue';
import Mixin from '../../mixins/common';
import Code from '../../code/bcl/commonTableByAgGrid';

export default {
  name: '',

  components: {
    iArticle,
    iCode,
    Demo,
    inAnchor,
  },

  mixins: [Mixin],

  data() {
    return {
      code: Code,
      columns: [],
      rows: [],
      columns1: [],
      rows1: [],
      columns2: [],
      rows2: [],
    }
  },

  methods: {
    // 列组件定制渲染
    renderParams(cellData) {
      let renderComponent = null;
      if (cellData.field === 'age') {
        // 方式1:直接传入.vue组件
        // renderComponent = {
        //   renderComponent: MyComponent
        // }
        // 方式2:传入render组件
        renderComponent = {
          renderContainer: 'CellRenderByFunction',
          renderComponent: (h, params) => {
            return h('div', {
              domProps: {
                innerHTML: `<div>定制列-${params.value}</div>`
              }
            })
          }
        }
      }
      return renderComponent
    },
  },

  mounted() {
    this.columns = [
      { field: 'name', headerName: '姓名', checkboxSelection: true, tdAlign: 'left', filter: 'agTextColumnFilter', suppressFilter: false },
      { field: 'age', headerName: '年龄', tdAlign: 'left', floatingFilter: true, filter: true, },
      { field: 'sex', headerName: '性别', tdAlign: 'right', isagfilter: true, agfilter: 'FUZZY' },
      { field: 'phone', headerName: '手机', tdAlign: 'center' },
    ]

    this.rows = [
      {
        name: '测试cc',
        age: 12,
        sex: 'ss',
        phone: 12312222
      },
      {
        name: '测试dd',
        age: 1212,
        sex: '难',
        phone: 12313213
      },
      {
        name: '测试111',
        age: 1332,
        sex: 'mmmmmmm',
        phone: 123123123
      },
    ]

    this.columns1 = [
      { field: 'age', headerName: '标222题', isorder: true },
      { field: 'sex', headerName: '标题44dc', isorder: true, sort: 'asc' },
      { field: 'phone', headerName: '地址', isorder: true, sort: 'desc' },
    ]

    this.rows1 = [
      {
        name: '测试cc',
        age: 12,
        sex: 'ss',
        phone: 12312222
      },
      {
        name: '测试dd',
        age: 1212,
        sex: '难',
        phone: 12313213
      },
      {
        name: '测试111',
        age: 1332,
        sex: 'mmmmmmm',
        phone: 123123123
      },
    ]


    this.columns2 = [
      {
        field: 'name', headerName: '性别',
        colSpan: params => {
          // 行数据name值为'合并列啊啊啊啊啊啊啊啊'就跨两列
          return params.data.name === '合并列啊啊啊啊啊啊啊啊' ? 2 : 1
        },
      },
      {
        field: 'age', headerName: '年龄',
      },
      { field: 'sex', headerName: '性别', },
      {
        field: 'desc', headerName: '描述', isorder: true,
        rowSpan: params => {
          // 行数据desc值为'3行'时就跨两行
          const rows = params.data.desc === '3行' ? 2 : 1
          // 如果表格在最后一行出现跨行。觉得显示不好看，可以调整该行高度
          // 设置行高为 跨行数*行高
          // if (params.node.rowIndex === this.rows2.length - 1 && params.data.desc === '3行') {
          //   params.node.setRowHeight(rows * params.node.rowHeight)
          // }
          return rows
        },
        cellClassRules: {
          'show-cell': (params => {
            return params.value === '3行' // 将跨行的单元格背景设置白色
          }),
        },
      },
    ]

    this.rows2 = [
      {
        name: '测试111',
        age: 33,
        sex: 'c',
        desc: '3行'
      },
      {
        name: '测试dd',
        age: 22,
        sex: 'b',
        desc: '2行'
      },
      {
        name: '合并列啊啊啊啊啊啊啊啊',
        age: 12,
        sex: 'a',
        desc: '1行',
      },
    ]
  }
}
</script>
