let code = {};

code.dropList = [
  {
    label: '单据状态', //字段名称
    column: 'status', //字段
    placeholder: '', // 占位文本
    type: 'Select', //类型
    componentAttribute: {}, // 组件属性
    list: [
      {
        value: '1',
        label: 'aa'
      },
      {
        value: '2',
        label: 'bb'
      }
    ], //选项
    value: 1 //选中值
  },
  {
    label: '单据',
    column: 'docno',
    placeholder: '请输入单据',
    type: 'Input',
    componentAttribute: {},
    value: ''
  },
  {
    label: '测试1',
    column: 'test1',
    placeholder: '请输入测试1',
    type: 'Input',
    componentAttribute: {},
    value: ''
  },
  {
    label: '测试2',
    column: 'test2',
    placeholder: '请输入测试2',
    type: 'Input',
    componentAttribute: {},
    value: ''
  },
  {
    label: '测试3',
    column: 'test3',
    placeholder: '请输入测试3',
    type: 'Input',
    componentAttribute: {},
    value: ''
  },
  {
    label: '测试4',
    column: 'test4',
    placeholder: '请输入测试4',
    type: 'Input',
    componentAttribute: {},
    value: ''
  },
  {
    label: '测试5',
    column: 'test5',
    placeholder: '请输入测试5',
    type: 'Input',
    componentAttribute: {},
    value: ''
  },
  {
    label: '测试6',
    column: 'test6',
    placeholder: '请输入测试6',
    type: 'Input',
    componentAttribute: {},
    value: ''
  },
  {
    label: '测试外键单选',
    column: 'test7',
    placeholder: '请选择',
    type: 'DropDownSelectFilter',
    componentAttribute: {
      data: {
        "start": 0,
        "tabth": [
          {
            "colname": "ID",
            "name": "ID",
            "isak": false
          },
          {
            "colname": "ECODE",
            "name": "编码",
            "isak": false
          },
          {
            "colname": "MIXNAME",
            "name": "[编码]名称",
            "isak": true
          },
          {
            "colname": "ENAME",
            "name": "名称",
            "isak": false
          }
        ],
        "row": [
          {
            "ENAME": {
              "val": "总部"
            },
            "ECODE": {
              "val": "00"
            },
            "MIXNAME": {
              "val": "[00]总部"
            },
            "ID": {
              "val": "4919"
            }
          },
          {
            "ENAME": {
              "val": "总部"
            },
            "ECODE": {
              "val": "00"
            },
            "MIXNAME": {
              "val": "[00]总部"
            },
            "ID": {
              "val": "4000"
            }
          },
          {
            "ENAME": {
              "val": "中央仓仓库"
            },
            "ECODE": {
              "val": "000"
            },
            "MIXNAME": {
              "val": "[000]中央仓仓库"
            },
            "ID": {
              "val": "1250"
            }
          },
          {
            "ENAME": {
              "val": "001"
            },
            "ECODE": {
              "val": "001"
            },
            "MIXNAME": {
              "val": "[001]001"
            },
            "ID": {
              "val": "4970"
            }
          }
        ]
      },
      transfer: false
    },
    value: ''
  },
  {
    label: '测试外键多选',
    column: 'test8',
    placeholder: '请选择',
    type: 'DropDownSelectFilter',
    componentAttribute: {
      single: false,
      data: {
        "start": 0,
        "tabth": [
          {
            "colname": "ID",
            "name": "ID",
            "isak": false
          },
          {
            "colname": "ECODE",
            "name": "编码",
            "isak": false
          },
          {
            "colname": "MIXNAME",
            "name": "[编码]名称",
            "isak": true
          },
          {
            "colname": "ENAME",
            "name": "名称",
            "isak": false
          }
        ],
        "row": [
          {
            "ENAME": {
              "val": "总部"
            },
            "ECODE": {
              "val": "00"
            },
            "MIXNAME": {
              "val": "[00]总部"
            },
            "ID": {
              "val": "4919"
            }
          },
          {
            "ENAME": {
              "val": "总部"
            },
            "ECODE": {
              "val": "00"
            },
            "MIXNAME": {
              "val": "[00]总部"
            },
            "ID": {
              "val": "4000"
            }
          },
          {
            "ENAME": {
              "val": "中央仓仓库"
            },
            "ECODE": {
              "val": "000"
            },
            "MIXNAME": {
              "val": "[000]中央仓仓库"
            },
            "ID": {
              "val": "1250"
            }
          },
          {
            "ENAME": {
              "val": "001"
            },
            "ECODE": {
              "val": "001"
            },
            "MIXNAME": {
              "val": "[001]001"
            },
            "ID": {
              "val": "4970"
            }
          }
        ]
      },
      transfer: false
    },
    value: ''
  }
];

