<style>
    .doc-update .burgeon-timeline .burgeon-timeline-item-content{
        top: -14px;
    }
    .doc-update h2{
        margin: 0;
        font-weight: normal;
    }
    .doc-update code{
        margin: 8px 0 10px;
    }
    .doc-update ul{
        padding-left: 22px !important;
    }
    .doc-update-important{
        color: #3399ff;
    }
    .doc-update-loop.burgeon-load-loop{
        animation-duration: 3s;
    }
</style>
<template>
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update" >
             <TimelineItem pending>
                    <inAnchor title="1.0.1" h2></inAnchor>
                    <p>
                        <code>2019-06-03</code>
                    </p>
                    <ul>
                        <li>修复表格 默认选中index 事件， 修复 AttachFilter 弹窗内容结构赋值</li>
                        <li>select添加属性chooseAll控制在全选是选项是否全部选中</li>
                        <li>修复外键模糊查询 下拉选中报错</li>
                        <li>table 修复CheckBox 选中表格变色 bug</li>
                        <li>form  必填字段不能监听问题  (使用时请配合 Object.assign)</li>
                        <!-- 2019-06-03 -->
                        <li>修复表格定位层级问题，给td 在合计情况下添加zindex 属性</li>
                    </ul>
                </TimelineItem>
             <TimelineItem pending>
                    <inAnchor title="1.0.0" h2></inAnchor>
                    <p>
                        <code>2019-01-30</code>
                    </p>
                    <ul>
                        <li>全局添加 defaultZindex 默认层级的设置，Vue.use(BurgeonUi,{ defaultZindex: 3000 });</li>
                        <li>input 添加中文输入change 拦截，中文输入完成时候在触发 change Input事件</li>
                    </ul>
                </TimelineItem>
            <Timeline pending>
                <TimelineItem>
                    <inAnchor title="0.1.38" h2></inAnchor>
                    <p>
                        <code>2019-01-30</code>
                    </p>
                    <ul>
                        <li>新增 "dragImg" 图片拖拽</li>
                    </ul>
                     <article class="doc-update" >
            <Timeline pending>
                <TimelineItem>
                    <inAnchor title="0.1.31" h2></inAnchor>
                    <p>
                        <code>2019-01-25</code>
                    </p>
                    <ul>
                        <li>Select可搜索情况下，不展示数据问题</li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </article>
        <article class="doc-update" >
            <Timeline pending>
                <TimelineItem>
                    <inAnchor title="0.1.32" h2></inAnchor>
                    <p>
                        <code>2019-01-30</code>
                    </p>
                    <ul>
                        <li>新增 "SplitPanel 多面板分割" 组件</li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </article>
                </TimelineItem>     
                          
            </Timeline>
            
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import inAnchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
            inAnchor,
            issue,
            mention
        },
        data () {
            return {
                code: Code
            }
        },
        mounted () {
            window.localStorage.setItem('version', version.version);
        },
        methods: {
            handleBefore () {
                window.open('http://v2.iviewui.com/docs/guide/update');
            },

        }
    }
</script>
