<template>
    <a :href="'https://github.com/iview/iview/issues/' + id" target="_blank">#{{ id }}</a>
</template>
<script>
    export default {
        props: {
            id: {
                type: [Number, String]
            }
        }
    };
</script>

// 更新日志使用，跳转到相对应的更新日志