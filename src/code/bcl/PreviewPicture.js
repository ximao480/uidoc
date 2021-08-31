let code = {};

code.base = `
<template>
<div id="PreviewPicture-demo">
  <Button @click="showImage">图片预览</Button>
  <arkPreviewPicture :images="value"
                  :show="show"
                  @on-cancel="()=>{
                      this.show = false;
                    }"
                  :defaultIndex="defaultIndex"/>

</div>
</template>
<script>
  export default {
    data() {
      return {
        show: false,
        defaultIndex: 0,
        value: [{
          "NAME": "package.json",
          "URL": "http://arkui.dev.syman.cn/7ae2876ae1edf36a6e738d7b37910dd0.png",
          "Size": "2K"
        }, {
          "NAME": "build.config - 副本.json",
          "URL": "http://arkui.dev.syman.cn/7ae2876ae1edf36a6e738d7b37910dd0.png",
          "Size": "638B"
        }]
      }  
    },
    methods: {
      showImage() {
        this.show = true;
      }
    },
    mounted() {
    }
  }

</script>
`;
export default code;
