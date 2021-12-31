
let code = {}

code.catalogue = `
|-- .arkdoc
|   |-- config
|   |   |-- main.js // 用于配置脚手架读取的解析路径(请用绝对路径)，默认读取.arkdoc/examples路径下所有文档文件
    |   |-- preview.js // 可配置脚手架文档区域的展示
|   |   |-- preview-head.js // head 标签 用于预览项目所依赖的第三方插件的cdn地址（包含js和css）
|   |   |-- preview-body.js // body标签  用于预览项目所依赖的第三方插件的cdn地址（包含js和css）
|   |-- example // 存放所有文档示例
`

code.mdx = `
区别是，以下标签在文档预览中会生成左侧树
<Meta title="使用说明/与Ark脚手架配合使用" />

`

code.vue = `
import Button from './Button.vue' // 或者组件库用法   Ark.Button 注意这种要自己写props

export default {
  title: '组件示例/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color', // props里的backgroundColor属性用color控件展示
      description: '手动添加的背景色描述', // 定义props的描述
    },

    size: {
      control: { type: 'select' }, // props里的size属性用下拉单选控件展示
      options: ['small', 'medium', 'large'], // select下拉框选项
    },
  },
}
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes), // 定义组件的props
  components: { Button },
  template: '<Button @onClick="onClick" v-bind="$props" />',
})

export const Primary = Template.bind({}) 
// 使用之前定义好的Template模板
// 为Primary这个示例定制传入的props
Primary.args = {
  primary: true,
}
Primary.storyName = '中文标题';

`
code.vue2 = `

`;
code.preview = `
ark preview --doc
`
code.build = `
ark build --doc
`
code.publish = `
ark publish --doc
`

export default code;