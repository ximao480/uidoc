let code = {};
code.datalist=[
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
]
code.AuotData1=[
  {
    address:'degdgdfgdf'
  },{
    address:'degdgdfgdf'
  },{
    address:'degdgdfgdf'
  }
]
code.AuotData2=[
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


code.fkrp_poptip_single = `
<template>
      <AttachFilter
          v-model="message"
          :placeholder="placeholder"
          @on-change="showName"
          :columns="columns"
          :AuotData="code.AuotData1"
          :filter-method="filterMethod"
      >
      </AttachFilter>
</template>
<script>
    export default {
        data () {
            return {
                value:'',
                message:'',
                placeholder:'请输入查询条件',
                disabled:false,
                datalist: code.datalist,
                AuotData:code.AuotData1
            };
        },
        components:{
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
            }

        }
    }
</script>
`;
code.fkrp_poptip_single2 = `
<template>
       <AttachFilter
              v-model="value"
              :placeholder="placeholder"
              @on-change="showName"   
              :columns="columns"
              :datalist="datalist"
              :optionTip="true"
              @click='showIndex' >
              :AuotData="code.AuotData2"
              :filter-method="filterMethod"
      >
      </AttachFilter>
</template>
<script>
    export default {
        data () {
            return {
                value:'',
                placeholder:'请输入查询条件',
                disabled:false,
                datalist: code.datalist,
                AuotData:code.AuotData1
            };
        },
        components:{
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
            }

        }
    }
</script>
`;
code.fkrp_poptip_single3 = `
<template>
       <AttachFilter
              v-model="value"
              :placeholder="placeholder"
              @on-change="showName"
              :columns="columns"
              :datalist="datalist"
              :optionTip="true"
              @click='showIndex' >
              :AuotData="code.AuotData2"
              :filter-method="filterMethod"
      >
      </AttachFilter>
</template>
<script>
    export default {
        data () {
            return {
                value:'',
                placeholder:'请输入查询条件',
                disabled:false,
                datalist: code.datalist,
                AuotData:code.AuotData1
            };
        },
        components:{
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
            }

        }
    }
</script>
`;
code.fkrp_poptip_single4 = `
<template>
       <AttachFilter
              v-model="value"
              :placeholder="placeholder"
              @on-change="showName"
              :columns="columns"
              :datalist="datalist"
              :optionTip="true"
              @click='showIndex' >
              :AuotData="code.AuotData2"
              :filter-method="filterMethod"
      >
      </AttachFilter>
</template>
<script>
    export default {
        data () {
            return {
                value:'',
                placeholder:'请输入查询条件',
                disabled:false,
                datalist: code.datalist,
                AuotData:code.AuotData1
            };
        },
        components:{
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
            }

        }
    }
</script>
`;

export default code;
