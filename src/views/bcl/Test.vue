<template>
  <div>
    定制头部--{{params.myParams}}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Test',

  mounted() {
    console.log(this.params)
  }
}
</script>
