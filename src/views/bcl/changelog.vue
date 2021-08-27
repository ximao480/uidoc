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
        <p>
          <code>2021-08-23</code>
        </p>
        <ul>
          <li>修复已知问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.2.5" h2></inAnchor>
        <p>
          <code>a month ago</code>
        </p>
        <ul>
          <li>修复已知问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.1.16" h2></inAnchor>
        <p>
          <code>2 month ago</code>
        </p>
        <ul>
          <li>修复已知问题</li>
        </ul>
      </TimelineItem>
      <TimelineItem pending>
        <inAnchor title="0.0.69" h2></inAnchor>
        <p>
          <code>3 month ago</code>
        </p>
        <ul>
          <li>修复已知问题</li>
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
