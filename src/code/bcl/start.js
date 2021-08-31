let code = {};

code.start = `
// 全局使用
npm install @syman/ark-ui-bcl --save

在项目中添加 
import Bcl from '@syman/ark-ui-bcl';
import '@syman/ark-ui-bcl/publish/ark.bcl.min.css'
Vue.use(Bcl);

`;

code.import = `
npm install babel-plugin-import --save-dev

.babelrc 文件 { "plugins": [["import",
 { "libraryName": "@syman/ark-ui-bcl", 
 "libraryDirectory": "src/components" }]] }

import { DropDownSelectFilter } from '@syman/ark-ui-bcl';

`
code.tip = `
arkDropDownSelectFilter,
arkDropMultiSelectFilter,
arkMopMultiSelect,
arkWangeditor,
arkDocfile,
arkImageUpload,
arkPreviewPicture,
arkCommonTableByAgGrid

`;

code.lang = `
const locale = $Bcl.locale  // $Bcl为组件库挂在window上的全局对象
locale('en') // 参数目前支持：中文-'zh',英文-'en'
`

export default code;
