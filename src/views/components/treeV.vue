<template>
    <i-article>
        <article>
            <h1>TreeV 树形控件 虚拟列表版</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>由于Tree组件不能满足在海量数据场景下的正常使用，借鉴虚拟列表实现这一版，具体功能后续版本完善中</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo" style="width: 500px; height: 600px">
                    <i-button @click="expandAll">展开所有</i-button>
                    <i-button @click="collapseAll">收起所有</i-button>
                    <TreeV ref="treev" :listData="data" @on-check-change="change"></TreeV>
                </div>
                <div slot="desc">
                    <p>最简单的用法，展示可选中，默认展开功能。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Tree props" h3></inAnchor>
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
                            <td>listData</td>
                            <td>可嵌套的节点属性的多维数组，生成 tree 的数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>选中的 key </td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>配置项</td>
                            <td>Object</td>
                            <td>{ keygen: 'ID', childKey: 'children', renderTitle: 'title'}</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Tree options" h3></inAnchor>
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
                            <td>keygen</td>
                            <td>唯一键</td>
                            <td>string</td>
                            <td>ID</td>
                        </tr>
                        <tr>
                            <td>childKey</td>
                            <td>childKey</td>
                            <td>string</td>
                            <td>children</td>
                        </tr>
                        <tr>
                            <td>renderTitle</td>
                            <td>渲染的字段</td>
                            <td>string</td>
                            <td>title</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Tree events" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-check-change</td>
                            <td>选中的回掉</td>
                            <td>Function</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Tree methods(通过实例调用)" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>expandAll</td>
                            <td>展开所有节点</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>collapseAll</td>
                            <td>收起所有节点</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>clearAll</td>
                            <td>清除所有选中的</td>
                            <td>-</td>
                        </tr>
                        <!-- <tr>
                            <td>getCheckedAndIndeterminateNodes</td>
                            <td>获取选中及半选节点</td>
                            <td>无</td>
                        </tr> -->
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
    import Code from '../../code/treeV';
    import inAnchor from '../../components/anchor.vue';
    import studyRender from '../../components/study.vue';

    function dig(path = '0', level = 3) {
      const list = [];
      for (let i = 0; i < 10; i += 1) {
        const key = `${path}-${i}`;
        const treeNode = {
          title: key,
          key
        };

        if (level > 0) {
          treeNode.children = dig(key, level - 1);
        }

        list.push(treeNode);
      }
      return list;
    }

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            studyRender
        },
        data () {
            return {
                code: Code,
                data: dig()
            }
        },
        methods: {
          change(checked, node) {
            console.log('checked',checked)
            console.log('node',node)
          },
          expandAll() {
            console.log('expandAll')
            this.$refs.treev.expandAll()
          },
          collapseAll() {
            console.log('collapseAll')
             this.$refs.treev.collapseAll()
          }
        }
    };
</script>
