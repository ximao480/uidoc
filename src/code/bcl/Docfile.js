let code = {};

code.base = `
<template>
    <Docfile
            v-model="value"
            :dataitem="dataitem"
            :serviceId="localHost"
    ></Docfile>
</template>
<script>
  export default {
    data() {
      return {
        value: [{
          "name": "package.json",
          "url": "http://r3-project-file.oss-cn-hangzhou.aliyuncs.com/haha/package.json",
          "Size": "2K"
        }],
        dataitem: {
          readonly: false, //控制字段是否可编辑
          url:'/p/cs/batchUpload',
          filesLength:2,
          filesize:2*1024*1024,
          sendData:{
            path: '',
          },
        },
        localHost:'add-app'
        http:(当前项目的),
      }
    },
  }
</script>
`;
export default code;
