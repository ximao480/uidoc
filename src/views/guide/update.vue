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
            <inAnchor title="1.2.2" h2></inAnchor>
            <p>
              <code>2021-09-27</code>
            </p>
            <ul>
              <li>1.【ImageUpload】新增setHeader，可设置上传的请求头部</li>
              <li>2.【select】slotOptions优化</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.2.1" h2></inAnchor>
            <p>
              <code>2021-09-13</code>
            </p>
            <ul>
              <li>1.[auto-complete]修复匹配值自动失去焦点bug</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.2.0" h2></inAnchor>
            <p>
              <code>2021-09-06</code>
            </p>
            <ul>
              <li>1.[tab/tabPanels]切换前的校验</li>
              <li>2.[page]新增最大显示按钮数量支持</li>
              <li>3.[iCircle]渲染方式重绘</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.49" h2></inAnchor>
            <p>
              <code>2021-08-30</code>
            </p>
            <ul>
              <li>1.[国际化]国际化语言包的补充</li>
              <li>2.[modal]实例按类型在content层新增class类</li>
              <li>3.[iCircle]精准度优化</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.48" h2></inAnchor>
            <p>
              <code>2021-08-23</code>
            </p>
            <ul>
              <li>1.[input]新增htmlExp属性onBlur触发转义</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.47" h2></inAnchor>
            <p>
              <code>2021-08-16</code>
            </p>
            <ul>
              <li>1.[Tree]偏移一像素样式修改</li>
              <li>2.[DatePicker]在Safari下的兼容性问题</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.45" h2></inAnchor>
            <p>
              <code>2021-08-09</code>
            </p>
            <ul>
              <li>1.[Modal]拖拽条件下的初始定位bug，内容区域新增overflow</li>
              <li>2.[Table]单选多选api-multiple新增</li>
              <li>3.[下拉单选、多选]多选情况下选中值的已知bug</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.42" h2></inAnchor>
            <p>
              <code>2021-08-02</code>
            </p>
            <ul>
              <li>1.[Modal]蒙层优化上下滚动条</li>
              <li>2.[input.number]限制小数的输入</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.41" h2></inAnchor>
            <p>
              <code>2021-07-26</code>
            </p>
            <ul>
              <li>1.[Modal]最大宽高适配窗口大小</li>
              <li>2.[Table]单选样式增加radio样式</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.40" h2></inAnchor>
            <p>
              <code>2021-07-19</code>
            </p>
            <ul>
              <li>1.[select]选择器通过数据修改，组件未完全更新</li>
              <li>2.国际化适配</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.38" h2></inAnchor>
            <p>
              <code>2021-07-08</code>
            </p>
            <ul>
              <li>1.[select]新增on-enter事件</li>
              <li>2.[input.number]新增on-enter事件</li>
              <li>3.[FormLayout]修复props变化时组件内部不及时更新</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.37" h2></inAnchor>
            <p>
              <code>2021-06-28</code>
            </p>
            <ul>
              <li>1.[input]的on-clear触发onchange事件</li>
              <li>2.[drop-multi-select-filter]isBackRowItem在模糊搜索下未正确返回的问题</li>
              <li>3.修复外键单引号问题</li>
              <li>4.[select]修复空值判断报错</li>
              <li>5.[select]兼容性问题</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.36" h2></inAnchor>
            <p>
              <code>2021-06-22</code>
            </p>
            <ul>
              <li>1.[select]选中值带\n的问题</li>
              <li>2.[select]开启过滤时无法删除query的问题</li>
              <li>3.[modal]自适应屏幕宽度</li>
              <li>4.[drop-down-select-filter]最大高度问题</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.35" h2></inAnchor>
            <p>
              <code>2021-06-11</code>
            </p>
            <ul>
              <li>1.[input]textarea下支持clearable</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.34" h2></inAnchor>
            <p>
              <code>2021-06-10</code>
            </p>
            <ul>
              <li>1.[图片上传]优化占位图逻辑</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.33" h2></inAnchor>
            <p>
              <code>2021-05-27</code>
            </p>
            <ul>
              <li>1.下拉选择、下拉多选、气泡组件禁止输入单引号</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.32" h2></inAnchor>
            <p>
              <code>2021-05-20</code>
            </p>
            <ul>
              <li>1，[select]初始值bug</li>
              <li>2，[图片上传]新增serviceId网关</li>
              <li>3，[dropDownSelectFilter]展开层的位置优化</li>
              <li>4，[input]search查询隔离</li>
              <li>5，[table]表格监听父容器变化调整表格高度</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.31" h2></inAnchor>
            <p>
              <code>2021-05-18</code>
            </p>
            <ul>
              <li>1.[select]双向绑定与query冲突的问题</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.30" h2></inAnchor>
            <p>
              <code>2021-05-14</code>
            </p>
            <ul>
              <li>1.[select]修复多选过滤情况下无法删除query的问题</li>
              <li>2.[table]table-foot的样式问题、table重新activated时候重新调整高度</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.29" h2></inAnchor>
            <p>
              <code>2021-05-10</code>
            </p>
            <ul>
              <li>1.[inputNumber]setValue类型NaN问题</li>
              <li>2.[menu]新增当前选中状态可取消</li>
              <li>3.[AttachFilter]重复回调问题</li>
              <li>4.[Modal]关闭icon的样式问题</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.27" h2></inAnchor>
            <p>
              <code>2021-04-23</code>
            </p>
            <ul>
              <li>1.[tabs]优化DOM结构</li>
              <li>2.[AttachFilter]优化删除按钮显示</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.26" h2></inAnchor>
            <p>
              <code>2021-04-21</code>
            </p>
            <ul>
              <li>1.[input]修复正则匹配删除错误</li>
              <li>2.[input]修复textarea输入中文不响应v-model</li>
            </ul>
          </TimelineItem>
          <TimelineItem pending>
            <inAnchor title="1.1.25" h2></inAnchor>
            <p>
              <code>2021-04-16</code>
            </p>
            <ul>
              <li>1.input支持展示字数统计[wordLimit:false]</li>
              <li>2.DatePicker在v-model绑定数据时候支持返回format之后的值[vModelFormat:false]</li>
            </ul>
          </TimelineItem>
            <TimelineItem pending>
                <inAnchor title="1.1.23" h2></inAnchor>
                <p>
                    <code>2021-04-08</code>
                </p>
                <ul>
                    <li>1.input的类型为textarea支持密文的展示形式</li>
                </ul>
            </TimelineItem>
            <TimelineItem pending>
                <inAnchor title="1.1.22" h2></inAnchor>
                <p>
                    <code>2021-03-31</code>
                </p>
                <ul>
                    <li>1.处理select组件多选时展示不全问题</li>
                    <li>2.优化Carousel 循环播放有遮盖问题</li>
                </ul>
           </TimelineItem>
            <TimelineItem pending>
                <inAnchor title="1.1.21" h2></inAnchor>
                <p>
                    <code>2021-03-26</code>
                </p>
                <ul>
                    <li>1.ImageUpload图片添加length 字段，限制图片上传数量,size 字段，限制图片上传大小</li>
                    <li>2.优化日期控件时区问题展示数据错误</li>
                    <li>3.this.$Modal 弹窗添加className 属性</li>
                    <li>4.table 表头添加点击选中配置  highlight-th</li>
                    <li>5.select 优化赋值事件不触发</li>
                    <li>6. tabs 支持拖拽</li>

                </ul>
           </TimelineItem>
            <TimelineItem pending>
                <inAnchor title="1.1.19" h2></inAnchor>
                <p>
                    <code>2021-03-09</code>
                </p>
                <ul>
                    <li>1.表格合计对齐方式 totalAglin:'center,right,left'</li>
                    <li>2.修复表格合计对齐方式,默认继承表头</li>
                    <li>3.添加tdAling</li>
                    <li>4.修复表格合计内容支持自定义颜色及html内容</li>
                    <li>5.添加tree methods handleCheck 说明文档</li>
                </ul>
           </TimelineItem>
             <TimelineItem pending>
                    <inAnchor title="1.1.16" h2></inAnchor>
                    <p>
                        <code>2021-03-03</code>
                    </p>
                    <ul>
                        <li>1.表格添加点击表头事件on-column-click,抛出 event 和 当前 column</li>
                        <li>2.修复scroll 组件动态加载数据，滚动条跳动问题</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.1.12" h2></inAnchor>
                    <p>
                        <code>2021-01-13</code>
                    </p>
                    <ul>
                        <li>1.修复集成搜索组件select类型查询时不清空输入框内内容</li>
                        <li>2.外健字段模糊搜索禁止特殊字符输入</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.1.11" h2></inAnchor>
                    <p>
                        <code>2021-01-08</code>
                    </p>
                    <ul>
                        <li>1.修改输入框的正则表达式校验处理</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.1.9" h2></inAnchor>
                    <p>
                        <code>2020-12-18</code>
                    </p>
                    <ul>
                        <li>1.修改输入框的正则表达式校验处理</li>
                    </ul>
           </TimelineItem>
            <TimelineItem pending>
                    <inAnchor title="1.1.8" h2></inAnchor>
                    <p>
                        <code>2020-12-16</code>
                    </p>
                    <ul>
                        <li>1.修改下拉多选弹窗的点击区域以及弹窗自动获取焦点功能</li>
                    </ul>
           </TimelineItem>
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