code.tagList = [
  {
    label: '标签', // 标签字段名称
    column: 'tag', // 标签字段
    trigger: '', // 触发方式
    list: [
      {
        label: '标签1'
      },
      {
        label: '标签2'
      },
      {
        label: '标签3'
      },
      {
        label: '标签4'
      },
      {
        label: '标签5'
      },
      {
        label: '标签6'
      },
      {
        label: '标签7'
      }
    ] // 选项
  }
];

code.selectValue = [
  {
    label: '测试1',
    column: 'test1',
    placeholder: '请输入测试1',
    type: 'Input',
    componentAttribute: {},
    value: 'aaaa'
  },
  {
    label: '测试2',
    column: 'test2',
    placeholder: '请输入测试2',
    type: 'Input',
    componentAttribute: {},
    value: 'bbbb'
  },
  {
    label: '测试3',
    column: 'test3',
    placeholder: '请输入测试3',
    type: 'Input',
    componentAttribute: {},
    value: 'cccc'
  },
  {
    label: '测试4',
    column: 'test4',
    placeholder: '请输入测试4',
    type: 'Input',
    componentAttribute: {},
    value: 'dddd'
  },
  {
    label: '测试5',
    column: 'test5',
    placeholder: '请输入测试5',
    type: 'Input',
    componentAttribute: {},
    value: 'eeee'
  },
  {
    label: '测试6',
    column: 'test6',
    placeholder: '请输入测试6',
    type: 'Input',
    componentAttribute: {},
    value: 'ffff'
  }
];

code.base = `
<template>
    <IntegrateSearchFilter
        :dropDownList="dropList">
    </IntegrateSearchFilter>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                dropList: [
                    {
                        label: '单据状态', //字段名称
                        column: 'status', //字段
                        placeholder: '', // 占位文本
                        type: 'Select', //类型
                        componentAttribute: {
                        }, // 组件属性
                        list: [
                            {
                                value: '1',
                                label: 'aa'
                            },
                            {
                                value: '2',
                                label: 'bb'
                            }
                        ], //选项
                        value: 1 //选中值
                    },
                    {
                        label: '单据',
                        column: 'docno',
                        placeholder: '请输入单据',
                        type: 'Input',
                        componentAttribute: {
                        },
                        componentEvent: {
                            'on-enter': () =>{}
                        },
                        value: ''
                    },
                    {
                        label: '测试1',
                        column: 'test1',
                        placeholder: '请输入测试1',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试2',
                        column: 'test2',
                        placeholder: '请输入测试2',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试3',
                        column: 'test3',
                        placeholder: '请输入测试3',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试4',
                        column: 'test4',
                        placeholder: '请输入测试4',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试5',
                        column: 'test5',
                        placeholder: '请输入测试5',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试6',
                        column: 'test6',
                        placeholder: '请输入测试6',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试外键单选',
                        column: 'test7',
                        placeholder: '请选择',
                        type: 'DropDownSelectFilter',
                        componentAttribute: {
                            data: {
                                "start": 0,
                                "tabth": [
                                    {
                                        "colname": "ID",
                                        "name": "ID",
                                        "isak": false
                                    },
                                    {
                                        "colname": "ECODE",
                                        "name": "编码",
                                        "isak": false
                                    },
                                    {
                                        "colname": "MIXNAME",
                                        "name": "[编码]名称",
                                        "isak": true
                                    },
                                    {
                                        "colname": "ENAME",
                                        "name": "名称",
                                        "isak": false
                                    }
                                ],
                                "row": [
                                    {
                                        "ENAME": {
                                        "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4919"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4000"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "中央仓仓库"
                                        },
                                        "ECODE": {
                                            "val": "000"
                                        },
                                        "MIXNAME": {
                                            "val": "[000]中央仓仓库"
                                        },
                                        "ID": {
                                            "val": "1250"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "001"
                                        },
                                        "ECODE": {
                                            "val": "001"
                                        },
                                        "MIXNAME": {
                                            "val": "[001]001"
                                        },
                                        "ID": {
                                            "val": "4970"
                                        }
                                    }
                                ]
                            }
                        },
                        value: ''
                    },
                    {
                        label: '测试外键多选',
                        column: 'test8',
                        placeholder: '请选择',
                        type: 'DropDownSelectFilter',
                        componentAttribute: {
                            single: false,
                            data: {
                                "start": 0,
                                "tabth": [
                                    {
                                        "colname": "ID",
                                        "name": "ID",
                                        "isak": false
                                    },
                                    {
                                        "colname": "ECODE",
                                        "name": "编码",
                                        "isak": false
                                    },
                                    {
                                        "colname": "MIXNAME",
                                        "name": "[编码]名称",
                                        "isak": true
                                    },
                                    {
                                        "colname": "ENAME",
                                        "name": "名称",
                                        "isak": false
                                    }
                                ],
                                "row": [
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4919"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4000"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "中央仓仓库"
                                        },
                                        "ECODE": {
                                            "val": "000"
                                        },
                                        "MIXNAME": {
                                            "val": "[000]中央仓仓库"
                                        },
                                        "ID": {
                                            "val": "1250"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "001"
                                        },
                                        "ECODE": {
                                            "val": "001"
                                        },
                                        "MIXNAME": {
                                            "val": "[001]001"
                                        },
                                        "ID": {
                                            "val": "4970"
                                        }
                                    }
                                ]
                            }
                        },
                        value: ''
                    }
                ],
            };
        },
    };
</script>

<style lang="less">
</style>

`;

