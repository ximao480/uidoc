let code = {};

code.base = `
<template>
  <arkCommonTableByAgGrid
  ref="agGrid"
  height="300px"
  :columns="columns"
  :data="rows"
  :renderParams="renderParams"
  ></arkCommonTableByAgGrid>
</template>

<script>
export default {
  methods: {
    // 列组件定制渲染
    renderParams(cellData) {
      let renderComponent = null;
      if (cellData.field === 'age') {
        // 方式1:直接传入.vue组件
        // renderComponent = {
        //   renderContainer: 'CellRender', // 设置渲染方式为vue组件
        //   renderComponent: MyComponent
        // }
        // 方式2:传入render组件
        renderComponent = {
          renderContainer: 'CellRenderByFunction', // 设置渲染方式为render函数
          renderComponent: (h, params) => {
            return h('div', {
              domProps: {
                innerHTML: \`<div>定制列-\${params.value}</div>\`
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
  }
}
</script>
`

code.sort = `
<template>
  <arkCommonTableByAgGrid
  ref="agGrid"
  height="300px"
  :options="{floatingFilter:false}"
  :columns="columns"
  :data="rows"
  ></arkCommonTableByAgGrid>
</template>

<script>
export default {
  mounted() {
    this.columns = [
      { field: 'age', headerName: '标222题', isorder: true},
      { field: 'sex', headerName: '标题44dc',isorder: true,sort:'asc'  },
      { field: 'phone', headerName: '地址', isorder: true,sort:'desc' },
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
  }
}
</script>
`
code.cellspan = `
<template>
  <arkCommonTableByAgGrid
  height="300px"
  :options="{suppressRowTransform: true}"
  :columns="columns2"
  :data="rows2"
  ></arkCommonTableByAgGrid>
</template>

<script>
export default {
  mounted() {
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
        // 设置单元格样式,'show-cell'是组件库后期写好的一个类名(非ag-grid自带的)，作用是设置背景为白色
        cellClassRules: {
          'show-cell': (params => {
            return params.value === '3行' // 将跨行的单元格背景设置白色。不设置的话看不出跨行效果
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
`
code.eventList = `
onGridReady,
getContextMenuItems,
getMainMenuItems,
onCellClicked,
onCellDoubleClicked,
onRowClicked,
onRowDoubleClicked,
onSelectionChanged,
onSortChanged,
onVirtualColumnsChanged,
onColumnVisible,
onColumnMoved,
onColumnPinned,
onRowDataChanged,
onBodyScroll,
getRowClass,
onFilterChanged,
onColumnResized
`

export default code;