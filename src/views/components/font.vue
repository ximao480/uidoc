<style scoped>
    .demo-font-img{
        width: 100%;
    }
    .api table{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Font 字体</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>ark-ui 的 CSS 对字体进行了统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。我们推荐 <Icon type="logo-apple"></Icon> macOS（iOS）优先的策略，在不支持苹方字体的情况，使用备用字体。</p>
            <inAnchor title="字体预览" h3></inAnchor>
            <ul>
                <li>中文字体</li>
                <img class="demo-font-img" src="../../images/font-zh.png">
                <li>英文字体</li>
                <img class="demo-font-img" src="../../images/font-en.png">
            </ul>
            <inAnchor title="字体代码" h3></inAnchor>
            <i-code lang="css" bg>font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;</i-code>
            <inAnchor title="字体使用规范" h3></inAnchor>
            <Row class="api" :gutter="16">
                <i-col span="12">
                    <table>
                        <thead>
                            <tr>
                                <th>中文字体</th>
                                <th>示例</th>
                                <th>粗细</th>
                                <th>颜色</th>
                                <th>字号</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>主标题</td>
                                <td><span style="font-size:16px;font-weight:bold;color:#464c5b;">我是标题</span></td>
                                <td>加粗</td>
                                <td>#464c5b</td>
                                <td>16px</td>
                            </tr>
                            <tr>
                                <td>次级标题</td>
                                <td><span style="font-size:14px;font-weight:bold;color:#464c5b;">我是标题</span></td>
                                <td>加粗</td>
                                <td>#464c5b</td>
                                <td>14px</td>
                            </tr>
                            <tr>
                                <td>小标题</td>
                                <td><span style="font-size:12px;font-weight:bold;color:#464c5b;">我是标题</span></td>
                                <td>加粗</td>
                                <td>#464c5b</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>正文</td>
                                <td><span style="color:#657180;">我是正文</span></td>
                                <td>默认</td>
                                <td>#657180</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>辅助文字</td>
                                <td><span style="color:#9ea7b4;">我是辅助文字</span></td>
                                <td>默认</td>
                                <td>#9ea7b4</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>失效文字</td>
                                <td><span style="color:#c3cbd6;">我是失效文字</span></td>
                                <td>默认</td>
                                <td>#c3cbd6</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>链接文字</td>
                                <td><a href="#">我是链接文字</a></td>
                                <td>默认</td>
                                <td>#3399ff</td>
                                <td>12px</td>
                            </tr>
                        </tbody>
                    </table>
                </i-col>
                <i-col span="12">
                    <table>
                        <thead>
                            <tr>
                                <th>英文字体</th>
                                <th>示例</th>
                                <th>粗细</th>
                                <th>颜色</th>
                                <th>字号</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Main Head</td>
                                <td><span style="font-size:16px;font-weight:bold;color:#464c5b;">This is an example</span></td>
                                <td>bold</td>
                                <td>#464c5b</td>
                                <td>16px</td>
                            </tr>
                            <tr>
                                <td>Sub Head</td>
                                <td><span style="font-size:14px;font-weight:bold;color:#464c5b;">This is an example</span></td>
                                <td>bold</td>
                                <td>#464c5b</td>
                                <td>14px</td>
                            </tr>
                            <tr>
                                <td>Small Head</td>
                                <td><span style="font-size:12px;font-weight:bold;color:#464c5b;">This is an example</span></td>
                                <td>bold</td>
                                <td>#464c5b</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>Text</td>
                                <td><span style="color:#657180;">This is an example</span></td>
                                <td>normal</td>
                                <td>#657180</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>Help</td>
                                <td><span style="color:#9ea7b4;">This is an example</span></td>
                                <td>normal</td>
                                <td>#9ea7b4</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>Disabled</td>
                                <td><span style="color:#c3cbd6;">This is an example</span></td>
                                <td>normal</td>
                                <td>#c3cbd6</td>
                                <td>12px</td>
                            </tr>
                            <tr>
                                <td>Link</td>
                                <td><a href="#">This is an example</a></td>
                                <td>normal</td>
                                <td>#3399ff</td>
                                <td>12px</td>
                            </tr>
                        </tbody>
                    </table>
                </i-col>
            </Row>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import inAnchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor
        },
        data () {
            return {

            }
        }
    }
</script>
