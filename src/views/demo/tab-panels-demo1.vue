<template>
    <div>
        <div>
            <h3>标签1组件</h3>
        </div>
        <Radio size="large" v-model="single">Radio</Radio>
        <Radio size="default" v-model="single">Radio</Radio>
        <Radio size="small" v-model="single">Radio</Radio>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        single: true,
        phone: '',
        button2: '北京',
      };
    },
    methods: {

    }
  };
</script>
