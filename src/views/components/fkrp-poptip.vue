<template>
    <i-article>
        <article>
            <h1>FkrpPoptip 气泡</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>FC组件，支持下拉单选,模糊搜索,筛选弹窗提示。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="下拉单选">
                <div slot="demo">
                    <FkrpPoptip
                        v-model="value"
                        :placeholder="placeholder"
                        @keydown="showName"
                        :columns="columns"
                        :AuotData="code.AuotData2"
                        :filter-method="filterMethod"
                    >
                    </FkrpPoptip>
                </div>
                <div slot="desc">
                    <p>下拉单选</p>
                    <p>可以默认筛选</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_poptip_single }}</i-code>
            </Demo>
            <Demo title="下拉单选+气泡">
                <div slot="demo">
                    <FkrpPoptip
                            v-model="value"
                            :placeholder="placeholder"
                            @keydown="showName"
                            :columns="columns"
                            :datalist="datalist"
                            :optionTip="true"
                            @click='showIndex' >
                            :AuotData="code.AuotData2"
                            :filter-method="filterMethod"
                    >
                    </FkrpPoptip>
                </div>
                <div slot="desc">
                    <p>下拉单选+气泡</p>
                    <p>可以默认筛选</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_poptip_single2 }}</i-code>
            </Demo>
            <Demo title="下拉单选+弹窗框">
                <div slot="demo">
                    <FkrpPoptip
                            v-model="value"
                            :placeholder="placeholder"
                            @keydown="showName"
                            :columns="columns"
                            :filterTip="true"
                            @click='showIndex'
                            :dialog="dialog"
                            :AuotData="code.AuotData2"
                            :filter-method="filterMethod"
                        >
                        <div slot="daigo">
                             弹窗的组件内容区域
                        </div>
                    </FkrpPoptip>
                </div>
                <div slot="desc">
                    <p>下拉单选+弹窗框</p>
                    <p>可以默认筛选</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_poptip_single3 }}</i-code>
            </Demo>
            <Demo title="下拉单选+弹窗框+气泡">
                <div slot="demo">
                    <FkrpPoptip
                            :datalist="datalist"
                            :AuotData="AuotData"
                            :columns="columns"
                            v-model="message"
                            :placeholder="placeholder"
                            :dialog="dialog"
                            :optionTip="optionTip"
                            :filterTip="filterTip"
                            :disabled="disabled"
                            @keydown="showName"
                            :filter-method="filterMethod"
                            @click='showIndex' >
                        <div slot="daigo">
                            弹窗的组件内容区域
                        </div>
                    </FkrpPoptip>
                </div>
                <div slot="desc">
                    <p>下拉单选+弹窗框</p>
                    <p>可以默认筛选</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_poptip_single4 }}</i-code>
            </Demo>






            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="FkrpPoptip props" h3></inAnchor>
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
                        <td>value</td>
                        <td>绑定的值，可使用 v-model 双向绑定</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>optionTip</td>
                        <td>是否显示气泡提示框 <code>true</code>、<code>false</code></td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>filterTip</td>
                        <td>是否显示筛选提示弹窗 <code>true</code>、<code>false</code></td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>是否选中后禁止编辑 <code>true</code>、<code>false</code></td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>默认提示框</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>AuotData</td>
                        <td>模糊查询的文字信息，支持多列</td>
                        <td>JSON</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>columns</td>
                        <td>定义选中展示的文字的key，</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>dialog</td>
                        <td>配置弹窗的配置项 model: </td>
                        <td> 在model里面配置弹窗选项及回调事件</td>
                        <td>空</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="FkrpPoptip events" h3></inAnchor>
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
                        <td>on-keydown</td>
                        <td>输入框的的键盘事件</td>
                        <td>value</td>
                    </tr>
                    <tr>
                        <td>on-click</td>
                        <td>气泡点击事件的 index </td>
                        <td>返回所在位置 </td>
                    </tr>
                    <tr>
                        <td>filter-method</td>
                        <td>返回筛选配置value, option</td>
                        <td> return option.name.indexOf(value) !== -1;</td>
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
  import Code from '../../code/fkrp-poptip';
  export default {
    data () {
      return {
        value:'',
        code:Code,
        placeholder:'请输入查询条件',
        disabled:false,
        optionTip:true,
        filterTip:true,
        datalist: [
          {
            value: 'option1',
            class: ''
          },
          {
            value: 'option2',
            class: ''

          },
          {
            value: 'option3',
            class: ''

          }
        ],
        dialog:{
          model:{
            turn:false, // 窗口是否打开
            title:'弹窗名称',
            content:'弹窗内容',
            width:1000,
            ok(){
              console.log('您点击了确定按钮');
            },
            cancel(){
              console.log('您点击了关闭按钮');
            }
          }
        },
        columns:['name','age'],  // 展现的组
        AuotData: [
          {
            id:0,
            name:'ssfff',
            value:'tttt',
            age:'16',
            address:'degdgdfgdf'
          },{
            id:1,
            name:'认为',
            value:'88',
            age:'90',
            address:'degdgdfgdf'
          },{
            id:3,
            name:'认为3',
            value:'88',
            age:'90',
            address:'degdgdfgdf'
          }

        ]
      };
    },
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor
    },
    watch: {
      value:function () {

      }



    },
    created(){
    },
    methods:{
      showIndex(index){

        console.log(this);
      },
      showName(e){
        console.log(e);
      },
      filterMethod (value, option) {
        return option.name.indexOf(value) !== -1;
      },
      ok(option){
        console.log('您点击了确定按钮',option);
      },
      cancel(option){
        console.log('您点击了关闭按钮',option);
      }

    }
  }

</script>
