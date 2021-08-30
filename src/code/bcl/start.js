let code = {};

code.start = `
// 全局使用
npm install @syman/ark-ui-bcl --save

在项目中添加 
import Bcl from '@syman/ark-ui-bcl';
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
arkEnumerableInput,
arkExtensionProperty,
arkCommonTableByAgGrid

`;

export default code;