code.tag = `
<template>
    <IntegrateSearchFilter
        :tagList="tagList"
        :dropDownList="dropList">
    </IntegrateSearchFilter>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                dropList: [
                    {
                        label: '单据状态', //字段名称
                        column: 'status', //字段
                        placeholder: '', // 占位文本
                        type: 'Select', //类型
                        componentAttribute: {
                        }, // 组件属性
                        list: [
                            {
                                value: '1',
                                label: 'aa'
                            },
                            {
                                value: '2',
                                label: 'bb'
                            }
                        ], //选项
                        value: 1 //选中值
                    },
                    {
                        label: '单据',
                        column: 'docno',
                        placeholder: '请输入单据',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试1',
                        column: 'test1',
                        placeholder: '请输入测试1',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试2',
                        column: 'test2',
                        placeholder: '请输入测试2',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试3',
                        column: 'test3',
                        placeholder: '请输入测试3',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试4',
                        column: 'test4',
                        placeholder: '请输入测试4',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试5',
                        column: 'test5',
                        placeholder: '请输入测试5',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试6',
                        column: 'test6',
                        placeholder: '请输入测试6',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试外键单选',
                        column: 'test7',
                        placeholder: '请选择',
                        type: 'DropDownSelectFilter',
                        componentAttribute: {
                            data: {
                                "start": 0,
                                "tabth": [
                                    {
                                        "colname": "ID",
                                        "name": "ID",
                                        "isak": false
                                    },
                                    {
                                        "colname": "ECODE",
                                        "name": "编码",
                                        "isak": false
                                    },
                                    {
                                        "colname": "MIXNAME",
                                        "name": "[编码]名称",
                                        "isak": true
                                    },
                                    {
                                        "colname": "ENAME",
                                        "name": "名称",
                                        "isak": false
                                    }
                                ],
                                "row": [
                                    {
                                        "ENAME": {
                                        "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4919"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4000"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "中央仓仓库"
                                        },
                                        "ECODE": {
                                            "val": "000"
                                        },
                                        "MIXNAME": {
                                            "val": "[000]中央仓仓库"
                                        },
                                        "ID": {
                                            "val": "1250"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "001"
                                        },
                                        "ECODE": {
                                            "val": "001"
                                        },
                                        "MIXNAME": {
                                            "val": "[001]001"
                                        },
                                        "ID": {
                                            "val": "4970"
                                        }
                                    }
                                ]
                            }
                        },
                        value: ''
                    },
                    {
                        label: '测试外键多选',
                        column: 'test8',
                        placeholder: '请选择',
                        type: 'DropDownSelectFilter',
                        componentAttribute: {
                            single: false,
                            data: {
                                "start": 0,
                                "tabth": [
                                    {
                                        "colname": "ID",
                                        "name": "ID",
                                        "isak": false
                                    },
                                    {
                                        "colname": "ECODE",
                                        "name": "编码",
                                        "isak": false
                                    },
                                    {
                                        "colname": "MIXNAME",
                                        "name": "[编码]名称",
                                        "isak": true
                                    },
                                    {
                                        "colname": "ENAME",
                                        "name": "名称",
                                        "isak": false
                                    }
                                ],
                                "row": [
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4919"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4000"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "中央仓仓库"
                                        },
                                        "ECODE": {
                                            "val": "000"
                                        },
                                        "MIXNAME": {
                                            "val": "[000]中央仓仓库"
                                        },
                                        "ID": {
                                            "val": "1250"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "001"
                                        },
                                        "ECODE": {
                                            "val": "001"
                                        },
                                        "MIXNAME": {
                                            "val": "[001]001"
                                        },
                                        "ID": {
                                            "val": "4970"
                                        }
                                    }
                                ]
                            }
                        },
                        value: ''
                    }
                ],
                tagList: [
                    {
                        label: '标签', // 标签字段名称
                        column: 'tag', // 标签字段
                        trigger: '', // 触发方式
                        list: [
                            {
                                label: '标签1'
                            },
                            {
                                label: '标签2'
                            },
                            {
                                label: '标签3'
                            },
                            {
                                label: '标签4'
                            },
                            {
                                label: '标签5'
                            },
                            {
                                label: '标签6'
                            },
                            {
                                label: '标签7'
                            }
                        ] // 选项
                    }
                ],
            };
        },
    };
</script>

<style lang="less">
</style>

`;

