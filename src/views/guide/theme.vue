<style>
    .demo-theme-img{
        width: 90%;
        margin: 0 auto;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>定制主题</h1>
            <p>ark-ui 默认提供了一套 UI 主题，并且可以在一定程度上定制新主题，以满足业务和品牌上的多样化视觉需求。</p>
            <p>ark-ui 的样式是基于 <a href="http://lesscss.org/" target="_blank">Less</a> 进行开发的，并且定义了一套样式变量，定制主题，就是编辑这个变量列表。</p>
            <!--<p>ark-ui 的样式是基于 <a href="http://lesscss.org/" target="_blank">Less</a> 进行开发的，默认以前缀 <code>.ark-</code> 作为命名空间，并且定义了一套样式变量，定制主题，就是编辑这个变量列表。</p>-->
            <img src="../../images/theme-demo.png" class="demo-theme-img">
            <inAnchor title="变量覆盖（推荐）" h2></inAnchor>
            <p>如果你的项目使用了 webpack 工程，可以通过变量覆盖的方式来实现主题定制。</p>
            <p>首先在项目中先建一个目录，比如 <code>my-theme</code>，然后在 my-theme 下建立一个 less 文件 <code>index.less</code>，并写入下面内容：</p>
            <i-code lang="auto" bg>{{ code.theme.less }}</i-code>
            <p>
                完整的变量列表可以查看 <a href="https://gitee.com/platform_frame_part_front_end/burgeon-UI/blob/ark-ui/src/styles/theme/theme.less" target="_blank">默认样式变量</a>。
            </p>
            <p>然后在入口文件 <code>main.js</code> 内导入这个 less 文件即可：</p>
            <i-code lang="auto" bg>{{ code.theme.lessImport }}</i-code>
            <!-- <inAnchor title="通过安装工具修改" h2></inAnchor>
            <p>如果没有使用 webpack，可以用我们提供的工具 <a href="https://github.com/iview/iview-theme" target="_blank">iview-theme</a> 来编译。</p>
            <p>首先需要安装<strong>主题生成工具</strong>，从 npm 全局或在项目中局部安装，以全局安装为例：</p>
            <i-code lang="auto" bg>{{ code.theme.install }}</i-code>
            <p>然后在业务工程里新建一个目录，用来存放主题文件，使用下面的命令初始化主题，这时会从 iView 仓库拉取最新的样式文件：</p>
            <i-code lang="auto" bg>{{ code.theme.init }}</i-code>
            <p>如需拉取指定版本号的 iView，使用下面的命令。（实际运行下面命令时，需将 xxx 替换成项目所使用的 iView 版本，如 “ v2.14.3 ”） </p>
            <i-code lang="auto" bg>{{ code.theme.initWithVers }}</i-code>
            <p>最后编辑 <code>my-theme/custom.less</code> 文件，用命令编译即可：</p>
            <i-code lang="auto" bg>{{ code.theme.build }}</i-code>
            <p>最终会在指定的目录下编译为 <code>iview.css</code> 的文件，只需在入口处引用它就可以了，比如在 main.js 文件：</p>
            <i-code lang="js" bg>{{ code.theme.import }}</i-code> -->
            <Alert show-icon style="margin-top: 16px">注意：在更新 @syamn/ark-ui 后，应该重新拉取。</Alert>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import inAnchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            inAnchor
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
