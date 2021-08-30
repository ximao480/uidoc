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
