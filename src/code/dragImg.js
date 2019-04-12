let code = {};

code.dragImg = `
<template>
      <div>
        <Button type="primary" @click="scaleDiv(1)">放大</Button>
        <Button type="primary" @click="scaleDiv(-1)">缩小</Button>
        <Button type="primary" @click="add('http://58pic.ooopic.com/58pic/13/68/96/68x58PICrws.jpg')">点击图片预览</Button>
        <Button type="primary" @click="add('http://img.hb.aicdn.com/40eaab4cafa7909bfa90758da14e20fbdfdc3edf156e5-de0R8y_fw658')">点击图片预览</Button>

        <drag-img
            :imgUrl="img"
            :divWidth="width"
            :divHeight="height"
            @on-scaleImg="scaleImg"
            ref="dragDiv"
        >
        </drag-img>

    </div>  
      
</template>
<script>
    export default {
        data () {
            return {
                width:500,
                height:400,
                scale:1,
                img: 'http://img.hb.aicdn.com/cb645376ae7aead0d2976d9132fed34dab68c7ac2743cb-gWZ12D_fw658'
            };
        },
        methods: {
            scaleDiv(zoom){
                this.$refs.dragDiv.scaleImg(zoom);
            },
            scaleImg(x,obj){
                console.log(x,obj);
            },
            add(url){
                this.$Modal.confirm({
                    title:'款式图片',
                    render: (h) => h('dragImg',{
                        props:{
                            imgUrl:url,
                            divHeight:300
                        }
                    }),
                    mask:true,
                    width:400,
                    closable:true
                });
            }
        },
        computed:{


        },
        mounted(){

            /**/

        },
        created(){
        }
    };
    
    
    
</script>
`;

export default code;
