let code = {};

code.base = `
<template>
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
    
    }
</script>
`;

code.disabled = `
<template>
    <Tabs>
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二" disabled>标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
    
    }
</script>
`;

code.icon = `
<template>
    <Tabs>
        <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
        <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
    
    }
</script>
`;

code.mini = `
<template>
    <Tabs size="small">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
    
    }
</script>
`;

code.card = `
<template>
    <Tabs type="card">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
    
    }
</script>
`;

code.closable = `
<template>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
</script>
`;

code.render = `
<template>
    <Tabs value="name1">
        <TabPane :label="label" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                label: (h) => {
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
            }
        }
    }
</script>
`;

code.extra = `
<template>
    <Tabs type="card">
        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
        <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 2
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
</script>
`;

code.animated = `
<template>
    <Tabs :animated="false">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
    
    }
</script>
`;
// .demo-tabs-style1 > .ark-tabs-card > .ark-tabs-content {
//   height: 120px;
//   margin-top: -16px;
// }
//
// .demo-tabs-style1 > .ark-tabs-card > .ark-tabs-content > .ark-tabs-tabpane {
//   background: #fff;
//   padding: 16px;
// }
//
// .demo-tabs-style1 > .ark-tabs.ark-tabs-card > .ark-tabs-bar .ark-tabs-tab {
//   border-color: transparent;
// }
//
// .demo-tabs-style1 > .ark-tabs-card > .ark-tabs-bar .ark-tabs-tab-active {
//   border-color: #fff;
// }
// .demo-tabs-style2 > .ark-tabs.ark-tabs-card > .ark-tabs-bar .ark-tabs-tab{
//   border-radius: 0;
//   background: #fff;
// }
// .demo-tabs-style2 > .ark-tabs.ark-tabs-card > .ark-tabs-bar .ark-tabs-tab-active{
//   border-top: 1px solid #3399ff;
// }
// .demo-tabs-style2 > .ark-tabs.ark-tabs-card > .ark-tabs-bar .ark-tabs-tab-active:before{
//   content: '';
//   display: block;
//   width: 100%;
//   height: 1px;
//   background: #3399ff;
//   position: absolute;
//   top: 0;
//   left: 0;
// }
code.style = `
<style>

</style>
<template>
    <Row :gutter="32">
        <Col span="12" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
            <Tabs type="card">
                <TabPane label="标签一">标签一的内容</TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
            </Tabs>
        </Col>
        <Col span="12" class="demo-tabs-style2">
            <Tabs type="card">
                <TabPane label="标签一">标签一的内容</TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
            </Tabs>
        </Col>
    </Row>
</template>
<script>
    export default {
    
    }
</script>
`;
code.draggable = `
<template>
    <Tabs type="card" :draggable="true" @on-drag-drop="handleDragDrop">
        <TabPane v-for="(tab, index) in tabList" :key="index" :label="tab.label" :name="tab.name">{{ tab.label }}</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tabList: [
                    {
                        label: '标签一',
                        name: 'name1'
                    },
                    {
                        label: '标签二',
                        name: 'name2'
                    },
                    {
                        label: '标签三',
                        name: 'name3'
                    },
                    {
                        label: '标签四',
                        name: 'name4'
                    },
                    {
                        label: '标签五',
                        name: 'name5'
                    }
                ]
            }
        },
        methods: {
            handleDragDrop (name, newName, a, b, names) {
                // names 为调整后的 name 集合
                this.tabList.splice(b,1,...this.tabList.splice(a, 1 , this.tabList[b]));
            }
        }
    }
</script>
`;
code.draggable = `
<template>
    <Tabs type="card" @on-contextmenu="handleContextMenu">
        <TabPane label="标签一" name="tab1" context-menu>标签一的内容</TabPane>
        <TabPane label="标签二" name="tab2" context-menu>标签二的内容</TabPane>
        <TabPane label="标签三" name="tab3" context-menu>标签三的内容</TabPane>
        <template slot="contextMenu">
            <DropdownItem @click.native="handleContextMenuEdit">编辑</DropdownItem>
            <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">删除</DropdownItem>
        </template>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                contextData: null
            }
        },
        methods: {
            handleContextMenu (data) {
                this.contextData = data;
            },
            handleContextMenuEdit () {
                this.$Message.info('Click edit of ' + this.contextData.name);
            },
            handleContextMenuDelete () {
                this.$Message.info('Click delete of ' + this.contextData.name);
            }
        }
    }
</script>
`;



export default code;
