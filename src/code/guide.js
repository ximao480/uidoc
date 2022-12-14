let introduce = {};
let install = {};
let start = {};
let standard = {};
let i18n = {};
let theme = {};
let loader = {};
let global = {};

introduce.install = `
$ npm install @syamn/ark-ui --save
`;

introduce.script= `
<script type="text/javascript" src="iview.min.js"></script>
`;

introduce.demo = `
<template>
    <Slider v-model="value" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
`;

install.cdn = `
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
<!-- import iView -->
<script src="//unpkg.com/iview/dist/iview.min.js"></script>
`;

install.demo = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>iview example</title>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/iview/dist/styles/iview.css">
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
    <script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"></script>
</head>
<body>
<div id="app">
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">Welcome to iView</Modal>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            visible: false
        },
        methods: {
            show: function () {
                this.visible = true;
            }
        }
    })
  </script>
</body>
</html>
`;

install.install = `
$ npm install @syman/ark-ui --save
`;

install.import = `
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import ArkUi from '@syman/ark-ui'
import '@syman/ark-ui/dist/styles/ark-ui.css'
import '@syman/ark-ui/dist/styles/bjIconfonts/iconfont.css';

//支持根据不同主题引入对应的主题文件

Vue.use(VueRouter);
Vue.use(ArkUi);

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
`;

install.need = `
import { Button, Table } from '@syman/ark-ui';
Vue.component('Button', Button);
Vue.component('Table', Table);
`;

install.warning = `
module: {
    rules: [
        { test: /iview.src.*?js$/, loader: 'babel-loader' },
        { test: /\\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
}
`;

install.babel_plugins = `
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "@syman/ark-ui",
    "libraryDirectory": "src/components"
  }]]
}
`

start.dev = `
// 如果是第一次使用，先运行init，以后直接运行dev
$ npm run init
$ npm run dev
`;

start.prod = `
$ npm run build
`;

standard.prop = `
Correct usage:
<Page :current="1" :total="100"></Page>

Incorrect usage:
<Page current="1" total="100"></Page>
`;

i18n.demo = `
import Vue from 'vue';
import Ark from '@syman/ark-ui';
import locale from '@syman/ark-ui/dist/locale/en-US';

Vue.use(Ark, { locale });
`;

i18n.demand = `
import Vue from 'vue';
import { locale, Page } from '@syman/ark-ui';
import lang from '@syman/ark-ui/dist/locale/en-US';

// configure language
locale(lang);

// import components
Vue.component('Page', Page);
`;

i18n.vuei18n6 = `
import Vue from 'vue';
import iView from 'iview';
import VueI18n from 'vue-i18n';
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';

Vue.use(VueI18n);
Vue.use(iView);
Vue.locale = () => {};

const messages = {
    en: Object.assign({ message: 'hello' }, en),
    zh: Object.assign({ message: '你好' }, zh)
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'en',  // set locale
    messages  // set locale messages
});

new Vue({ i18n }).$mount('#app');
`;

i18n.vuei18n5 = `
import Vue from 'vue';
import iView from 'iview';
import VueI18n from 'vue-i18n';
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';

Vue.use(VueI18n);
Vue.use(iView);

Vue.config.lang = 'en-US';
Vue.locale('en-US', en);
Vue.locale('zh-CN', zh);
`;

i18n.cdn = `
<script src="//cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/@syman/ark-ui@1.1.40/dist/ark.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/@syman/ark-ui@1.1.40/dist/locale/en-US.js"></script>

<script>
    Ark.lang('en-US');
</script>
`;

i18n.cdnvuei18n = `
<script src="//cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/@syman/ark-ui@1.1.40/dist/ark.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/@syman/ark-ui@1.1.40/dist/locale/en-US.js"></script>
<script src="//cdn.jsdelivr.net/npm/@syman/ark-ui@1.1.40/dist/locale/zh-CN.js"></script>

<script>
    // you need to add Polyfill if your browser doesn't support ES2015
    Vue.locale = () => {};
    const messages = {
      en: Object.assign({ message: 'gotogoto' }, Ark.langs['en-US']),
      zh: Object.assign({ message: '你好' }, Ark.langs['en-CN'])
    };

    const i18n = new VueI18n({
      locale: 'en', // set locale
      messages // set locale messages
    })
    
    new Vue({
        el: '#app',
        i18n: i18n
    })
</script>
`;


theme.less = `
@import '~@syamn/ark-ui/src/styles/index.less';

