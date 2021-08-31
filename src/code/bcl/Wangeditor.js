let code = {};

code.base = `
<template>
<div id="Wangeditor-demo">
  <Wangeditor v-model="value"></Wangeditor>
</div>
</template>
<script>
  export default {
    data() {
      return {
        tabAction:true,
        isActives:true, 
        value:'<h2>这个是一个测试</h2>'
      }  
    },
    methods: {
     
    },
    mounted() {
    }
  }

</script>
`;
export default code;
