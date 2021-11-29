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
code.baseCheck = `
<template>
    <i-button @click="expandAll('treev')">展开所有</i-button>
    <i-button @click="collapseAll('treev')">收起所有</i-button>
    <TreeV ref="treev" :listData="data" :options="options" @on-check-change="change" :showCheckbox="true"></TreeV>
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
code.base1 = `
<template>
    <i-button @click="expandAll('treevValue')">展开所有</i-button>
    <i-button @click="collapseAll('treevValue')">收起所有</i-button>
    <TreeV ref="treevValue" :listData="data" :options="options" :value="['0-0']" @on-check-change="change" :showCheckbox="true"></TreeV>
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
code.baseQuery = `
<template>
    <i-button @click="expandAll('treevQuery')">展开所有</i-button>
    <i-button @click="collapseAll('treevQuery')">收起所有</i-button>
    <i-input v-model="val"  @on-enter="search"/>
    <TreeV ref="treevQuery" :listData="data" :options="options" :value="['0-0']" @on-check-change="change"></TreeV>
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
                data: dig(),
                val: ''
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
          },
          search() {
            this.$refs.treevQuery.search(this.val);
          }
        }
    }
</script>
`;
code.line = `
<template>
    <i-button @click="expandAll('treevLine')">展开所有</i-button>
    <i-button @click="collapseAll('treevLine')">收起所有</i-button>
    <i-input v-model="val"  @on-enter="search"/>
    <TreeV ref="treevLine" :listData="data" :options="optionsLine" @on-check-change="change"></TreeV>
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
                data: dig(),
                val: ''
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
          },
          search() {
            this.$refs.treevQuery.search(this.val);
          }
        }
    }
</script>
`;

export default code;
