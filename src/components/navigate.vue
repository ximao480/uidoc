<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<style lang="less">
    @import "../styles/asd.less";
</style>
<template>
    <div class="navigate">
        <template v-if="lang === 'zh-CN'">
            <a v-for="item in app.adList1" :href="item.link" target="_blank" class="asd asd-mb" :key="item.id" @click="handleAsideAd(item.id)">
                <div class="asd-main">
                    <img :src="item.img">
                </div>
            </a>
            <Affix :offset-top="64" class="asd-affix" @on-change="handleChangeAdAffix">
                <Carousel v-model="adCarousel" autoplay :autoplay-speed="5000" radius-dot v-if="app.adList4.length && adCarouselShow" arrow="never">
                    <CarouselItem v-for="item in app.adList4" :key="item.id">
                        <a :href="item.link" target="_blank" class="asd asd-mb" @click="handleAsideAd(item.id)">
                            <div class="asd-main asd-main-no-opacity">
                                <img :src="item.img">
                            </div>
                        </a>
                    </CarouselItem>
                </Carousel>
            </Affix>
        </template>
        <!--<div class="asd-car" v-else>-->
            <!--<iframe src="https://file.iviewui.com/ad6.html" frameborder="0" width="100%" height="100%"></iframe>-->
        <!--</div>-->
        <Menu width="auto" :active-name="activeKey" v-if="type === 'guide'">
            <Menu-item v-for="item in navigate.guide" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'component'">
            <Menu-item v-for="item in navigate.beforeComponents" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)" :target="item.target">
                <template v-if="item.title !== '更新日志'">
                    <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                    <template v-else>{{ item.titleEn }}</template>
                </template>
                <template v-if="item.title === '更新日志'">
                    <Badge :dot="false">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.titleEn }}</template>
                    </Badge>
                </template>
            </Menu-item>
            <!--<Button type="warning" v-if="lang === 'zh-CN'" icon="heart" size="small" style="width:130px;margin:15px 0 15px 15px;" @click="handleDonate">{{ $t('index.donate') }}</Button>-->
            <div class="navigate-group">{{ $t('index.component') }}</div>
            <Menu-group v-for="item in navigate.components" :key="item.type" :title="lang === 'zh-CN' ? item.title : item.type">
                <Menu-item v-for="component in item.list" :key="component.path" :name="component.path" :to="handleGoToMenu(component.path)">
                    <i v-if="!component.iconfont" class="ark-icon" :class="'iconfont icon' + component.icon"></i>
                    <i v-if="component.iconfont" class="iconfont" :class="'ark-iconfont icon' + component.icon"></i>
                    <template v-if="lang === 'zh-CN'">
                        {{ component.title.split(' ')[0] }}
                        <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                    </template>
                    <template v-else>{{ component.title.split(' ')[0] }}</template>
                </Menu-item>
            </Menu-group>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'practice'">
            <Menu-item v-for="item in navigate.practice" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'live'">
            <Menu-item v-for="item in navigate.live" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'bcl'">
            <Menu-item v-for="item in navigate.bclStart" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'bcl'">
            <Menu-group v-for="item in navigate.bcl" :key="item.type" :title="lang === 'zh-CN' ? item.title : item.type">
                <Menu-item v-for="component in item.list" :key="component.path" :name="component.path" :to="handleGoToMenu(component.path)">
                    <i v-if="!component.iconfont" class="ark-icon" :class="'iconfont icon' + component.icon"></i>
                    <i v-if="component.iconfont" class="iconfont" :class="'ark-iconfont icon' + component.icon"></i>
                    <template v-if="lang === 'zh-CN'">
                        {{ component.title.split(' ')[0] }}
                        <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                    </template>
                    <template v-else>{{ component.title.split(' ')[0] }}</template>
                </Menu-item>
            </Menu-group>
        </Menu>
        <Menu width="auto" :active-name="activeKey" v-if="type === 'cli'">
            <Menu-item v-for="item in navigate.cli" :key="item.path" :name="item.path" :to="handleGoToMenu(item.path)">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
    </div>
</template>
<script>
    import navigate from '../config/navigate';
    import version from '../config/config';
    import bus from './bus';
    // import adSend from './ad-send.vue';

    export default {
        inject: ['app'],
        // components: { adSend },
        props: {
            type: {
                type: [String, Number]
            }
        },
        data () {
            return {
                navigate: navigate,
                showDot: false,
                activeKey: this.$route.path,
                lang: this.$lang,
                showAd: false,
                adCarousel: 0,
                adCarouselShow: false
            }
        },
        methods: {
            handleDonate () {
                bus.$emit('on-donate-show');
            },
            handleSelect (path) {
                if (this.lang === 'en-US') path += '-en';
                this.$nextTick(() => {
                    this.$router.push(path);
                });
            },
//             handleAd () {
//                 _hmt.push(['_trackEvent', 'vue-juejin', 'click']);
// //                this.$router.push('/live');
// //                this.showAd = true;
//                 window.open('https://juejin.im/welcome/frontend?utm_source=iview&utm_medium=banner&utm_content=huoyue&utm_campaign=q4_website');
//             },
//             handleAdBmqb () {
//                 _hmt.push(['_trackEvent', 'vue-bmqb', 'click']);
//                 window.open('https://www.bmqb.com/a/jobs?from=iview');
//             },
//             handleBuy (type) {
//                 if (type === 'taobao') {
//                     window.open('https://detail.tmall.com/item.htm?id=559480603657');
//                 } else if (type === 'jd') {
//                     window.open('https://item.jd.com/12215519.html');
//                 } else if (type === 'video') {
//                     window.open('https://segmentfault.com/ls/1650000011074057');
//                 } else if (type === 'dangdang') {
//                     window.open('http://product.dangdang.com/25180286.html');
//                 }
//             },
            handleGoToMenu (name) {
                if (this.lang === 'zh-CN') {
                    return name;
                } else {
                    return name + '-en';
                }
            },
            handleAsideAd (name) {
                _hmt.push(['_trackEvent', name, 'click']);
            },
            handleChangeAdAffix (status) {
                this.adCarousel = 0;
                this.adCarouselShow = status;
            }
        },
        created () {
            this.lang = this.$lang;
            const path = this.lang === 'zh-CN' ? this.$route.path : this.$route.path.split('-en')[0];
            this.activeKey = path;
        },
        mounted () {
            // 判断是否已阅读更新日志
            const dotVersion = window.localStorage.getItem('version');
            if (dotVersion) {
                this.showDot = dotVersion < version.version;
            } else {
                this.showDot = true;
            }
        }
    }
</script>
