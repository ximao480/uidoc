<template>
    <div class="demo-split-panel">
        <SplitPanel :panels="panels1" mode="vertical">
        </SplitPanel>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        panels1: [
          {
            percentage: 10
          },
          {
            percentage: 10
          },
          {
            percentage: 10
          }
        ],
      };
    },
    name: '',
    components: {},
    methods: {},
    watch: {},
    computed: {}
  };
</script>

<style scoped>
    .demo-split-panel {
        height: 100%;
        border: 1px solid #dcdee2;
    }
</style>
