<template>
    <i-article>
        <article>
            <h1>Page 分页</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>当数据量较多时，使用分页可以快速进行数据切换。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基本">
                <div slot="demo">
                    <Page :total="100" />
                </div>
                <div slot="desc">
                    <p>基本的分页，页数过多时会自动折叠。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/YzQWzeW">{{ code.base }}</i-code>
            </Demo>
            <Demo title="每页数量">
                <div slot="demo">
                    <Page :total="100" show-sizer />
                </div>
                <div slot="desc">
                    <p>可以切换每页显示的数量。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/qBjNErR">{{ code.sizer }}</i-code>
            </Demo>
            <Demo title="电梯">
                <div slot="demo">
                    <Page :total="100" show-elevator />
                </div>
                <div slot="desc">
                    <p>快速跳转到某一页。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/MWoeYmg">{{ code.elevator }}</i-code>
            </Demo>
            <Demo title="总数">
                <div slot="demo">
                    <Page :total="100" show-total />
                </div>
                <div slot="desc">
                    <p>显示总共多少条数据，接受 slot 来自定义内容，默认显示<code v-pre>共{{ total }}条</code></p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/dyRXPWz">{{ code.total }}</i-code>
            </Demo>
            <Demo title="迷你型">
                <div slot="demo">
                    <Page :total="40" size="small" />
                    <br>
                    <Page :total="40" size="small" show-elevator show-sizer />
                    <br>
                    <Page :total="40" size="small" show-total />
                </div>
                <div slot="desc">
                    <p>设置<code>size</code>为<code>small</code>使用迷你型，迷你型拥有普通的所有功能。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/jOwrEmo">{{ code.mini }}</i-code>
            </Demo>
            <Demo title="简洁">
                <div slot="demo">
                    <Page :current="2" :total="50" simple />
                </div>
                <div slot="desc">
                    <p>设置<code>simple</code>属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/KKqMwvj">{{ code.simple }}</i-code>
            </Demo>

            <Demo title="上一页和下一页">
                <div slot="demo">
                    <Page :total="100" prev-text="Previous" next-text="Next" />
                </div>
                <div slot="desc">
                    <p>使用属性 <code>prev-text</code> 和 <code>next-text</code>，替代图标显示为文字。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/oNwLgGe">{{ code.text }}</i-code>
            </Demo>

     

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Page props" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>current</td>
                            <td>当前页码，支持 .sync 修饰符</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td>数据总数</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>page-size</td>
                            <td>每页条数</td>
                            <td>Number</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>pager-count</td>
                            <td>页码按钮的数量，当总页数超过该值时会折叠</td>
                            <td>Number</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>page-size-opts</td>
                            <td>每页条数切换的配置</td>
                            <td>Array</td>
                            <td>[10, 20, 30, 40]</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>条数切换弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code></td>
                            <td>String</td>
                            <td>bottom</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>可选值为<code>small</code>（迷你版）或不填（默认）</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>simple</td>
                            <td>简洁版</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-total</td>
                            <td>显示总数</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-elevator</td>
                            <td>显示电梯，可以快速切换到某一页</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-sizer</td>
                            <td>显示分页，用来改变<code>page-size</code></td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>自定义 class 名称</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>styles</td>
                            <td>自定义 style 样式</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>prev-text</td>
                            <td>替代图标显示的上一页文字</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>next-text</td>
                            <td>替代图标显示的下一页文字</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Page events" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>页码改变的回调，返回改变后的页码</td>
                            <td>页码</td>
                        </tr>
                        <tr>
                            <td>on-page-size-change</td>
                            <td>切换每页条数时的回调，返回切换后的每页条数</td>
                            <td>page-size</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Page slot" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>无</td>
                            <td>自定义显示总数的内容</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/page';
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
                code: Code
            }
        }
    }
</script>