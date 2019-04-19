let code = {};

code.ImageUpload = `
<template>
    <ImageUpload
            :dataitem="dataitem"
            @deleteImg="deleteImg"
            @uploadFileChangeSuccess="uploadFileChangeSuccess"
            @uploadFileChangeOnerror="uploadFileChangeOnerror"
            @uploadFileChangeOnload="uploadFileChangeOnload"
            @uploadFileChangeOnloadstart="uploadFileChangeOnloadstart"
            @uploadFileChangeOnloadend="uploadFileChangeOnloadend"
    ></ImageUpload>
</template>
<script>
    export default {
        dataitem: {
              url: '/upload', 
              sendData:{}, 
              width: 200,
              height: 200,
              name: '图片',
              readonly: false,
              valuedata: [
                { NAME: 'image.jpg', URL:1.jpg') }
              ]
            }
    }
</script>
`;




export default code;