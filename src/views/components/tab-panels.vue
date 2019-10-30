<template>
    <i-article>
        <article>
            <h1>TabPanels 标签面板组件</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <TabPanels
                            :tabMarginLeft="20"
                            :tabPanels="tabPanelsData">
                    </TabPanels>
                </div>
                <div slot="desc">
                    <p>基础用法</p>
                    <p></p>
                </div>
                <i-code lang="html" slot="code">{{ code.line }}</i-code>
            </Demo>

            <Demo title="多个卡片">
                <div slot="demo">
                    <TabPanels
                            type="card"
                            :tabPanels="tabPanelsData">
                    </TabPanels>
                </div>
                <div slot="desc">
                    <p>多个卡片</p>
                    <p>type属性设置为card</p>
                </div>
                <i-code lang="html" slot="code">{{ code.card}}</i-code>
            </Demo>

            <Demo title="单个卡片">
                <div slot="demo">
                    <TabPanels
                            type="singleCard"
                            :tabMarginLeft="20"
                            :tabPanels="tabPanelsData">
                    </TabPanels>
                </div>
                <div slot="desc">
                    <p>单个卡片</p>
                    <p>type的属性值为singleCard</p>
                </div>
                <i-code lang="html" slot="code">{{ code.singleCard}}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="TabPanels props" h3></inAnchor>
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
                        <td>type</td>
                        <td>页签的基本样式，可选值为 <code>line</code> 和 <code>card</code> 和 <code>singleCard</code></td>
                        <td>String</td>
                        <td>line</td>
                    </tr>
                    <tr>
                        <td>isKeepAlive</td>
                        <td>tab里的组件是否需要keepalive</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>tabPanels</td>
                        <td>标签数据</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>tabMarginLeft</td>
                        <td>每个tab距离左边的长度，单位px</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>tabHeight</td>
                        <td>tab标签的高度，单位px</td>
                        <td>Number</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <td>lineHighlight</td>
                        <td>type为line，选中时下边条超出文字的宽度，单位px</td>
                        <td>Number</td>
                        <td>5</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="tabPanels props" h3></inAnchor>
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
                        <td>label</td>
                        <td>标签名字</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>component</td>
                        <td>标签里的组件</td>
                        <td></td>
                        <td>默认组件，显示暂无信息</td>
                    </tr>
                    <tr>
                        <td>ref</td>
                        <td>标签里组件的ref</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>componentAttribute</td>
                        <td>标签里组件的属性</td>
                        <td>Object</td>
                        <td>{}</td>
                    </tr>
                    <tr>
                        <td>cilckCallback</td>
                        <td>切换标签时的回调方法，参数：index当前标签的索引，name当前标签的名字，instance当前标签里组件的实例，但是要配ref属性</td>
                        <td>String</td>
                        <td>空</td>
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
                        <!--<td>on-clear-all</td>-->
                        <!--<td>清除全部检索项时触发</td>-->
                        <!--<td> event </td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>on-clear-item</td>-->
                        <!--<td>删除单个检索项时触发</td>-->
                        <!--<td>该检索项下标index </td>-->
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
  import Code from '../../code/tab-panels';
  import inAnchor from '../../components/anchor.vue';
  import demo1 from '../demo/tab-panels-demo1'
  import demo2 from '../demo/tab-panels-demo2'

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
        tabPanelsData: [
          {
            label: '标签1', // tab标签名字
            component: demo1, // tab标签里的组件
            ref: 'test1', // tab标签里的组件的ref
            componentAttribute: {}, // 组件属性
            cilckCallback: (index,name,instance)=>{ // 点击标签时的回调方法，index为tabPanelsData数组下标，name为当前标签名称，instance为当前标签内的组件实例
              // console.log(index,name,instance);
            }
          },
          {
            label: '标签2',
            component: demo2,
            ref: 'test2'
          },
          {
            label: '标签3333',
            ref: 'test3'
          },
          {
            label: '标签4',
            cilckCallback: (index,name,instance)=>{ // 点击标签时的回调方法，index为tabPanelsData数组下标，name为当前标签名称，instance为当前标签内的组件实例
              // console.log(index,name,instance);
            }
          }
        ],
      }
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    }
  }
</script>
