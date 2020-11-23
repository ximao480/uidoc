<style>
.doc-update .ark-timeline .ark-timeline-item-content {
  top: -14px;
}
.doc-update h2 {
  margin: 0;
  font-weight: normal;
}
.doc-update code {
  margin: 8px 0 10px;
}
.doc-update ul {
  padding-left: 22px !important;
}
.doc-update-important {
  color: #3399ff;
}
.doc-update-loop.ark-load-loop {
  animation-duration: 3s;
}
</style>
<template>
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update" >
            <TimelineItem pending>
                    <inAnchor title="1.1.4" h2></inAnchor>
                    <p>
                        <code>2020-11-23</code>
                    </p>
                    <ul>
                        <li>1.selection类型表头checkbox支持禁用</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.1.3" h2></inAnchor>
                    <p>
                        <code>2020-10-19</code>
                    </p>
                    <ul>
                        <li>去除textarea在ie中的兼容，防止matches方法报错</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.1.2" h2></inAnchor>
                    <p>
                        <code>2020-09-28</code>
                    </p>
                    <ul>
                        <li>Page优化显示</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.1.1" h2></inAnchor>
                    <p>
                        <code>2020-09-25</code>
                    </p>
                    <ul>
                        <li>ImageUpload增加双击事件</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.1.0" h2></inAnchor>
                    <p>
                        <code>2020-09-11</code>
                    </p>
                    <ul>
                        <li>修复textarea在ie中拖拽的兼容性问题</li>
                        <li>DropDownSelectFilter,DropMultiSelectFilter增加className属性</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.0.19" h2></inAnchor>
                    <p>
                        <code>2019-07-16</code>
                    </p>
                    <ul>
                        <li>table  双击行和单击事件，抛出点击位置的列数据</li>
                        <li>模糊查询 配置 图标点击事件的回调（在清除事件 配置后 不抛出）</li>
                        <li>外键模糊查询 enterType 为true 的时候 回车 和失去光标默认选中 第一条</li>
                        <li>修复checkbox 默认值 设置的时候 先选中 在取消的效果</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.0.10" h2></inAnchor>
                    <p>
                        <code>2019-06-21</code>
                    </p>
                    <ul>
                        <li>table 列浮动定位的 固定行渲染问题的优化</li>
                        <li>input ,textarea,checkbox,radio 去除外边框阴影</li>
                        <!-- <li>外键模糊 清除事件的 失去焦点的优化</li> -->
                    </ul>
                </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.0.3" h2></inAnchor>
                    <p>
                        <code>2019-06-06</code>
                    </p>
                    <ul>
                        <li>日期控件对range类型，选择后一个日期时默认选中当天日期的23:59:59</li>
                        <li>Modal控件添加@on-keyDown事件，每次键盘事件触发，返回event</li>
                    </ul>
                </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.0.2" h2></inAnchor>
                    <p>
                        <code>2019-06-04</code>
                    </p>
                    <ul>
                        <li>修复表格 对齐</li>
                    </ul>
                </TimelineItem>
             <TimelineItem pending>
                    <inAnchor title="1.0.1" h2></inAnchor>
                    <p>
                        <code>2019-06-03</code>
                    </p>
                    <ul></ul>
                        <li>修复表格 默认选中index 事件， 修复 AttachFilter 弹窗内容结构赋值</li>
                        <li>select添加属性chooseAll控制在全选是选项是否全部选中</li>
                        <li>修复外键模糊查询 下拉选中报错</li>
                        <li>table 修复CheckBox 选中表格变色 bug</li>
                        <li>form  必填字段不能监听问题  (使用时请配合 Object.assign)</li>
                        <!-- 2019-06-03 -->
                        <li>修复表格定位层级问题，给td 在合计情况下添加zindex 属性</li>
                    </ul>
                </TimelineItem>
             <TimelineItem>
                    <inAnchor title="1.0.0" h2></inAnchor>
                    <p>
                        <code>2019-01-30</code>
                    </p>
                    <ul>
                        <li>全局添加 defaultZindex 默认层级的设置，Vue.use(BurgeonUi,{ defaultZindex: 3000 });</li>
                        <li>input 添加中文输入change 拦截，中文输入完成时候在触发 change Input事件</li>
                    </ul>
                </TimelineItem>
                
        </article>
        <TimelineItem>
            <inAnchor title="0.1.38" h2></inAnchor>
            <p>
                <code>2019-01-30</code>
            </p>
            <ul>
                <li>新增 "dragImg" 图片拖拽</li>
            </ul>
            </TimelineItem>
   
        <TimelineItem>
            <inAnchor title="0.1.31" h2></inAnchor>
            <p>
                <code>2019-01-25</code>
            </p>
            <ul>
                <li>Select可搜索情况下，不展示数据问题</li>
            </ul>
        </TimelineItem>
        <TimelineItem>
            <inAnchor title="0.1.32" h2></inAnchor>
            <p>
                <code>2019-01-30</code>
            </p>
            <ul>
                <li>新增 "SplitPanel 多面板分割" 组件</li>
            </ul>
        </TimelineItem>
            
        </article>
    </i-article>
</template>
<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Code from "../../code/guide";
import inAnchor from "../../components/anchor.vue";
import issue from "../../components/issue.vue";
import mention from "../../components/mention.vue";

import version from "../../config/config";

export default {
  components: {
    iArticle,
    iCode,
    inAnchor,
    issue,
    mention
  },
  data() {
    return {
      code: Code
    };
  },
  mounted() {
    window.localStorage.setItem("version", version.version);
  },
  methods: {
    handleBefore() {
      window.open("http://v2.iviewui.com/docs/guide/update");
    }
  }
};
</script>