code.defaultValue = `
<template>
    <IntegrateSearchFilter
        v-model="selectValue"
        :tagList="tagList"
        :dropDownList="dropList">
    </IntegrateSearchFilter>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                dropList: [
                    {
                        label: '单据状态', //字段名称
                        column: 'status', //字段
                        placeholder: '', // 占位文本
                        type: 'Select', //类型
                        componentAttribute: {
                        }, // 组件属性
                        list: [
                            {
                                value: '1',
                                label: 'aa'
                            },
                            {
                                value: '2',
                                label: 'bb'
                            }
                        ], //选项
                        value: 1 //选中值
                    },
                    {
                        label: '单据',
                        column: 'docno',
                        placeholder: '请输入单据',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试1',
                        column: 'test1',
                        placeholder: '请输入测试1',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试2',
                        column: 'test2',
                        placeholder: '请输入测试2',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试3',
                        column: 'test3',
                        placeholder: '请输入测试3',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试4',
                        column: 'test4',
                        placeholder: '请输入测试4',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试5',
                        column: 'test5',
                        placeholder: '请输入测试5',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试6',
                        column: 'test6',
                        placeholder: '请输入测试6',
                        type: 'Input',
                        componentAttribute: {
                        },
                        value: ''
                    },
                    {
                        label: '测试外键单选',
                        column: 'test7',
                        placeholder: '请选择',
                        type: 'DropDownSelectFilter',
                        componentAttribute: {
                            data: {
                                "start": 0,
                                "tabth": [
                                    {
                                        "colname": "ID",
                                        "name": "ID",
                                        "isak": false
                                    },
                                    {
                                        "colname": "ECODE",
                                        "name": "编码",
                                        "isak": false
                                    },
                                    {
                                        "colname": "MIXNAME",
                                        "name": "[编码]名称",
                                        "isak": true
                                    },
                                    {
                                        "colname": "ENAME",
                                        "name": "名称",
                                        "isak": false
                                    }
                                ],
                                "row": [
                                    {
                                        "ENAME": {
                                        "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4919"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4000"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "中央仓仓库"
                                        },
                                        "ECODE": {
                                            "val": "000"
                                        },
                                        "MIXNAME": {
                                            "val": "[000]中央仓仓库"
                                        },
                                        "ID": {
                                            "val": "1250"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "001"
                                        },
                                        "ECODE": {
                                            "val": "001"
                                        },
                                        "MIXNAME": {
                                            "val": "[001]001"
                                        },
                                        "ID": {
                                            "val": "4970"
                                        }
                                    }
                                ]
                            }
                        },
                        value: ''
                    },
                    {
                        label: '测试外键多选',
                        column: 'test8',
                        placeholder: '请选择',
                        type: 'DropDownSelectFilter',
                        componentAttribute: {
                            single: false,
                            data: {
                                "start": 0,
                                "tabth": [
                                    {
                                        "colname": "ID",
                                        "name": "ID",
                                        "isak": false
                                    },
                                    {
                                        "colname": "ECODE",
                                        "name": "编码",
                                        "isak": false
                                    },
                                    {
                                        "colname": "MIXNAME",
                                        "name": "[编码]名称",
                                        "isak": true
                                    },
                                    {
                                        "colname": "ENAME",
                                        "name": "名称",
                                        "isak": false
                                    }
                                ],
                                "row": [
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4919"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "总部"
                                        },
                                        "ECODE": {
                                            "val": "00"
                                        },
                                        "MIXNAME": {
                                            "val": "[00]总部"
                                        },
                                        "ID": {
                                            "val": "4000"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "中央仓仓库"
                                        },
                                        "ECODE": {
                                            "val": "000"
                                        },
                                        "MIXNAME": {
                                            "val": "[000]中央仓仓库"
                                        },
                                        "ID": {
                                            "val": "1250"
                                        }
                                    },
                                    {
                                        "ENAME": {
                                            "val": "001"
                                        },
                                        "ECODE": {
                                            "val": "001"
                                        },
                                        "MIXNAME": {
                                            "val": "[001]001"
                                        },
                                        "ID": {
                                            "val": "4970"
                                        }
                                    }
                                ]
                            }
                        },
                        value: ''
                    }
                ],
                tagList: [
                    {
                        label: '标签', // 标签字段名称
                        column: 'tag', // 标签字段
                        trigger: '', // 触发方式
                        list: [
                            {
                                label: '标签1'
                            },
                            {
                                label: '标签2'
                            },
                            {
                                label: '标签3'
                            },
                            {
                                label: '标签4'
                            },
                            {
                                label: '标签5'
                            },
                            {
                                label: '标签6'
                            },
                            {
                                label: '标签7'
                            }
                        ] // 选项
                    }
                ],
                selectValue: []
            };
        },
        mounted(){
            this.selectValue = [
                {
                    label: '测试1',
                    column: 'test1',
                    placeholder: '请输入测试1',
                    type: 'Input',
                    componentAttribute: {
                    },
                    value: 'aaaa'
                },
                {
                    label: '测试2',
                    column: 'test2',
                    placeholder: '请输入测试2',
                    type: 'Input',
                    componentAttribute: {
                    },
                    value: 'bbbb'
                },
                {
                    label: '测试3',
                    column: 'test3',
                    placeholder: '请输入测试3',
                    type: 'Input',
                    componentAttribute: {
                    },
                    value: 'cccc'
                },
                {
                    label: '测试4',
                    column: 'test4',
                    placeholder: '请输入测试4',
                    type: 'Input',
                    componentAttribute: {
                    },
                    value: 'dddd'
                },
                {
                    label: '测试5',
                    column: 'test5',
                    placeholder: '请输入测试5',
                    type: 'Input',
                    componentAttribute: {
                    },
                    value: 'eeee'
                },
                {
                    label: '测试6',
                    column: 'test6',
                    placeholder: '请输入测试6',
                    type: 'Input',
                    componentAttribute: {
                    },
                    value: 'ffff'
                }
            ];
        },
    };
</script>

<style lang="less">
</style>

`;

export default code;
