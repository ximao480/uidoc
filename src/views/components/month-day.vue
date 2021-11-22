<template>
    <div>
        <i-article>
            <article>
                <h1>MonthDay 月日选择器</h1>
                <inAnchor title="概述" h2></inAnchor>
                <p>选择或输入月份和日期。</p>
                <inAnchor title="代码示例" h2></inAnchor>
                <Demo title="基础用法">
                    <div slot="demo">
                        <MonthDay></MonthDay>
                    </div>
                    <div slot="desc">
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
                <Demo title="时间格式">
                    <div slot="demo">
                        <row>
                            <Col span="12">
                              <MonthDay v-model="monthday2" format="MM-dd"></MonthDay>
                            </Col>
                            <Col span="12">
                              <MonthDay v-model="monthday3" format="MM月dd日"></MonthDay>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>属性 <code>format</code> 默认为 <code>"MM-dd"</code></p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.format }}</i-code>
                </Demo>
                <Demo title="手动控制组件">
                    <div slot="demo">
                        <MonthDay
                                :open="open"
                                :value="value3"
                                confirm
                                @on-change="handleChange"
                                @on-clear="handleClear"
                                @on-ok="handleOk">
                            <a href="javascript:void(0)" @click="handleClick">
                                <Icon type="ios-clock-outline"></Icon>
                                <template v-if="value3 === ''">Select MonthDay</template>
                                <template v-else>{{ value3 }}</template>
                            </a>
                        </MonthDay>
                    </div>
                    <div slot="desc">
                        <p>对于一些定制化的场景，可以使用 slot 配合参数 <code>open</code> <code>confirm</code> 及事件来手动控制组件的显示状态，详见示例和 API。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.slot }}</i-code>
                </Demo>
                <Demo title="尺寸">
                    <div slot="demo">
                        <row :gutter="16">
                            <Col span="8">
                                <MonthDay size="small" placeholder="Select MonthDay"></MonthDay>
                            </Col>
                            <Col span="8">
                                <MonthDay placeholder="Select MonthDay"></MonthDay>
                            </Col>
                            <Col span="8">
                                <MonthDay size="large" placeholder="Select MonthDay"></MonthDay>
                            </Col>
                        </Row>
                    </div>
                    <div slot="desc">
                        <p>通过设置属性 <code>size</code> 为 <code>large</code> 或 <code>small</code> 可以调整选择器尺寸为大或小，默认不填为中。</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.size }}</i-code>
                </Demo>



                <div class="api">
                    <inAnchor title="API" h2></inAnchor>
                    <inAnchor title="TimePicker props" h3></inAnchor>
                    <table>
                        <colgroup>
                            <col>
                            <col>
                            <col>
                            <col width="200">
                        </colgroup>
                        <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                        </thead>
                        <tbody>
                            <td>type</td>
                            <td>显示类型</td>
                            <td>String</td>
                            <td>monthDay</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>format之后的值</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>展示的时间格式</td>
                            <td>String</td>
                            <td>MM-dd</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>时间选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code>，2.12.0 版本开始支持自动识别</td>
                            <td>String</td>
                            <td>bottom-start</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>是否显示底部控制栏</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>open</td>
                            <td>手动控制时间选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td>
                            <td>Boolean</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用选择器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否显示清除按钮</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>editable</td>
                            <td>文本框是否可以输入，只在没有使用 slot 时有效</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <inAnchor title="TimePicker events" h3></inAnchor>
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
                            <td>时间发生变化时触发</td>
                            <td>已经格式化后的时间，比如 09:41:00</td>
                        </tr>
                        <tr>
                            <td>on-open-change</td>
                            <td>弹出浮层和关闭浮层时触发</td>
                            <td>true | false</td>
                        </tr>
                        <tr>
                            <td>on-ok</td>
                            <td>点击确定按钮时触发</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-clear</td>
                            <td>在清空日期时触发</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                    <inAnchor title="TimePicker slot" h3></inAnchor>
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
                            <td>自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </i-article>
        <Date-type v-model="showDateModal"></Date-type>
    </div>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/month-day';
    import inAnchor from '../../components/anchor.vue';
    import DateType from '../../components/date-type.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            DateType
        },
        data () {
            return {
                code: Code,
                monthday2: '05-01',
                monthday3: '06月01日',

                showDateModal: false,
                value1: '09:41:00',
                value2: ['09:41:00', '12:00:00'],
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (time) {
                this.value3 = time;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            },
            handleShowDate () {
                this.showDateModal = true;
            }
        }
    }
</script>
