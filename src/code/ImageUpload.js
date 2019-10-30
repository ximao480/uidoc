let code = {};

code.ImageUpload = `
<template>
<ImageUpload
   :dataitem="dataitem"
></ImageUpload>
</template>
<script>
    export default {
      data() {
        return {
          dataitem: {
            url: '', // 上传地址
            sendData: {}, // 上传参数
            width: 250,
            height: 250,
            readonly: false, 
            valuedata: [
                 {
                      NAME: '1.jpg',
                      URL:
                        'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561364661&di=766d38b55df12b23516f195942aa0055&src=http://img.zhiribao.com/upload/images/201607/6/6b0152a5b29f309f3f92f52adc6cd017eae73133.jpg'
                    },
                     {
                      NAME: '2.jpg',
                      URL:
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561374887838&di=8027dfa1209bc0033b5168958c4608b2&imgtype=0&src=http%3A%2F%2Fimg.sccnn.com%2Fbimg%2F337%2F31662.jpg'
                    },
            ],
            name: '上传'  //点击上传按钮名称
          }
        };
      },
    }
</script>
`;




export default code;