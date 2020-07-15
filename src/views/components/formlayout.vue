<template>
    <i-article>
        <article>
            <h1>FormLayout 表单</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>具有配置绘制界面的自定义配置功能，不局限于表单。</p>  
            <Alert show-icon style="margin-top: 16px">可以动态import 引入组件，赋值给type，可用于界面的绘制，
                该组件的引入的组件如果支持v-model，则数据双向绑定
            </Alert>

         
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="">
                <div slot="demo">
                     <FormLayout :defaultColumn="defaultColumn" ref="FormLayoutone"
                        :defaultconfig="config">
                        <div slot="buttonSlot">
                             <Button type="posdefault" style="margin-left:120px" @click="submit" >提交</Button>
                            <Button type="posdefault" style="margin-left:120px" @click="reset" >重置</Button>

                        </div>
                           

                        </FormLayout>    
                    
                </div>
                <i-code lang="html" slot="code">{{ code.inline }}</i-code> 
            </Demo>
            <Demo title="自定义左边文字 渲染逻辑">
                <div slot="demo">
                     <FormLayout :defaultColumn="defaultColumn" ref="FormLayout"
                        :defaultconfig="config">
                        <div slot-scope="props" slot="label" class="formlayout-label">
                               <i class="ark-icon iconfont iconios-color-fill-outline "></i> {{props.item.label}}:
                         </div>
                        </FormLayout>
                   
                </div>
                <div slot="desc">
                    <p>可以自己重写表单的渲染逻辑</p>
                </div>
                <i-code lang="html" slot="code">{{ code.label }}</i-code>
            </Demo>
             <Demo title="自定义 渲染">
                <div slot="demo">
                     <FormLayout :defaultColumn="defaultColumn" ref="FormLayout"
                        :defaultconfig="config">
                        <div slot-scope="props" slot="content">
                            <Alert show-icon style="margin-top: 16px">{{props.item.label}}</Alert>
                                <template v-if="props.item.type ==='Input'">
                                    <inAnchor title="代码示例" h2>{{props.item.label}}</inAnchor>

                                </template>
                                <template v-else>
                                        <component 
                                        :is="props.item.type" 
                                        v-on="props.item.event"  
                                        v-bind="props.item.props"/> 
                                </template>
                            </div>

                        </FormLayout>
                   
                </div>
                <div slot="desc">
                    <p>可以自己重写表单的渲染逻辑</p>
                </div>
                <i-code lang="html" slot="code">{{ code.content }}</i-code>
            </Demo>
          
          

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="FormLayout props" h3></inAnchor>
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
                            <td>defaultColumn</td>
                            <td>配置界面显示几列</td>
                            <td>Number</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>defaultconfig
                                <ul>
                                    <li><code>show</code>默认是true,是否显示</li>
                                    <li><code>row</code> 占几行行高，默认是1,</li>
                                    <li><code>col</code> 占几列列宽，默认是1,</li>
                                    <li><code>item</code> 返回,</li>
                                </ul>
                            </td>
                            <td>配置的详情配置</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="defaultColumn.item props" h3></inAnchor>
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
                            <td>field</td>
                            <td>后台字段</td>
                            <td>string</td>
                            <td></td>
                        </tr>
                         <tr>
                            <td>show</td>
                            <td>是否显示</td>
                            <td>布尔值</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>trigger</td>
                            <td>是否触发 失去焦点的校验( true 且必填 是触发)</td>
                            <td>布尔值</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>组件类型，可以直接等于import 引入的组件 </td>
                            <td>string/Object</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>required
                            </td>
                            <td>是否必填</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>组件左边文字描述</td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>props</td>
                            <td>组件属性传参</td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>event</td>
                            <td>组件的方法传参</td>
                            <td>Object</td>
                            <td>{
                                'on-change':(e)=>{
                                  console.log(e);
                                },
                                'on-clear':(e)=>{

                                }
                            }</td>
                        </tr>
                        <tr>
                            <td>soltName</td>
                            <td>组件的卡槽名字</td>
                            <td>string</td>
                            <td>{}</td>    
                        </tr>    
                    </tbody>
                </table>
                <inAnchor title="event 事件" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>获取change后的值</td>
                            <td>this.$refs[实例名称].formData </td>
                        </tr>
                        <tr>
                             <td>获取校验的值</td>
                            <td>this.$refs[实例名称].verifyMessage() </td>
                        </tr>
                        <tr>
                            <td>重置表单</td>
                            <td>this.$refs[实例名称].reset() </td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="slot 的名称" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>label</td>
                            <td>修改组件标签的展现形式 </td>
                        </tr>
                        <tr>
                            <td>tip</td>
                            <td>提示的卡槽，可以支持自定义</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>文件内容展示的,可以支持自定义</td>
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
    import Code from '../../code/formLayout';
    import inAnchor from '../../components/anchor.vue';

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
                defaultColumn: 2,
                config: [
                    {
                    item: {
                        type: 'Input', // 组件类型
                        required: true, // 是否必填
                        field:'key1',
                        label: 'Input组件',
                        props: {
                        placeholder: '后台字段',
                        value: '',
                        regularMessage:'请输入内容', // 报错提示
                        regx: /^\d+$|^\d+[.]?\d+$/ // 校验规则
                        }
                    }
                    },
                    {
                    show: true,// 是否显示隐藏
                    row: 1, // 行高
                    col: 1, // 列宽
                    item: {
                            type: 'Checkbox', // 组件类型
                            required: true, // 是否必填
                            label: '116666',
                            field:'key2',
                            props: {
                            circle:true,
                            value:false
                            }
                        }
                    },
                     {
                        item: {
                            type: 'Button', // 组件类型
                            required: true, // 是否必填
                            label: 'Button',
                            vHtml:'按钮',
                            props: {
                            }
                            
                        }
                        },
                    {
                    show: true,// 是否显示隐藏
                    row: 1, // 行高
                    col: 2, // 列宽
                    item: {
                        type: 'Select', // 组件类型
                        required: true,
                        field:'key3',
                        label: '下拉框组件',
                        props: {
                        placeholder: '后台字段',
                        options: [{
                            value: 'New York',
                            label: 'New York'
                        },
                        {
                            value: 'London',
                            label: 'London'
                        },
                        {
                            value: 'Sydney',
                            label: 'Sydney'
                        },
                        {
                            value: 'Ottawa',
                            label: 'Ottawa'
                        },
                        {
                            value: 'Paris',
                            label: 'Paris'
                        },
                        {
                            value: 'Canberra',
                            label: 'Canberra'
                        }]
                        },
                        event: {
                        'on-change': (e) => {
                            console.log(e);
                        }
                        }
                    }
                    },
                    {
                        show: true,// 是否显示隐藏
                        col: 2, // 列宽
                        item: {
                            soltName: 'buttonSlot'// 组件类型
                        }
                        }
                        
                        
                ]
                
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            reset(){
               this.$refs.FormLayoutone.reset();
            },
            submit(){
                let verifyMessage = this.$refs.FormLayoutone.verifyMessage();
                this.$Message.warning(verifyMessage[0] && verifyMessage[0].tip)
               console.log(verifyMessage,this.$refs.FormLayoutone.formData);

            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove (index) {
                this.formDynamic.items[index].status = 0;
            }
        }
    }
</script>