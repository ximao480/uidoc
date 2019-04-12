let code ={};

code.line =`
  <template>
        <div slot="demo">
            <TabPanels
                 :tabMarginLeft="20"
                 :tabPanels="tabPanelsData">
            </TabPanels>
        </div>
  </template>
  <script>
    import demo1 from '../demo/tab-panels-demo1'
    import demo2 from '../demo/tab-panels-demo2'
    
    export default {
        data () {
            return {
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
    }
</script>
`;

code.card =`
<template>
        <div slot="demo">
            <TabPanels
                 type="card"
                 :tabPanels="tabPanelsData">
            </TabPanels>
        </div>
  </template>
  <script>
    import demo1 from '../demo/tab-panels-demo1'
    import demo2 from '../demo/tab-panels-demo2'
    
    export default {
        data () {
            return {
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
    }
</script>
`;

code.singleCard=`
<template>
        <div slot="demo">
            <TabPanels
                 type="singleCard"
                 :tabMarginLeft="20"
                 :tabPanels="tabPanelsData">
            </TabPanels>
        </div>
  </template>
  <script>
    import demo1 from '../demo/tab-panels-demo1'
    import demo2 from '../demo/tab-panels-demo2'
    
    export default {
        data () {
            return {
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
    }
</script>
`;

export default code;
