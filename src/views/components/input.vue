<template>
    <i-article>
        <article>
            <h1>Input 输入框</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p>
            <Alert show-icon style="margin-top: 16px">注意：非 template/render 模式下，需使用 <code>i-input</code>。</Alert>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
                </div>
                <div slot="desc">
                    <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。</p>
                    <p>可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/powbVQo">{{ code.base }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="8">
                            <Input v-model="value1" size="large" placeholder="large size" />
                        </Col>
                        <Col span="8">
                            <Input v-model="value2" placeholder="default size" />
                        </Col>
                        <Col span="8">
                            <Input v-model="value3" size="small" placeholder="small size" />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>输入框有三种尺寸：大、默认（中）、小</p>
                    <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/JjJKvwN">{{ code.size }}</i-code>
            </Demo>
            <Demo title="可清空">
                <div slot="demo">
                    <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />
                </div>
                <div slot="desc">
                    <p>开启属性 <code>clearable</code> 可显示清空按钮。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/XWgKqOj">{{ code.clearable }}</i-code>
            </Demo>
            <Demo title="带Icon的输入框">
                <div slot="demo">
                    <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px" />
                </div>
                <div slot="desc">
                    <p>通过 <code>icon</code> 属性可以在输入框右边加一个图标。</p>
                    <p>点击图标，会触发 <code>on-click</code> 事件。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/OJgXZdr">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="前缀和后缀图标">
                <div slot="demo">
                    <div>
                        属性方式：
                        <Input prefix="ios-contact" placeholder="请输入姓名" style="width: auto" />
                        <Input suffix="ios-search" placeholder="请输入内容" style="width: auto" />
                    </div>
                    <div style="margin-top: 6px">
                        slot 方式：
                        <Input placeholder="请输入姓名" style="width: auto">
                            <Icon type="ios-contact" slot="prefix" />
                        </Input>
                        <Input placeholder="请输入内容" style="width: auto">
                            <Icon type="ios-search" slot="suffix" />
                        </Input>
                    </div>
                </div>
                <div slot="desc">
                    <p>除了设置 icon，也可以通过设置 <code>prefix</code> 和 <code>suffix</code> 及同名 slot 设置前缀及后缀图标。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/abwZGMJ">{{ code.prefix }}</i-code>
            </Demo>
            <Demo title="搜索框">
                <div slot="demo">
                    <Input search placeholder="Enter something..." />
                    <Input search enter-button placeholder="Enter something..." style="margin-top: 6px" />
                    <Input search enter-button="Search" placeholder="Enter something..." style="margin-top: 6px" />
                </div>
                <div slot="desc">
                    <p>开启 <code>search</code> 属性，可以设置为搜索型输入框。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/NWgrMJV">{{ code.search }}</i-code>
            </Demo>
            <Demo title="文本域">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value5" type="textarea" placeholder="Enter something..." />
                        </Col>
                        <Col span="12">
                            <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>type</code> 为 <code>textarea</code> 来使用文本域，用于多行输入。</p>
                    <p>通过设置属性 <code>rows</code> 控制文本域默认显示的行数。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/ExXyLzW">{{ code.textarea }}</i-code>
            </Demo>
            <Demo title="适应文本高度的文本域">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..." />
                        </Col>
                        <Col span="12">
                            <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>autosize</code>，文本域会自动适应高度的变化。</p>
                    <p><code>autosize</code>也可以设定为一个对象，指定最小行数和最大行数。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.autosize }}</i-code>
            </Demo>
            <Demo title="禁用状态">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value9" disabled placeholder="Enter something..." />
                        </Col>
                        <Col span="12">
                            <Input v-model="value10" disabled type="textarea" placeholder="Enter something..." />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>通过添加<code>disabled</code>属性可设置为不可用状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="复合型输入框">
                <div slot="demo">
                    <Input v-model="value11">
                        <span slot="prepend">http://</span>
                        <span slot="append">.com</span>
                    </Input>
                    <br>
                    <Input v-model="value12">
                        <Select v-model="select1" slot="prepend" style="width: 80px">
                            <Option value="http">http://</Option>
                            <Option value="https">https://</Option>
                        </Select>
                        <Select v-model="select2" slot="append" style="width: 70px">
                            <Option value="com">.com</Option>
                            <Option value="org">.org</Option>
                            <Option value="io">.io</Option>
                        </Select>
                    </Input>
                    <br>
                    <Input v-model="value13">
                        <Select v-model="select3" slot="prepend" style="width: 80px">
                            <Option value="day">Day</Option>
                            <Option value="month">Month</Option>
                        </Select>
                        <Button slot="append" icon="ios-search"></Button>
                    </Input>
                </div>
                <div slot="desc">
                    通过前置和后置的 slot 可以实现复合型的输入框。
                </div>
                <i-code lang="html" slot="code"  codeLink="https://codepen.io/xc9010/pen/xxrOjor">{{ code.addon }}</i-code>
            </Demo>

            <Demo title="输入时格式化展示">
                <div slot="demo">
                    <Poptip trigger="focus">
                        <Input v-model="value15" prefix="logo-usd" placeholder="Enter number" style="width: 120px" />
                        <div slot="content">{{ formatNumber }}</div>
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>结合 Poptip 组件，实现一个数值输入框，方便内容超长时的全量展现。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.format }}</i-code>
            </Demo>

            <Demo title="输入长度限制">
                <div slot="demo">
                    <Row :gutter="8">
                        <Col span="12">
                            <Input v-model="value16" clearable wordLimit :maxlength="10" placeholder="Enter something..." style="width: 200px" />
                        </Col>
                        <Col span="12">
                            <Input v-model="value17" clearable wordLimit type="textarea" :rows="4" :maxlength="30" placeholder="Enter something..." style="width: 200px" />
                        </Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。</p>
                    <p>对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 wordLimit 属性来展示字数统计。</p>
                </div>
                <i-code lang="html" slot="code" codeLink="https://codepen.io/xc9010/pen/xxrOjvr">{{ code.wordLimit }}</i-code>
            </Demo>



            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Input props" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>输入框类型，可选值为 <code>text</code>、<code>password</code>、<code>textarea</code>、<code>url</code>、<code>email</code>、<code>date</code></td>
                            <td>String</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>绑定的值，可使用 v-model 双向绑定</td>
                            <td>String | Number</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否显示清空按钮</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置输入框为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>设置输入框为只读</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>maxlength</td>
                            <td>最大输入长度</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>输入框尾部图标，仅在 text 类型下有效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>prefix</td>
                            <td>输入框头部图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>suffix</td>
                            <td>输入框尾部图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>search</td>
                            <td>是否显示为搜索型输入框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>enter-button</td>
                            <td>开启 search 时可用，是否有确认按钮，可设为按钮文字</td>
                            <td>Boolean | String</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>文本域默认行数，仅在 textarea 类型下有效</td>
                            <td>Number</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>autosize</td>
                            <td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td>
                            <td>Boolean | Object</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>number</td>
                            <td>将用户的输入转换为 Number 类型。在有正则的时候：1）该输入框为空的时候，值为空字符串。2）input方法不可用。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autofocus</td>
                            <td>自动获取焦点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autocomplete</td>
                            <td>原生的自动完成功能，可选值为 off 和 on,new-password</td>
                            <td>String</td>
                            <td>off</td>
                        </tr>
                        <tr>
                            <td>element-id</td>
                            <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>spellcheck</td>
                            <td>原生的 spellcheck 属性</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>wrap</td>
                            <td>原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效</td>
                            <td>String</td>
                            <td>soft</td>
                        </tr>
                        <tr>
                            <td>regx</td>
                            <td>正则表达式</td>
                            <td>正则表达式的类型</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>encrypt</td>
                            <td>组件type值为textarea时，加上该属性可以密文方式显示展示的内容</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>wordLimit</td>
                            <td>展示字数统计。设置maxlength时才生效</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>htmlExp</td>
                            <td>onBlur触发转义</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Input events" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-enter</td>
                            <td>按下回车键时触发</td>
                            <td>event和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-click</td>
                            <td>设置 icon 属性后，点击图标时触发</td>
                            <td>event和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-change</td>
                            <td>数据改变时触发</td>
                            <td>event和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-focus</td>
                            <td>输入框聚焦时触发</td>
                            <td>event和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-blur</td>
                            <td>输入框失去焦点时触发</td>
                            <td>event和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-keyup</td>
                            <td>原生的 keyup 事件</td>
                            <td>event和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-keydown</td>
                            <td>原生的 keydown 事件</td>
                            <td>event和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-keypress</td>
                            <td>原生的 keypress 事件</td>
                            <td>event和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-search</td>
                            <td>开启 search 时可用，点击搜索或按下回车键时触发</td>
                            <td>value和input组件实例this</td>
                        </tr>
                        <tr>
                            <td>on-regx-check</td>
                            <td>添加正则后，校验出错的时候触发</td>
                            <td>正确的值value和input组件实例this和错误的值errorValue</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Input slot" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>prepend</td>
                            <td>前置内容，仅在 text 类型下有效</td>
                        </tr>
                        <tr>
                            <td>append</td>
                            <td>后置内容，仅在 text 类型下有效</td>
                        </tr>
                        <tr>
                            <td>prefix</td>
                            <td>输入框头部图标</td>
                        </tr>
                        <tr>
                            <td>suffix</td>
                            <td>输入框尾部图标</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Input methods" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>方法名</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>focus</td>
                        <td>手动聚焦输入框</td>
                        <td>无</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/input';
    import inAnchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor
        },
        data () {
            return {
                code: Code,
                value: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
                value12: '',
                value13: '',
                value14: 'Hello World',
                value15: '',
                value16: '',
                value17: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        },
        computed: {
            formatNumber () {
                if (this.value15 === '') return 'Enter number';
                function parseNumber(str) {
                    const re = /(?=(?!\b)(\d{3})+$)/g;
                    return str.replace(re, ',');
                }
                return parseNumber(this.value15);
            }
        },
        watch: {
            value17(val) {
                console.log(val)
            }
        },
        methods: {

        }
    }
</script>
