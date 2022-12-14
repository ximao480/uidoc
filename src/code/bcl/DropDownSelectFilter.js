let code = {};

code.base = `
<template>
    <arkDropDownSelectFilter :PropsData="propsData"
                          :Url="url"
                          ref="vbsDropDownSelectFilter"
                          v-model="value"
                          :http="network"
                          :AutoRequest="sendAutoMessage"
                          :TableRequest="sendTableMessage"
                          @on-valueChange="valueChange"
                          :EventFun="eventFun"></arkDropDownSelectFilter>
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
          placeholder: 'δΈζει9999',
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
