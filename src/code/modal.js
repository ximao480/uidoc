let code = {};

code.base = `
<template>
    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>
`;

code.custom = `
<template>
    <Button @click="modal2 = true">Custom header and footer</Button>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
            <p>Will you delete it?</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
        </div>
    </Modal>
    <Button @click="modal3 = true">No title bar</Button>
    <Modal v-model="modal3">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal4 = true">Internationalization</Button>
    <Modal
        v-model="modal4"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        <p>Something...</p>
        <p>Something...</p>
        <p>Something...</p>
    </Modal>
    <Button @click="modal5 = true">Set the width</Button>
    <Modal
        v-model="modal5"
        title="Custom width"
        width="300">
        <p>Customize width, unit px, default 520px.</p>
        <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false
            }
        },
        methods: {
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('Successfully delete');
                }, 2000);
            }
        }
    }
</script>
`;

code.async = `
<template>
    <Button type="primary" @click="modal6 = true">Display dialog box</Button>
    <Modal
        v-model="modal6"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK">
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>
`;

code.close = `
<template>
    <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button>
    <Modal
        title="Title"
        v-model="modal7"
        :closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal8 = true">Disable mask layer closure</Button>
    <Modal
        title="Title"
        v-model="modal8"
        :mask-closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal7: false,
                modal8: false,
            }
        }
    }
</script>
`;

code.position = `
<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ark-modal{
            top: 0;
        }
    }
</style>
<template>
    <Button @click="modal9 = true">20px from the top</Button>
    <Modal
        title="Title"
        v-model="modal9"
        :styles="{top: '20px'}">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal10 = true">Vertical center</Button>
    <Modal
        title="Title"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
            }
        }
    }
</script>
`;

code.baseInstance = `
<template>
    <Button @click="instance('info')">消息</Button>
    <Button @click="instance('success')">成功</Button>
    <Button @click="instance('warning')">警告</Button>
    <Button @click="instance('error')">错误</Button>
    <Button @click="instance('fcSuccess')">fc模式成功</Button>
    <Button @click="instance('fcError')">fc模式错误</Button>
    <Button @click="instance('fcWarning')">fc模式警告</Button>
    <Button @click="instance('posMessage')">pos消息提示</Button>
</template>
<script>
    export default {
        methods: {
            instance (type) {
                const title = '对话框的标题';
                const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                    case 'fcSuccess':
                        this.$Modal.fcSuccess({
                            title: title,
                            content: content
                        });
                        break;
                    case 'fcError':
                        this.$Modal.fcError({
                            title: title,
                            content: content
                        });
                        break;
                    case 'fcWarning':
                        this.$Modal.fcWarning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'posMessage':
                        this.$Modal.posMessage({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
    }
</script>
`;

code.confirm = `
<template>
    <Button @click="confirm">Normal</Button>
    <Button @click="custom">Custom button text</Button>
    <Button @click="async">Asynchronous closing</Button>
</template>
<script>
    export default {
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>The dialog box will be closed after 2 seconds</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('Asynchronously close the dialog box');
                        }, 2000);
                    }
                });
            }
        }
    }
</script>
`;

code.render = `
<template>
    <p>
        Name: {{ value }}
    </p>
    <p>
        <Button @click="handleRender">Custom content</Button>
    </p>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }            
        },
        methods: {
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>
`;
code.template = `
<template>
<p>
<Button @click="handleConter">自定内容区域</Button>
</p>
<p>
<Button @click="handleFooter">自定底部区域</Button>
</p>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }            
        },
        methods: {
            handleConter(){
                this.$Modal.fcSuccess({
                    title: '成功',
                    contentTemplate:{
                        template:
                             "<div><Button size="small" type="fcdefault" @click="test">复制</Button>
                              <Button size="small" type="posdefault">确定</Button></div>",
                        methods:{
                            test(){
                                console.log(this,'====');
                                this.$parent.cancel();
                            }
                        }

                    },
                    draggable: false
                });
            },
            handleFooter(){
                this.$Modal.fcSuccess({
                    title: '成功',
                    footerTemplate:{
                        template:
                             "<div><Button size="small" type="fcdefault" @click="test">复制</Button>
                              <Button size="small" type="posdefault">确定</Button></div>",
                        methods:{
                            test(){
                                console.log(this,'====');
                                this.$parent.cancel();
                            }
                        }

                    },
                    draggable: false
                });
            }
        }
    }
</script>
`;

code.fullscreen = `
<template>
    <Button @click="modal11 = true">Open a fullscreen modal</Button>
    <Modal v-model="modal11" fullscreen title="Fullscreen Modal">
        <div>This is a fullscreen modal</div>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal11: false
            }
        }
    }
</script>
`;

code.draggable = `
<template>
    <Button @click="modal12 = true">Open the first modal</Button>
    <Button @click="modal13 = true">Open the second modal</Button>
    <Modal v-model="modal12" draggable scrollable title="Modal 1">
        <div>This is the first modal</div>
    </Modal>
    <Modal v-model="modal13" draggable scrollable title="Modal 2">
        <div>This is the second modal</div>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal12: false,
                modal13: false
            }
        }
    }
</script>
`;

code.propsTest = `
<template>
    <Button @click="propsTest">Normal</Button>
</template>
<script>
    export default {
        methods: {
            propsTest () {
                this.$Modal.info({
                    title:'提示',
                    content:'<p>一些对话框内容</p><p>一些对话框内容</p>',
                    cancelType:true,
                    titleAlign:'left',
                    mask:true,
                    draggable:true
                })
            }
        }
    }
</script>
`;

export default code;