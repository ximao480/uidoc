<template>
    <i-article>
        <article>
            <h1>ImageUpload 图片上传组件</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>图片上传组件，支持图片单张上传，支持删除单张图片，支持自定义宽度，支持自定义高度，支持单张图片预览。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="水平分割">
                <div slot="demo">
                    <div class="demo-split-panel">
                         <ImageUpload
                        :dataitem="ImageUploadData"
                          ></ImageUpload>
                    </div>
                </div>
                <div slot="desc">
                    <p>基础用法</p>
                    <p>默认宽高为200px,宽高最小值为50px</p>
                </div>
                <i-code lang="html" slot="code">{{ code.ImageUpload }}</i-code>
            </Demo>

         
            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="ImageUpload props" h3></inAnchor>
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
                        <td>dataitem</td>
                        <td>prop数据格式为对象</td>
                        <td>Object</td>
                        <td>{}</td>
                    </tr>
                    </tbody>
                </table>

                <inAnchor title="dataitem 属性说明" h3></inAnchor>
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
                        <td>dataitem.url</td>
                        <td>上传地址</td>
                        <td>String</td>
                        <td>""</td>
                    </tr>
                    <tr>
                        <td>dataitem.sendData</td>
                        <td>上传参数</td>
                        <td>Object</td>
                        <td>{}</td>
                    </tr>
                    <tr>
                        <td>dataitem.width</td>
                        <td>宽度</td>
                        <td>Number</td>
                        <td>200</td>
                    </tr>
                   
                    <tr>
                       <td>dataitem.height</td>
                        <td>高度</td>
                        <td>Number</td>
                        <td>200</td>
                    </tr>
                     <tr>
                       <td>dataitem.readonly</td>
                        <td>是否禁用上传</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                     <tr>
                       <td>dataitem.valuedata</td>
                        <td>图片路径</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                       <td>dataitem.length</td>
                        <td>图片上传数量</td>
                        <td>number</td>
                        <td></td>
                    </tr>
                     <tr>
                       <td>dataitem.size</td>
                        <td>图片路径</td>
                        <td>number</td>
                        <td></td>
                    </tr>
                    
                    </tbody>
                </table>

                 <inAnchor title="图片路径 dataitem.valuedata props" h3></inAnchor>
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
                        <td>NAME</td>
                        <td>图片名称</td>
                        <td>String</td>
                        <td>""</td>
                    </tr>
                      <tr>
                        <td>URL</td>
                        <td>图片路径</td>
                        <td>String</td>
                        <td>""</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="FkrpSelect events" h3></inAnchor>
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
                        <td>deleteImg</td>
                        <td>删除方法的回调</td>
                        <td>当前索引和 组件实例this</td>
                    </tr>
                    <tr>
                        <td>uploadFileChangeSuccess</td>
                        <td>上传成功的回调</td>
                        <td>上传成功的接口返回值</td>
                    </tr>
                     <tr>
                        <td>uploadFileChangeOnerror</td>
                        <td>上传失败的回调</td>
                        <td>上传失败的接口返回值</td>
                    </tr>
                     <tr>
                        <td>uploadFileChangeOnload</td>
                        <td>上传的回调</td>
                        <td>event</td>
                    </tr>
                     <tr>
                        <td>uploadFileChangeOnloadstart</td>
                        <td>在图片上传开始加载时的回调</td>
                        <td>event</td>
                    </tr>
                    <tr>
                        <td>uploadFileChangeOnloadend</td>
                        <td>在图片上传加载完成时的回调</td>
                        <td>event</td>
                    </tr>
                    <tr>
                        <td>dbclick</td>
                        <td>图片双击事件</td>
                        <td>event</td>
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
  import Code from '../../code/ImageUpload';
  import inAnchor from '../../components/anchor.vue';

  export default {
    name: 'ImageUploadDoc',
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
    },
    data () {
      return {
        code: Code,
        dataitem:{},
        ImageUploadData: {
                url: '', // 上传地址
                sendData: {}, // 上传参数
                width: 200,
                height: 200,
                readonly: true,
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
                        }
                ],
                name: '上传'
         }
     
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style>
    .demo-split-panel {
        height: 200px;
        border: 1px solid #dcdee2;
    }
</style>