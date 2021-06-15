let code = {};

code.base = `
<template>
    <DropMultiSelectFilter :PropsData="propsData"
                          :Url="url"
                          v-model="value"
                          :http="network"
                          :AutoRequest="sendAutoMessage"
                          :TableRequest="sendTableMessage"
                          @on-valueChange="valueChange"
                          :EventFun="eventFun"></DropMultiSelectFilter>
</template>
<script>
  export default {
    data() {
      return {
        code: Code,
        value: [ 
          {
            ID:'1',
            Label:'121212'
          }
        ],
        sendAutoMessage: {
          colid: 1,
          fixedcolumns: {}
        },
        sendTableMessage: {
          isdroplistsearch: true,
          refcolid: 12,
        },
        propsData: {
          single: true,
          placeholder: '下拉单选9999',
          enterType: false,
          serviceId: 'add-app',
          pageSize: 30,
        },
        eventFun: {
          'on-input-value-change': () => {
            console.log(111);
          }
        },
        url: {
          autoUrl: '/p/cs/fuzzyquerybyak',
          tableUrl: 'p/cs/QueryList'
        }
      }
    },
  }
</script>
`;
export default code;