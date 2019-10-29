<template>
    <i-article>
        <article>
            <h1>dragImg 图片拖拽</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>dragImg 图片拖拽,可放大缩小。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="图片展示">
                <div slot="demo">
                    <Button type="primary" @click="scaleDiv(1)">放大</Button>
                    <Button type="primary" @click="scaleDiv(-1)">缩小</Button>
                    <!-- <Button type="primary" @click="add('http://img.hb.aicdn.com/40eaab4cafa7909bfa90758da14e20fbdfdc3edf156e5-de0R8y_fw658')">点击图片预览</Button> -->
                    <!-- <Button type="primary" @click="add('http://img.hb.aicdn.com/40eaab4cafa7909bfa90758da14e20fbdfdc3edf156e5-de0R8y_fw658')">点击图片预览</Button> -->
                    
                   <drag-img
                          :imgUrl="img"
                          :divWidth="width"
                          :divHeight="height"
                          @on-scaleImg="scaleImg"
                          ref="dragDiv"
                      >
                      </drag-img>
                    
                   
                </div>
                <i-code lang="html" slot="code">{{ code.dragImg }}</i-code>
            </Demo>


            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="AttachFilter props" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>imgUrl</td>
                        <td>图片路径</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>divWidth</td>
                        <td>图片 展示的宽度</td>
                        <td>Number</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>divHeight</td>
                        <td>图片 展示的高度</td>
                        <td>Number</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="AttachFilter events" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>@on-scaleImg</td>
                        <td>图片缩放的事件传值</td>
                        <td>当前的Img 缩放的大小，及实例</td>
                    </tr>
                    <tr>
                        <td>scaleImg</td>
                        <td>当前实例里面控制图片放大缩小的功能</td>
                        <td>正父数</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
  import iArticle from '../../components/article.vue';
  import iCode from 'iCode';
  import Demo from '../../components/demo.vue';
  import inAnchor from '../../components/anchor.vue';
  import Code from '../../code/dragImg';
  import imgSrc from '../../images/bg-christmas.jpg'

  export default {
    data () {
      return {
        width:400,
        code:Code,
        height:200,
        show:false,
        scale:1,
        img:imgSrc
      };
    },
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor
    },
    methods: {
      scaleDiv(zoom){
        this.$refs.dragDiv.scaleImg(zoom);
      },
      scaleImg(x,obj){
        console.log(x,obj);
      },
      add(url){
        // this.$Modal.confirm({
        //   title:'款式图片',
        //   render: (h) => h('dragImg',{
        //     props:{
        //       imgUrl:url,
        //       divHeight:300
        //     }
        //   }),
        //   mask:true,
        //   width:400,
        //   closable:true
        // });
        this.show = true;
      }
    },
    computed:{


    },
    mounted(){

      /**/

    },
    created(){
    }
  }
</script>
