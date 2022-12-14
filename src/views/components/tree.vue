<template>
    <i-article>
        <article>
            <h1>Tree 树形控件</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Tree :data="data1"></Tree>
                </div>
                <div slot="desc">
                    <p>最简单的用法，展示可选中，默认展开功能。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="可勾选">
                <div slot="demo">
                    <Tree :data="data2" show-checkbox></Tree>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>show-checkbox</code> 可以对节点进行勾选。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.checkbox }}</i-code>
            </Demo>
            <Demo title="异步加载子节点">
                <div slot="demo">
                    <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
                </div>
                <div slot="desc">
                    <p>使用 <code>load-data</code> 属性可以异步加载子节点，需要给数据增加 <code>loading</code> 来标识当前是否在加载中。</p>
                    <p>load-data 第一个参数为当前节点信息；执行 load-data 的第二个参数，将需要添加的数据传入。</p>
                    <p>如果某节点不包含 <code>loading</code> 和 <code>children</code> 字段，则不会应用异步加载效果。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.lazy }}</i-code>
            </Demo>
            <Demo title="取消父子节点联动">
                <div slot="demo">
                    <Tree :data="data6" :nodeInteraction='false' show-checkbox></Tree>
                </div>
                <div slot="desc">
                    <p>使用 <code>nodeInteraction</code> 属性可以控制父子节点的联动。</p>
                    <p><code>nodeInteraction</code> 字段为<code>true</code>，则父子节点在选中时联动触发,否则父子节点不存在联动关系。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.nodeInteraction }}</i-code>
            </Demo>
            <Demo title="默认展开、选中、勾选和禁用">
                <div slot="demo">
                    <Tree :data="data4" show-checkbox multiple></Tree>
                </div>
                <div slot="desc">
                    <p>给节点设置 <code>expand</code>、<code>selected</code>、<code>checked</code> 和 <code>disabled</code> 可以将节点设置为展开、选中、勾选和禁用。</p>
                    <p>设置属性 <code>multiple</code> 可进行多选。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.more }}</i-code>
            </Demo>
            <Demo title="自定义节点内容">
                <div slot="demo">
                    <Tree :data="data5" :render="renderContent"></Tree>
                </div>
                <div slot="desc">
                    <p>使用强大的 Render 函数可以自定义节点显示内容和交互，比如添加图标，按钮等。</p>
                    <p>Render 函数的第二个参数，包含三个字段：</p>
                    <ul>
                        <li><strong>root</strong> &lt;Array&gt;：树的根节点</li>
                        <li><strong>node</strong> &lt;Object&gt;：当前节点</li>
                        <li><strong>data</strong> &lt;Object&gt;：当前节点的数据</li>
                    </ul>
                    <p>通过合理地使用 root、node 和 data 可以实现各种效果，其中，ark-ui 给每个节点都设置了一个 <code>nodeKey</code> 字段，用来标识节点的 id。</p>
                    <p>Render 函数分两种，一种是给当前树的每个节点都设置同样的渲染内容，此 render 通过 Tree 组件的属性 <code>render</code> 传递；另一种是单独给某个节点设置，在该节点的 <code>render</code> 字段内设置；同时设置时，会优先使用当前节点的 Render 函数。</p>
                    <p><study-render></study-render></p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
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
                            <td>data</td>
                            <td>可嵌套的节点属性的数组，生成 tree 的数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>是否支持多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-checkbox</td>
                            <td>是否显示多选框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>empty-text</td>
                            <td>没有数据时的提示</td>
                            <td>String</td>
                            <td>暂无数据</td>
                        </tr>
                        <tr>
                            <td>load-data</td>
                            <td>异步加载数据的方法，见示例</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <td>自定义渲染内容，见示例</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>children-key</td>
                            <td>定义子节点键</td>
                            <td>String</td>
                            <td>children</td>
                        </tr>
                        <tr>
                            <td>nodeInteraction</td>
                            <td>定义父子节点之间是否存在状态联动</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>query</td>
                            <td>模糊匹配字符</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>queryStyle</td>
                            <td>设置匹配字符样式</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>selectMessageShow</td>
                            <td>控制是否显示当前节点的选中个数</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>selectMessage</td>
                            <td>回调函数，可以自定义显示显示内容，返回参数为当前节点选中的个数</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Tree events" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-select-change</td>
                            <td>点击树节点时触发</td>
                            <td>当前已选中的节点数组和当前改变的节点数据</td>
                        </tr>
                        <tr>
                            <td>on-check-change</td>
                            <td>点击复选框时触发</td>
                            <td>当前已勾选节点的数组和当前改变的节点数据</td>
                        </tr>
                        <tr>
                            <td>on-toggle-expand</td>
                            <td>展开和收起子列表时触发</td>
                            <td>当前节点的数据</td>
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
                            <td>getCheckedNodes</td>
                            <td>获取被勾选的节点</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>getSelectedNodes</td>
                            <td>获取被选中的节点</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>handleCheck</td>
                            <td>设置节点是否选中</td>
                            <td>({ checked(true or false), nodeKey })</td>
                        </tr>
                        <!-- <tr>
                            <td>getCheckedAndIndeterminateNodes</td>
                            <td>获取选中及半选节点</td>
                            <td>无</td>
                        </tr> -->
                    </tbody>
                </table>
                <inAnchor title="children" h3></inAnchor>
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
                            <td>title</td>
                            <td>标题</td>
                            <td>String | Element String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>expand</td>
                            <td>是否展开直子节点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>禁掉响应</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disableCheckbox</td>
                            <td>禁掉 checkbox</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>selected</td>
                            <td>是否选中子节点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>是否勾选(如果勾选，子节点也会全部勾选)</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>子节点属性数组</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <td>自定义当前节点渲染内容，见示例</td>
                            <td>Function</td>
                            <td>-</td>
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
    import Code from '../../code/tree';
    import inAnchor from '../../components/anchor.vue';
    import studyRender from '../../components/study.vue';

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
                data1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data6: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ],
                data4: [
                    {
                        title: 'parent 1',
                        expand: true,
                        selected: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        disabled: true
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checked: true
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data5: [
                    {
                        title: 'parent 1',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-add',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '64px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'default',
                    size: 'small',
                }
            }
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            },
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-add'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-remove'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    };
</script>
