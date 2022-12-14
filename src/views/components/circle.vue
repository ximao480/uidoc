<style lang="less">
    .demo-circle-custom{
        & h5{
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }
        & p{
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }
        & span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;
            &:before{
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            };
        }
        & span i{
            font-style: normal;
            color: #3f414d;
        }
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Circle 进度环</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>图表类组件。一般有两种用途：</p>
            <ul>
                <li>显示某项任务进度的百分比；</li>
                <li>统计某些指标的占比。</li>
            </ul>
            <Alert show-icon style="margin-top: 16px" type="warning">必须使用 <code>i-circle</code> 标签。</Alert>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Row>
                        <Col span="8">
                            <i-circle :percent="80">
                                <span class="demo-circle-inner" style="font-size:24px">80%</span>
                            </i-circle>
                        </Col>
                        <Col span="8">
                            <i-circle :percent="100" stroke-color="#5cb85c">
                                <Icon type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
                            </i-circle>
                        </Col>
                        <Col span="8">
                            <i-circle :percent="35" stroke-color="#ff5500">
                        <span class="demo-circle-inner">
                            <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
                        </span>
                            </i-circle>
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="配合外部组件使用">
                <div slot="demo">
                    <i-circle :percent="percent" :stroke-color="color">
                        <Icon v-if="percent == 100" type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
                        <span v-else style="font-size:24px">{{ percent }}%</span>
                    </i-circle>
                    <ButtonGroup size="large">
                        <Button icon="ios-add" @click="add"></Button>
                        <Button icon="ios-remove" @click="minus"></Button>
                    </ButtonGroup>
                </div>
                <div slot="desc">
                    <p>通过数据的联动和逻辑控制，实现交互效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.percent }}</i-code>
            </Demo>
            <Demo title="自定义更多样式">
                <div slot="demo">
                    <i-circle
                        :style="{width: '250px', height: '250px'}"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="75"
                        stroke-linecap="square"
                        stroke-color="#43a3fb">
                        <div class="demo-circle-custom">
                            <h1>42,001,776</h1>
                            <p>消费人群规模</p>
                            <span>
                                总占人数
                                <i>75%</i>
                            </span>
                        </div>
                    </i-circle>
                </div>
                <div slot="desc">
                    <p>通过自定义<code>slot</code>和丰富的配置，可以组合出很多统计效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="仪表盘">
                <div slot="demo">
                    <i-circle :percent="80" dashboard>
                        <span class="demo-circle-inner" style="font-size:24px">80%</span>
                    </i-circle>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>dashboard</code>，可以很方便地实现仪表盘样式的进度环。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.dashboard }}</i-code>
            </Demo>



            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Circle props" h3></inAnchor>
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
                            <td>percent</td>
                            <td>百分比</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>图表的宽度和高度，单位 px</td>
                            <td>Number</td>
                            <td>120</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>图表的宽度和高度，单位 px</td>
                            <td>Object</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>stroke-linecap</td>
                            <td>进度环顶端的形状，可选值为<code>square</code>（方）和<code>round</code>（圆）</td>
                            <td>String</td>
                            <td>round</td>
                        </tr>
                        <tr>
                            <td>stroke-width</td>
                            <td>进度环的线宽，单位 px</td>
                            <td>Number</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>stroke-color</td>
                            <td>进度环的颜色</td>
                            <td>String</td>
                            <td>#2db7f5</td>
                        </tr>
                        <tr>
                            <td>trail-color</td>
                            <td>进度环背景的颜色</td>
                            <td>String</td>
                            <td>#eaeef2</td>
                        </tr>
                        <tr>
                            <td>dashboard</td>
                            <td>是否显示为仪表盘</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Circle slot" h3></inAnchor>
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
                            <td>自定义显示中间内容，内容默认垂直居中</td>
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
    import Code from '../../code/circle';
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
                code: Code,
                percent: 0
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
