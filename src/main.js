/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import Locales from './locale';
import App from './components/app.vue';
import Routers from './router';
import Util from './libs/util';
// import iView from 'iview';
import ArkUi from '@syman/ark-ui';
import zhLocale from '@syman/ark-ui/dist/locale/zh-CN';
// import enLocale from 'iview/dist/locale/en-US';
import Env from './config/env';
import bus from './components/bus';
import '@syman/ark-ui/dist/styles/ark-ui.css'
 import '@syman/ark-ui/dist/styles/bjIconfonts/iconfont.css';
// import './styles/theme/index.less';

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import $Bcl from '@syman/ark-ui-bcl';
import '@syman/ark-ui-bcl/publish/ark.bcl.min.css'
console.log("🚀 ~ file: main.js ~ line 25 ~ Bcl", $Bcl)

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(ArkUi);
Vue.use($Bcl)
Vue.use(Viewer)



// 开启debug模式
Vue.config.debug = true;

// 设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

Vue.config.lang = lang;
bus.lang = lang;
bus.$on('on-change-lang', (lang, path) => {
    // Vue.config.lang = lang;
    // bus.lang = lang;
    window.localStorage.setItem('language', lang);
    window.location.href = path;
});

// 多语言配置
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
// const mergeEN = Object.assign(enLocale, locales['en-US']);
Vue.locale('zh-CN', mergeZH);
// Vue.locale('en-US', mergeEN);

// 路由配置
const RouterConfig = {
    routes: Routers
};
if (Env != 'local') {
    // RouterConfig.mode = 'history';
}
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    //iView.LoadingBar.start();
    bus.loading = true;
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    //iView.LoadingBar.finish();
    bus.loading = false;
    if (to.hash === '') window.scrollTo(0, 0);  // 避免 Anchor 的示例滚动
    if (_hmt) {
        _hmt.push(['_trackEvent', 'page', to.path]);
    }
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
