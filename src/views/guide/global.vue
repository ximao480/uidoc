<template>
    <i-article>
        <article>
            <h1>全局配置</h1>
            <p>使用 ark-ui 时，可以进行全局配置组件的一些属性。</p>
            <p>目前只支持配置 <code>transfer</code> 、 <code>size</code> 和 <code>componentsFix</code> 三个属性。组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。</p>
            <ul>
                <li>
                    <strong>transfer</strong>：所有带浮层的组件，是否将浮层放置在 body 内，默认为不设置，详见各组件默认的 transfer 值。可选值为 <code>true</code> 或 <code>false</code>。
                </li>
                <li>
                    <strong>size</strong>：所有带有 size 属性的组件的尺寸，默认为不设置，详见各组件默认的 size 值。可选值为 <code>default</code>、<code>small</code> 或 <code>large</code>。
                </li>
                <li>
                    <strong>componentsFix</strong>：所有全局注册的components的name前缀，用以区分和其他组件库同时使用。默认空。
                </li>
            </ul>
          <inAnchor title="在 Webpack 中使用" h2></inAnchor>
          <p>用法如下：</p>
          <i-code lang="auto" bg>{{ code.global.example }}</i-code>
          <inAnchor title="通过 CDN 使用" h2></inAnchor>
          <p>用法如下：</p>
          <i-code lang="auto" bg>{{ code.global.exampleCDN }}</i-code>
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
