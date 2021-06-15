let code = {};

code.base = `
<template>
  <div>
    <H5>图片上传</H5>
    <ImageUpload
      :serviceId="localHost"
      :PropsData="dataitem"
      v-model="valuedata"
    ></ImageUpload>
  </div>
</template>
<script>
  export default {
    components: {
      ImageUpload,
    },
    data() {
      return {
        valuedata: [],
        localHost: 'r3-app',
        // localHost: "http://jsonplaceholder.typicode.com",
        // localHost: "http://ark-kiam.dev.burgeononline.com",
        dataitem: {
          url: '/posts', // 上传地址
          // url: '/ad-app/p/cs/upload2', // 上传地址
          // url: '/p/c/upload/Avatar', // 上传地址
          sendData: {
            path: 'B1/New/',
            column: 'C1',
            tableName: 'B1'
          }, // 上传参数
          readonly: false,
          name: '上传'  //点击上传按钮名称
        }
      }
    },
    mounted() {
      console.log(ImageUpload, 'ImageUpload');
    }
  }

</script>
`;
export default code;
