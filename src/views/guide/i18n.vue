<template>
    <i-article>
        <article>
            <h1>国际化</h1>
            <p>ark-ui 的所有组件文案默认使用的是中文，通过设置可以使用其它语言。</p>
            <inAnchor title="在 Webpack 中使用" h2></inAnchor>
            <p>完整引入 ark-ui</p>
            <i-code lang="js" bg>{{ code.i18n.demo }}</i-code>
            <p>按需引入 ark-ui</p>
            <i-code lang="js" bg>{{ code.i18n.demand }}</i-code>

            <Alert show-icon style="margin-top: 16px">使用 vue-i18n 时，也可以按需引入 ark-ui 组件，用法与上面的示例类似。</Alert>
            <inAnchor title="通过 CDN 使用" h2></inAnchor>
            <i-code lang="html" bg>{{ code.i18n.cdn }}</i-code>
            <!--<p>结合 vue-i18n 使用</p>-->
            <!--<i-code lang="html" bg>{{ code.i18n.cdnvuei18n }}</i-code>-->
            <inAnchor title="支持的语言" h2></inAnchor>
            <p>ark-ui 目前已支持以下语言：</p>
            <ul>
                <li>简体中文（zh-CN）</li>
                <li>繁体中文（zh-TW）</li>
                <li>英文（en-US）</li>
            </ul>
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
