let code = {};

code.base = `
<template>
  <MonthDay></MonthDay>
</template>
<script>
    export default {
        
    }
</script>
`;

code.format = `
<template>
  <Row>
      <Col span="12">
        <MonthDay v-model="monthday1" format="MM-dd"></MonthDay>
      </Col>
      <Col span="12">
        <MonthDay v-model="monthday2" format="MM月dd日"></MonthDay>
      </Col>
  </Row>
</template>
<script>
    export default {
        data () {
            return {
                monthday1: '05-01',
                monthday2: '06月01日'
            }
        }
    }
</script>
`;

code.slot = `
<template>
    <MonthDay
        :open="open"
        :value="value3"
        confirm
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-clock-outline"></Icon>
            <template v-if="value3 === ''">Select time</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </MonthDay>
</template>
<script>
    export default {
        data () {
            return {
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (time) {
                this.value3 = time;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            }
        }
    }
</script>
`;

code.size = `
<template>
    <row :gutter="16">
        <Col span="8">
            <MonthDay size="small" placeholder="Select MonthDay"></MonthDay>
        </Col>
        <Col span="8">
            <MonthDay placeholder="Select MonthDay"></MonthDay>
        </Col>
        <Col span="8">
            <MonthDay size="large" placeholder="Select MonthDay"></MonthDay>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

export default code;
