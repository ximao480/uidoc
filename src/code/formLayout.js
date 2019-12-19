let code = {};

code.inline = `
<template>
<FormLayout :defaultColumn="defaultColumn" ref="FormLayout"
        :defaultconfig="config">
</FormLayout>   
</template>
<script>
    export default {
        data () {
            return {
                defaultColumn: 2,
                config: [
                    {
                    item: {
                        type: 'Input', // 组件类型
                        required: true, // 是否必填
                        label: 'input组件',
                        props: {
                        placeholder: '后台字段',
                        value: '666',
                        regularMessage:'请输入666', // 报错提示
                        regx:/[0-9]/g // 校验规则
                        },
                        event: {
                        'on-change': (e) => {
                            this.defaultColumn = 2;
                        }
                        }
                    }
                    },
                    {
                    show: true,// 是否显示隐藏
                    row: 1, // 行高
                    col: 1, // 列宽
                    item: {
                        type: 'Input', // 组件类型
                        required: true, // 是否必填
                        label: 'Input组件',
                        props: {
                        placeholder: '后台字段',
                        value: '',
                        regularMessage:'请输入666' // 报错提示
                        },
                        event: {
                        'on-change': (e) => {
                        }
                        }
                    }
                    },
                    {
                    show: true,// 是否显示隐藏
                    row: 1, // 行高
                    col: 1, // 列宽
                    item: {
                        type: 'Select', // 组件类型
                        required: true,
                        label: 'Select组件',
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
                    }
                ]
            }
        },
        methods: {
            
        }
    }
</script>
`;
code.label = `
<template>
<FormLayout :defaultColumn="defaultColumn" ref="FormLayout"
:defaultconfig="config">
<div slot-scope="props" slot="label" class="formlayout-label">
       <i class="ark-icon ark-icon-ios-color-fill-outline "></i> {{props.item.label}}:
 </div>

</FormLayout>
</template>
<script>
    export default {
        data () {
            return {
                defaultColumn: 2,
                config: [
                    {
                    item: {
                        type: 'Input', // 组件类型
                        required: true, // 是否必填
                        label: 'input组件',
                        props: {
                        placeholder: '后台字段',
                        value: '666',
                        regularMessage:'请输入666', // 报错提示
                        regx:/[0-9]/g // 校验规则
                        },
                        event: {
                        'on-change': (e) => {
                            this.number = 2;
                            //this.config[1].show = false;
                        }
                        }
                    }
                    },
                    {
                    show: true,// 是否显示隐藏
                    row: 1, // 行高
                    col: 1, // 列宽
                    item: {
                        type: 'Input', // 组件类型
                        required: true, // 是否必填
                        label: 'Input组件',
                        props: {
                        placeholder: '后台字段',
                        value: '',
                        regularMessage:'请输入666' // 报错提示
                        },
                        event: {
                        'on-change': (e) => {
                            this.number = 2;
                            //this.config[1].show = false;
                        }
                        }
                    }
                    },
                    {
                    show: true,// 是否显示隐藏
                    row: 1, // 行高
                    col: 1, // 列宽
                    item: {
                        type: 'Select', // 组件类型
                        required: true,
                        label: 'Select组件',
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
                    }
                ]
            }
        },
        methods: {
            
        }
    }
</script>
`;

code.content = `
<template>
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
</template>
<script>
    export default {
        data () {
            return {
                defaultColumn: 2,
                config: [
                    {
                    item: {
                        type: 'Input', // 组件类型
                        required: true, // 是否必填
                        label: 'input组件',
                        props: {
                        placeholder: '后台字段',
                        value: '666',
                        regularMessage:'请输入666', // 报错提示
                        regx:/[0-9]/g // 校验规则
                        },
                        event: {
                        'on-change': (e) => {
                            this.number = 2;
                            //this.config[1].show = false;
                        }
                        }
                    }
                    },
                    {
                    show: true,// 是否显示隐藏
                    row: 1, // 行高
                    col: 1, // 列宽
                    item: {
                        type: 'Input', // 组件类型
                        required: true, // 是否必填
                        label: 'Input组件',
                        props: {
                        placeholder: '后台字段',
                        value: '',
                        regularMessage:'请输入666' // 报错提示
                        },
                        event: {
                        'on-change': (e) => {
                            this.number = 2;
                            //this.config[1].show = false;
                        }
                        }
                    }
                    },
                    {
                    show: true,// 是否显示隐藏
                    row: 1, // 行高
                    col: 1, // 列宽
                    item: {
                        type: 'Select', // 组件类型
                        required: true,
                        label: 'Select组件',
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
                    }
                ]
            }
        },
        methods: {
            
        }
    }
</script>
`;


export default code;