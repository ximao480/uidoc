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
      { field: 'name', headerName: '标题', checkboxSelection: true, tdAlign: 'left', filter: 'agTextColumnFilter', suppressFilter: false },
      { field: 'age', headerName: '标222题', tdAlign: 'left', floatingFilter: true, filter: true, },
      { field: 'sex', headerName: '标题44dc', tdAlign: 'right', isagfilter: true },
      { field: 'phone', headerName: '地址', tdAlign: 'center' },
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



export default code;