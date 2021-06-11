let code = {};

code.base = `
<template>
    <DropDownSelectFilter :PropsData="propsData"
                          :Url="url"
                          ref="vbsDropDownSelectFilter"
                          v-model="value"
                          :http="network"
                          :AutoRequest="sendAutoMessage"
                          :TableRequest="sendTableMessage"
                          @on-valueChange="valueChange"
                          :EventFun="eventFun"></DropDownSelectFilter>
</template>
<script>
  export default {
    data() {
      return {
        code: Code,
        value: '',
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
