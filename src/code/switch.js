let code = {};

code.base = `
<template>
    <i-switch v-model="switch1" @on-change="change" />
</template>
<script>
    export default {
        data () {
            return {
                switch1: false
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>
`;

code.size = `
<template>
    <i-switch size="large" />
    <i-switch />
    <i-switch size="small" />
</template>
<script>
    export default {
        
    }
</script>
`;

code.custom = `
<template>
    <i-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch>
    <i-switch>
        <Icon type="md-checkmark" slot="open"></Icon>
        <Icon type="md-close" slot="close"></Icon>
    </i-switch>
    <br><br>
    <i-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </i-switch>
    <i-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </i-switch>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <i-switch :disabled="disabled" />
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true
            }
        },
    }
</script>
`;

code.loading = `
<template>
    <i-switch loading :value="true" />
    <i-switch loading :value="false" size="small" />
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;