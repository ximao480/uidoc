<template>
    <i-article>
        <article>
            <h1>快速上手</h1>
            <inAnchor title="使用之前" h2></inAnchor>
             <Alert show-icon>
                字体和ui 框架 目前是分离状态，请注意引入字体
            </Alert>
            <p>高效的开发，离不开基础工程的搭建。在开始使用 ark-ui 之前，有必要先了解以下基础知识，我们也假设您已经写过 Vue，并掌握了下面的内容。</p>
            <ul>
                <li>
                    <a href="https://cn.vuejs.org/v2/guide/components.html" target="_blank">Vue组件</a>
                </li>
                <li>
                    <a href="https://cn.vuejs.org/v2/guide/single-file-components.html" target="_blank">单文件组件</a>
                </li>
            </ul>
            <p>以下概念贯穿 ark-ui 前后，建议开发者花点时间来了解。</p>
            <ul>
                <li>
                    <code>props</code> 传递数据
                </li>
                <li>
                    <code>slot</code> 内容分发
                </li>
                <li>
                    <code>events</code> <code>$emit</code> <code>@click</code> 事件
                </li>
            </ul>
            <Alert show-icon>
                你也可以通过 <Study type="component"></Study> 来快速入门。
            </Alert>
            <!--<inAnchor title="使用脚手架 iView Cli（推荐）" h2></inAnchor>-->
            <!--<p>使用 <router-link to="/cli">iView Cli</router-link> 可以通过可视化的方式快速构建 iView 工程，并且可以根据业务进行丰富的配置。</p>-->

            <!-- <inAnchor title="使用 Vue CLI 3" h2></inAnchor>
            <p>我们为最新的 Vue CLI 3 提供了相应的 <a href="https://github.com/iview/vue-cli-plugin-iview"target="_blank">iView 插件</a>，如果你正在用 Vue CLI 3，可以直接在插件中搜索 iview，安装插件来使用。</p>

            <inAnchor title="使用推荐工程" h2></inAnchor>
            <p>我们也为您准备好了基础工程，以此为基础开发，可以为您省去大量配置和调试环境的时间。</p>
            <p>
                推荐工程：<a href="https://github.com/iview/iview-project" target="_blank">iview-project</a>
            </p>
            <p>如果您使用了我们推荐的工程，可以略过下面的内容直接进入开发阶段，我们也推荐使用这套工程来构建您的项目。</p>
            <p>如果您希望自己配置或使用其它工程，请继续往下阅读。</p>
            <Alert show-icon>
                如果你未接触过 webpack，建议 <Study type="webpack"></Study>。
            </Alert> -->

            <inAnchor title="引入 ark-ui" h2></inAnchor>
            <p>一般在 webpack 入口页面 <code>main.js</code> 中如下配置：</p>
            <i-code lang="js" bg>{{ code.install.import }}</i-code>
            <inAnchor title="按需引用" h2></inAnchor>
            <p>借助插件 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a>可以实现按需加载组件，减少文件体积。首先安装，并在文件 <code>.babelrc</code> 中配置：</p>
            <i-code bg>{{ code.install.babel_plugins }}</i-code>
            <p>然后这样按需引入组件，就可以减小体积了：</p>
            <i-code bg>{{ code.install.need }}</i-code>
            <inAnchor title="特别提醒" h2></inAnchor>
            <ul>
                <li>按需引用仍然需要导入样式，即在 <strong>main.js</strong> 或根组件执行 <code>import '@syman/ark-ui/dist/styles/ark-ui.css'
;</code></li>
                <!--<li>按需引用是直接引用的组件库源代码，需要借助 babel 进行编译，以 webpack 为例：</li>-->
                <!--<i-code lang="js" bg>{{ code.install.warning }}</i-code>-->
            </ul>
            <inAnchor title="组件使用规范" h2></inAnchor>
            <p>使用<code>:prop</code>传递数据格式为 数字、布尔值或函数时，必须带<code>:</code>(兼容String除外，具体看组件文档)，比如：</p>
            <i-code lang="html" bg>{{ code.standard.prop }}</i-code>
            <p>在非 template/render 模式下（例如使用 CDN 引用时），组件名要分隔，例如 <code>DatePicker</code> 必须要写成 <code>date-picker</code>。</p>
            <p>以下组件，需要加前缀 <code>i-</code>：</p>
            <ul>
                <li>Button: <code>i-button</code></li>
                <li>Col: <code>i-col</code></li>
                <li>Table: <code>i-table</code></li>
                <li>Input: <code>i-input</code></li>
                <li>Form: <code>i-form</code></li>
                <li>Menu: <code>i-menu</code></li>
                <li>Select: <code>i-select</code></li>
                <li>Option: <code>i-option</code></li>
                <li>Progress: <code>i-progress</code></li>
                <li>Time: <code>i-time</code></li>
                <li>Switch: <code>i-switch</code></li>
                <li>Circle: <code>i-circle</code></li>
            </ul>
            <!-- <p>以下组件，在所有模式下，必须加前缀 <code>i-</code></p>
            ，除非使用 <router-link to="/docs/guide/iview-loader">iview-loader</router-link>：
            <ul>
                <li>Switch: <code>i-switch</code></li>
                <li>Circle: <code>i-circle</code></li>
            </ul> -->
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import inAnchor from '../../components/anchor.vue';
    import Study from '../../components/study.vue';

    export default {
        components: {
            iArticle,
            iCode,
            inAnchor,
            Study
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {

        }
    }
</script>