// Here are the variables to cover, such as:
@primary-color: #8c0776;
`;

theme.lessImport = `
import Vue from 'vue';
import ArkUi from '@syamn/ark-ui';
import '../my-theme/index.less';

Vue.use(ArkUi);
`;

theme.install = `
npm install iview-theme -g
`;

theme.init = `
iview-theme init my-theme
`;

theme.initWithVers = `
iview-theme init my-theme xxx
`;

theme.build = `
cd my-theme
iview-theme build -o dist/
`;

theme.import = `
import Vue from 'vue';
import iView from 'iview';
import '../my-theme/dist/iview.css';

Vue.use(iView);
`;

loader.install = `
npm install iview-loader --save-dev
`;

loader.webpack = `
module: {
    rules: [
        {
            test: /\\.vue$/,
            use: [
                {
                    loader: 'vue-loader',
                    options: {
                    
                    }
                },
                {
                    loader: 'iview-loader',
                    options: {
                        prefix: false
                    }
                }
            ]
        }
    ]
}
`;

loader.tags = `
{
    'i-affix': 'Affix',
    'i-alert': 'Alert',
    'i-anchor': 'Anchor',
    'i-anchor-link': 'AnchorLink',
    'i-auto-complete': 'AutoComplete',
    'i-avatar': 'Avatar',
    'i-back-top': 'BackTop',
    'i-badge': 'Badge',
    'i-breadcrumb': 'Breadcrumb',
    'i-breadcrumb-item': 'BreadcrumbItem',
    'i-button': 'Button',
    'i-button-group': 'ButtonGroup',
    'i-card': 'Card',
    'i-carousel': 'Carousel',
    'i-carousel-item': 'CarouselItem',
    'i-cascader': 'Cascader',
    'i-cell': 'Cell',
    'i-cell-group': 'CellGroup',
    'i-checkbox': 'Checkbox',
    'i-checkbox-group': 'CheckboxGroup',
    'i-circle': 'i-circle',
    'i-col': 'Col',
    'i-collapse': 'Collapse',
    'i-color-picker': 'ColorPicker',
    'i-content': 'Content',
    'i-divider': 'Divider',
    'i-date-picker': 'DatePicker',
    'i-drawer': 'Drawer',
    'i-dropdown': 'Dropdown',
    'i-dropdown-item': 'DropdownItem',
    'i-dropdown-menu': 'DropdownMenu',
    'i-footer': 'Footer',
    'i-form': 'Form',
    'i-form-item': 'FormItem',
    'i-header': 'Header',
    'i-icon': 'Icon',
    'i-input': 'Input',
    'i-input-number': 'InputNumber',
    'i-layout': 'Layout',
    'i-menu': 'Menu',
    'i-menu-group': 'MenuGroup',
    'i-menu-item': 'MenuItem',
    'i-sider': 'Sider',
    'i-submenu': 'Submenu',
    'i-modal': 'Modal',
    'i-option': 'Option',
    'i-option-group': 'OptionGroup',
    'i-page': 'Page',
    'i-panel': 'Panel',
    'i-poptip': 'Poptip',
    'i-progress': 'Progress',
    'i-radio': 'Radio',
    'i-radio-group': 'RadioGroup',
    'i-rate': 'Rate',
    'i-row': 'Row',
    'i-select': 'Select',
    'i-slider': 'Slider',
    'i-spin': 'Spin',
    'i-split': 'Split',
    'i-step': 'Step',
    'i-steps': 'Steps',
    'i-switch': 'i-switch',
    'i-table': 'Table',
    'i-tabs': 'Tabs',
    'i-tab-pane': 'TabPane',
    'i-tag': 'Tag',
    'i-time': 'Time',
    'i-timeline': 'Timeline',
    'i-timeline-item': 'TimelineItem',
    'i-time-picker': 'TimePicker',
    'i-tooltip': 'Tooltip',
    'i-transfer': 'Transfer',
    'i-tree': 'Tree',
    'i-upload': 'Upload'
}
`;

global.example = `
Vue.use(ArkUi, {
    transfer: true,
    size: 'large',
    componentsFix: ''
});
`;

global.exampleCDN = `
    <script>
      arkOpt = {
        'transfer': true,
        'size': 'large',
        'componentsFix': 'Xc'
      }
    </script>
    <script src="//cdn.jsdelivr.net/npm/@syman/ark-ui@1.1.40/dist/ark.min.js"></script>
`;

export default {
    introduce,
    install,
    start,
    standard,
    i18n,
    theme,
    loader,
    global
}
