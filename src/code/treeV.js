let code = {};

code.base = `
<template>
    <TreeV ref="treev" :listData="data" :options="options" @on-check-change="change"></TreeV>
</template>
<script>
    export default {
        data () {
            function dig(path = '0', level = 3) {
              const list = [];
              for (let i = 0; i < 10; i += 1) {
                  const key = path + '-' + i;
                  const treeNode = {
                      title: key,
                      key
                  };
      
                  if (level > 0) {
                      treeNode.children = dig(key, level - 1);
                  }
      
                  list.push(treeNode);
              }
              return list;
            }
            return {
                options: {
                  keygen: 'key',
                  childKey: 'children',
                  renderTitle: 'title'
                },
                data: dig()
            }
        },
        methods: {
          change(checked, node) {
            console.log('checked',checked)
            console.log('node',node)
          },
          expandAll() {
            console.log('expandAll')
            this.$refs.treev.expandAll()
          },
          collapseAll() {
            console.log('collapseAll')
             this.$refs.treev.collapseAll()
          }
        }
    }
</script>
`;

export default code;
