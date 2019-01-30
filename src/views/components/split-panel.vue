<template>
    <i-article>
        <article>
            <h1>SplitPanel 多面板分割组件</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>多面板分割组件，支持水平拖动，竖直拖动。拖动条可自定义组件，自定义宽度。被分割的面板支持多个，支持自定义组件，支持某一个面板固定宽度</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="水平分割">
                <div slot="demo">
                    <div class="demo-split-panel">
                        <SplitPanel :panels="panels1">
                        </SplitPanel>
                    </div>
                </div>
                <div slot="desc">
                    <p>水平分割</p>
                    <p>将一片区域分割成可以拖动的多块区域，可以设置每块区域默认的百分比，拖动分割条的时候，每块区域等比例的放大或缩小</p>
                </div>
                <i-code lang="html" slot="code">{{ code.horizontal }}</i-code>
            </Demo>

            <Demo title="竖直分割">
                <div slot="demo">
                    <div class="demo-split-panel">
                        <SplitPanel :panels="panels1" mode="vertical">
                        </SplitPanel>
                    </div>
                </div>
                <div slot="desc">
                    <p>竖直分割</p>
                    <p>将一片区域分割成可以拖动的多块区域，可以设置每块区域默认的百分比，拖动分割条的时候，每块区域等比例的放大或缩小</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>

            <Demo title="有固定的面板">
                <div slot="demo">
                    <div class="demo-split-panel">
                        <SplitPanel :panels="panels2">
                        </SplitPanel>
                    </div>
                </div>
                <div slot="desc">
                    <p>有固定的面板</p>
                    <p>将一片区域分割成可以拖动的多块区域，可以设置固定区域，固定区域是不随着可变化区域而变化的。可以设置每块区域默认的百分比，拖动分割条的时候，每块区域等比例的放大或缩小</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fixed }}</i-code>
            </Demo>

            <Demo title="嵌套使用">
                <div slot="demo">
                    <div class="demo-split-panel">
                        <SplitPanel :panels="panels3">
                        </SplitPanel>
                    </div>
                </div>
                <div slot="desc">
                    <p>嵌套使用</p>
                    <p>可以嵌套使用</p>
                </div>
                <i-code lang="html" slot="code">{{ code.nest}}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="SplitPanel props" h3></inAnchor>
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
                        <td>mode</td>
                        <td>horizontal为水平分割，vertical为竖直分割</td>
                        <td>String</td>
                        <td>horizontal</td>
                    </tr>
                    <tr>
                        <td>panels</td>
                        <td>数组里包含了被分割的每一个区域</td>
                        <td>Array</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>divideWidth</td>
                        <td>可拖动条的宽度</td>
                        <td>Number</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>divideComponent</td>
                        <td>可拖动的组件</td>
                        <td></td>
                        <td>默认组件</td>
                    </tr>
                    </tbody>
                </table>

                <inAnchor title="panels" h3></inAnchor>
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
                        <td>component</td>
                        <td>被分割区域的组件</td>
                        <td></td>
                        <td>提示‘暂无信息’的组件</td>
                    </tr>
                    <tr>
                        <td>percentage</td>
                        <td>每个面板所占的百分比</td>
                        <td>Number</td>
                        <td>如果每个面板都没有设置这个属性，则每个面板平均分。如果某些面板有，那么没有这个属性的值就是有这个属性的平均值</td>
                    </tr>
                    <tr>
                        <td>isFixed</td>
                        <td>是否固定该面板</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>fixedWidthOrHeight</td>
                        <td>固定面板的宽度或者高度（单位px）</td>
                        <td>Number</td>
                        <td>50</td>
                    </tr>
                    </tbody>
                </table>
                <!--<inAnchor title="FkrpSelect events" h3></inAnchor>-->
                <!--<table>-->
                    <!--<thead>-->
                    <!--<tr>-->
                        <!--<th>事件名</th>-->
                        <!--<th>说明</th>-->
                        <!--<th>返回值</th>-->
                    <!--</tr>-->
                    <!--</thead>-->
                    <!--<tbody>-->
                    <!--<tr>-->
                        <!--<td>on-fkrp-selected</td>-->
                        <!--<td>选中的值时触发</td>-->
                        <!--<td>value（是个数组包含ID和lable）和 FkrpSelect 组件实例this</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-page-change</td>-->
                        <!--<td>页码更改时触发</td>-->
                        <!--<td>页码值value和 FkrpSelect 组件实例this</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-input-value-change</td>-->
                        <!--<td>设置模糊搜索后，输入值时触发</td>-->
                        <!--<td>输入的值value和 FkrpSelect 组件实例this</td>-->
                    <!--</tr>-->
                    <!--</tbody>-->
                <!--</table>-->
            </div>
        </article>
    </i-article>
</template>
<script>
  import iArticle from '../../components/article.vue';
  import iCode from 'iCode';
  import Demo from '../../components/demo.vue';
  import Code from '../../code/split-panel';
  import inAnchor from '../../components/anchor.vue';

  import demo1 from '../demo/split-panel-demo1';
  import demo2 from '../demo/split-panel-demo2';
  import demo3 from '../demo/split-panel-demo3';

  export default {
    name: 'SplitPanelDoc',
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor
    },
    data () {
      return {
        code: Code,
        panels1: [
          {
            component: demo1,
            percentage: 10
          },
          {
            percentage: 10
          },
          {
            percentage: 10
          },
        ],
        panels2: [
          {
            isFixed: true,
            component: demo2,
            fixedWidthOrHeight: 80
          },
          {
            component: demo1,
            percentage: 10
          },
          {
            percentage: 10
          }
        ],
        panels3: [
          {
            component: demo1,
            percentage: 10
          },
          {
            component: demo3,
            percentage: 10
          },
          {
            percentage: 10
          },
        ],
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style>
    .demo-split-panel {
        height: 200px;
        border: 1px solid #dcdee2;
    }
</style>