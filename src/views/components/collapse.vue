<template>
    <i-article>
        <article>
            <h1>Collapse 折叠面板</h1>
            <inAnchor title="概述" h2></inAnchor>
            <p>将内容区域折叠/展开。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Collapse v-model="value1">
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">
                    <p>默认可以同时展开多个面板，可以设置默认展开第几个。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="手风琴">
                <div slot="demo">
                    <Collapse accordion v-model="value2">
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>accordion</code>开启手风琴模式，每次只能打开一个面板。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.accordion }}</i-code>
            </Demo>
            <Demo title="面板嵌套">
                <div slot="demo">
                    <Collapse accordion v-model="value3">
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <div slot="content">
                                史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                                <Collapse accordion v-model="value4">
                                    <Panel name="1-1">
                                        iPhone
                                        <p slot="content">iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>
                                    </Panel>
                                    <Panel name="1-2">
                                        iPad
                                        <p slot="content">iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">
                    <p>折叠面板可以进行嵌套。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.nest }}</i-code>
            </Demo>
            <Demo title="简洁模式">
                <div slot="demo">
                    <Collapse simple>
                        <Panel name="1">
                            史蒂夫·乔布斯
                            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                        </Panel>
                        <Panel name="2">
                            斯蒂夫·盖瑞·沃兹尼亚克
                            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                        </Panel>
                        <Panel name="3">
                            乔纳森·伊夫
                            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>simple</code> 可以显示为不带边框和背景色的简洁模式。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.simple }}</i-code>
            </Demo>



            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Collapse props" h3></inAnchor>
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
                            <td>value</td>
                            <td>当前激活的面板的 name，可以使用 v-model 双向绑定</td>
                            <td>Array | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>accordion</td>
                            <td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>simple</td>
                            <td>是否开启简洁模式</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Collapse events" h3></inAnchor>
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
                            <td>on-change</td>
                            <td>切换面板时触发，返回当前已展开的面板的 key，格式为数组</td>
                            <td>[]</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Panel props" h3></inAnchor>
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
                            <td>name</td>
                            <td>当前面板的 name，与 Collapse的<code>value</code>对应，不填为索引值</td>
                            <td>String</td>
                            <td>index</td>
                        </tr>
                        <tr>
                            <td>hide-arrow</td>
                            <td>隐藏箭头</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>isTitleShow</td>
                            <td>是否显示头部</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Panel slot" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>无</td>
                            <td>面板头内容</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>描述内容</td>
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
    import Code from '../../code/collapse';
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
                value1: '1',
                value2: '1',
                value3: '1',
                value4: '1-1'
            }
        }
    }
</script>
