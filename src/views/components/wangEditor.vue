<style>

</style>
<template>
    <i-article>
        <article>
            <h1>wangEditor</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>引用第三方库，详情查询 wangEditor 官方文档</p>
            <p><a target="_blank" href="http://www.wangeditor.com/">http://www.wangeditor.com/</a></p>
            
            <div id="wangEditor">
            </div>
            <Button @click="setdisabled">禁用</Button>
  

           
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/scroll';
    import inAnchor from '../../components/anchor.vue';
    import wangEditor from '@syman/ark-ui/dist/wangEditor.min'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor
        },
        data () {
            return {
                code: Code,
                list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            setdisabled(){
                this.editor.txt.html('需要添加的内容');
                this.editor.$textElem.attr('contenteditable', false);

            }
        },
         mounted(){
            let E = wangEditor;
            let editor = new E('#wangEditor');
            this.editor = editor;
            editor.create();


        }
    }
</script>