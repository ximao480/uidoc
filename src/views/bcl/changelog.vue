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
        <inAnchor title="1.3.0" h2></inAnchor>
        <ul>
          <li>1.字段扩展属性添加行转列配置</li>
          <li>2.深拷贝函数bug</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.2.3" h2></inAnchor>
        <ul>
          <li>1.下拉单选模糊查询问题</li>
          <li>2.下载组件没给链接加网关的问题</li>
          <li>3.富文本a标签路径问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.2.2" h2></inAnchor>
        <ul>
          <li>1.移动端表格双击事件失效.新增设置window.arkui_BCL_in_mobile = true兼容移动端</li>
          <li>2.默认开启表格滚动防抖</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.2.1" h2></inAnchor>
        <ul>
          <li>1.优化表格合计总计逻辑</li>
          <li>2.优化数据兼容性。行数据可以传[{key:value}]格式。之前部分场景如果不按[{key:{val: value}}]这种格式传会影响功能使用</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.2.0" h2></inAnchor>
        <ul>
          <li>1.优化表格体积</li>
          <li>1.修复表格表头样式问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.1.4" h2></inAnchor>
        <ul>
          <li>1.修改文件下载失败问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.1.3" h2></inAnchor>
        <ul>
          <li>1.当表格文本是数字0时，渲染不出来内容</li>
          <li>2.修复表格自适应问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.1.2" h2></inAnchor>
        <ul>
          <li>1.修复富文本滚动问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.1.1" h2></inAnchor>
        <ul>
          <li>1.由于项目组反馈使用起来不方便，vue-i18n改回组件库内置，不再使用cdn</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.1.0" h2></inAnchor>
        <ul>
          <li>1.升级ag表格的底层ag-grid，从17.1.1版本升级到新的26.0.0版本</li>
          <li>2.新增日期快捷选项的扩展属性</li>
          <li>3.vue-i18n改为cdn引入</li>
          <li>4.支持扩展国际化语言</li>
          <li>**从1.1.0版本开始需要用cdn引入vue-i18n**</li>
          <li>**使用的r3框架版本至少需要v3.1.0**</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.0.6" h2></inAnchor>
        <ul>
          <li>1.兼容弹窗多选的空值问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.0.5" h2></inAnchor>
        <ul>
          <li>1.子表点击显示隐藏列失效</li>
          <li>2.主表点击显示所有列后，取消固定列功能失效</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.0.4" h2></inAnchor>
        <ul>
          <li>1.修复表格不传datas参数会报错。且影响一些功能的正常运转</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="1.0.0" h2></inAnchor>
        <ul>
          <li>1.支持国际化</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.3.10" h2></inAnchor>
        <ul>
          <li>fix: 1.表格激活时有时没自适应</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.3.9" h2></inAnchor>
        <ul>
          <li>fix: 1.表格合计样式问题 2.扩展属性有多余组件 3.oms激活表格时表头抖动 4.修改编译方式</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.3.7" h2></inAnchor>
        <ul>
          <li>feat: 1.支持设置表格行高自动垂直居中 2.扩展属性【固定列】支持校验 fix: 1.扩展属性搜索问题 2.表格排序报错</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.3.6" h2></inAnchor>
        <ul>
          <li>update: 1.调整表头序号的渲染</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.3.5" h2></inAnchor>
        <ul>
          <li>fix: 1.部分项目组表格自适应宽度会严重抖动且没有撑满 2.表格居中对齐问题 3.表格图片只能预览一张 4.去掉表头警告 5.加了一个回调触发表格自适应</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.3.4" h2></inAnchor>
        <ul>
          <li>fix: 1.文本渲染组件如果通过id来判断渲染的dom不太准确。项目组可能没有id列 2._autoSizeColumns函数报错</li>
        </ul>
      </TimelineItem>

    </article>
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
