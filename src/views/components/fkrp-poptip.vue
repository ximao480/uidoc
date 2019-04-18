<template>
    <i-article>
        <article>
            <h1>AttachFilter 气泡</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>FC组件，支持下拉单选,模糊搜索,筛选弹窗提示。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="下拉单选">
                <div slot="demo">
                    <AttachFilter
                            v-model="value"
                            :placeholder="placeholder"
                            @on-change="showName"
                            :columnsKey="columnsKey"
                            :AuotData="code.AuotData2"
                            :filter-method="filterMethod">

                        >
                    </AttachFilter>
                </div>
                <div slot="desc">
                    <p>输入框+气泡</p>
                    <p>可以默认筛选</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_poptip_single }}</i-code>
            </Demo>
            <Demo title="输入框+气泡">
                <div slot="demo">
                    <AttachFilter
                            v-model="value"
                            :placeholder="placeholder"
                            @on-change="showName"
                            :columnsKey="columnsKey"
                            :datalist="datalist"
                            :AuotData="code.AuotData2"
                            :optionTip="true"
                            @click='showIndex' >
                        :filter-method="filterMethod"
                        >
                    </AttachFilter>
                </div>
                <div slot="desc">
                    <p>输入框+气泡</p>
                    <p>可以默认筛选</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_poptip_single2 }}</i-code>
            </Demo>
            <Demo title="下拉单选+弹窗框">
                <div slot="demo">
                    <AttachFilter
                            v-model="value"
                            :placeholder="placeholder"
                            @on-change="showName"
                            :columnsKey="columnsKey"
                            :filterTip="true"
                            @click='showIndex'
                            :dialog="dialog"
                            :AuotData="code.AuotData2"
                            :filter-method="filterMethod"
                    >
                        <div slot="daigo">
                            弹窗的组件内容区域
                        </div>
                    </AttachFilter>
                </div>
                <div slot="desc">
                    <p>下拉单选+弹窗框</p>
                    <p>可以默认筛选</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_poptip_single3 }}</i-code>
            </Demo>
            <Demo title="下拉单选+弹窗框+气泡">
                <div slot="demo">
                    <AttachFilter
                            :datalist="datalist"
                            :AuotData="AuotData"
                            :columnsKey="columnsKey"
                            v-model="value"
                            :placeholder="placeholder"
                            :dialog="dialog"
                            :show="true"
                            :optionTip="optionTip"
                            :filterTip="filterTip"
                            :disabled="disabled"
                            @on-change="showName"
                            :filter-method="filterMethod"
                            @click='showIndex' >
                        <div slot="daigo">
                            弹窗的组件内容区域
                        </div>
                    </AttachFilter>
                </div>
                <div slot="desc">
                    <p>下拉单选+弹窗框</p>
                    <p>可以默认筛选</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fkrp_poptip_single4 }}</i-code>
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
                        <td>value</td>
                        <td>绑定的值，可使用 v-model 双向绑定</td>
                        <td>String</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>optionTip</td>
                        <td>是否显示气泡提示框 <code>true</code>、<code>false</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>是否显示输入完成后是否禁用 <code>true</code>、<code>false</code></td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>filterTip</td>
                        <td>是否显示筛选提示弹窗 <code>true</code>、<code>false</code></td>
                        <td>Boolean</td>
                        <td>false</td>
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
                        <td>datalist</td>
                        <td>气泡内容  {value:'展示内容'},value 必填</td>
                        <td>JSON</td>
                        <td>[{value:'展示内容'}]</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> 
                             value:'导入'</br>
                             会添加上传功能,需要添加 url,sendData  </br>
                        </td>
                        <td> {
                                value: '导入',
                                url:'',
                                sendData:{
                                    table: 'C_STORE'
                                }
                            }
                        </td>
                        <td>提供上传所需数据</td>
                    </tr>

                    <tr>
                        <td>columnsKey</td>
                        <td>定义input中展示的对象的key，</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>hidecolumns</td>
                        <td>定义下拉列表中不展示内容的key，</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>dialog</td>
                        <td>配置弹窗的配置项 model: </td>
                        <td> 在model里面配置弹窗选项及回调事件(配置内容同弹窗实例)</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>model</td>
                        <td>turn:true,
                            窗口是否打开</td>
                        <td> Number</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>title:'',
                            窗口标题</td>
                        <td>string</td>
                        <td>默认'标题弹窗' 可传空</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>width:100,
                            弹窗宽度</td>
                        <td>Number</td>
                        <td>默认100</td>
                    </tr>

                    <!--<tr>-->
                        <!--<td></td>-->
                        <!--<td>ok(){},-->
                            <!--弹窗点击确定的函数回调</td>-->
                        <!--<td>函数</td>-->
                        <!--<td>Function返回弹窗内容对象的实例</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td></td>-->
                        <!--<td>cancel(){},-->
                            <!--弹窗点击取消的函数回调</td>-->
                        <!--<td>函数</td>-->
                        <!--<td>Function 返回弹窗内容对象的实例</td>-->
                    <!--</tr>-->
                    <tr>
                        <td>filter-method</td>
                        <td> 配置过滤属性,返回筛选配置value, option</td>
                        <td> return option.name.indexOf(value) !== -1;</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="AttachFilter solt" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                    </thead>
                
                    <tr>
                        <td>slot="daigo"</td>
                        <td> 添加弹窗内卡槽 slot="daigo" 必填 </td>
                        <td>  
                            "<div slot="daigo">
                                    <component :is=""></component>
                            </div>"
                        </td>
                    </tr>
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
                        <td>on-show</td>
                        <td>按钮点击事件</td>
                        <td>当前的input 的 value和当前的实例</td>
                    </tr>
                    <tr>
                        <td>on-dbpopclick</td>
                        <td>气泡双击事件</td>
                        <td>当前位置,当前数据，当前的元素的名称和当前的对象 (index,row,tagName,$this)</td>
                    </tr>
                    <tr>
                        <td>on-popclick</td>
                        <td>气泡单击事件</td>
                        <td>当前位置和当前的对象 (index,row,tagName,$this)</td>
                    </tr>
                    <tr>
                        <td>on-change</td>
                        <td>input change下事件</td>
                        <td>默认传值 (value,event)</td>
                    </tr>
                    <tr>
                        <td>on-keydown</td>
                        <td>input 键盘按下事件</td>
                        <td>默认传值 (value,event)</td>
                    </tr>
                    <tr>
                        <td>on-keyup</td>
                        <td>input 键盘松开事件</td>
                        <td>默认传值 (value,event)</td>
                    </tr>
                    <tr>
                        <td>on-enter</td>
                        <td>input 回车事件</td>
                        <td>默认传值 (value,event)</td>
                    </tr>
                    <tr>
                        <td>on-focus</td>
                        <td>input 获取焦点事件</td>
                        <td>默认传值 (value,event)</td>
                    </tr>
                    <tr>
                        <td>on-blur</td>
                        <td>input 失去焦点事件</td>
                        <td>默认传值 (value,event)</td>
                    </tr>
                    <tr>
                        <td>on-input</td>
                        <td>input input事件</td>
                        <td>默认传值 (value,event)</td>
                    </tr>
                    <tr>
                        <td>on-select</td>
                        <td>模糊查询下拉点击事件 </td>
                        <td>默认传值 (value) (value 是个对象)</td>
                    </tr>
                    <tr>
                        <td>on-clear</td>
                        <td>清除事件 </td>
                        <td>无默认传值</td>
                    </tr>
                    <tr>
                        <td>on-cancel</td>
                        <td>弹窗取消按钮功能 </td>
                        <td>默认传值 (弹窗solt 插入组件的实例)</td>
                    </tr>
                    <tr>
                        <td>on-ok</td>
                        <td>弹窗确定按钮功能 </td>
                        <td>默认传值 (弹窗solt 插入组件的实例)</td>
                    </tr>
                    <tr>
                        <td>on-uploadFile</td>
                         <td>导入 上传回调事件，成功失败返回结果,和当前点击位置 </td>
                        <td>(index,res)</td>
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
        columnsKey:['name','age'],  // 展现的组
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
