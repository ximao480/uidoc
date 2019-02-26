let code = {};

code.horizontal = `
<template>
    <div class="demo-split-panel">
         <SplitPanel :panels="panels1">
         </SplitPanel>
    </div>
</template>
<script>
    import demo1 from '../demo/split-panel-demo1';
    
    export default {
        data () {
            return {
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
                ]
            }
        },
    }
</script>
<style>
    .demo-split-panel {
        height: 200px;
        border: 1px solid #dcdee2;
    }
</style>
`;

code.vertical = `
<template>
    <div class="demo-split-panel">
         <SplitPanel :panels="panels1" mode="vertical">
         </SplitPanel>
    </div>
</template>
<script>
    import demo1 from '../demo/split-panel-demo1';
    
    export default {
        data () {
            return {
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
                ]
            }
        },
    }
</script>
<style>
    .demo-split-panel {
        height: 200px;
        border: 1px solid #dcdee2;
    }
</style>
`;

code.fixed = `
<template>
    <div class="demo-split-panel">
         <SplitPanel :panels="panels1">
         </SplitPanel>
    </div>
</template>
<script>
    import demo1 from '../demo/split-panel-demo1';
    import demo2 from '../demo/split-panel-demo2';
    
    export default {
        data () {
            return {
                panels1: [
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
                ]
            }
        },
    }
</script>
<style>
    .demo-split-panel {
        height: 200px;
        border: 1px solid #dcdee2;
    }
</style>
`;

code.nest = `
<template>
    <div class="demo-split-panel">
         <SplitPanel :panels="panels1" mode="vertical">
         </SplitPanel>
    </div>
</template>
<script>
    import demo1 from '../demo/split-panel-demo1';
    import demo3 from '../demo/split-panel-demo3';
    
    export default {
        data () {
            return {
                panels1: [
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
                ]
            }
        },
    }
</script>
<style>
    .demo-split-panel {
        height: 200px;
        border: 1px solid #dcdee2;
    }
</style>
`;

export default code;