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
    // 列组件筛选器
    renderParams(cellData) {
      let renderComponent = null;
      if (cellData.field === 'name') {
        renderComponent = {
          renderContainer: 'CellRenderByFunction',
          renderComponent: (h, params) => {
            return h('div', {
              domProps: {
                innerHTML: \`<h2>定制列-\${params.index}</h2>\`
              }
            })
          }
        }
      }

      // 默认返回字符串的时候，要判断其字符长度
      return renderComponent
    },


  },

  mounted() {
    this.columns = [
      { field: 'name', displayName: '标题', checkboxSelection: true, tdAlign: 'left', filter: 'agTextColumnFilter', suppressFilter: false },
      { field: 'age', displayName: '标222题', tdAlign: 'left', floatingFilter: true, filter: true, },
      { field: 'sex', displayName: '标题44441csdcsdcsdcsdcsdcscscscscscscsdcsdc', tdAlign: 'right', isagfilter: true },
      { field: 'phone', displayName: '地址', tdAlign: 'center' },
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