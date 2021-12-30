<template>
  <i-article>
    <div class="material">
      <div class="material-filter">
        <span class="filter-all">全部({{list && list.length}})</span>
      </div>
      <div class="material-content">
        <div class="material-list">
          <div class="material-wrap">
            <div class="material-item" v-for="item in list">
              <Card style="width:320px;height: 260px" :padding="0">
                <div class="item-cover" @click="showPage(item)">
                  <div class="cover-content">
                    <h3 style="position:absolute;">{{ item.name }}</h3>
                  </div>
                </div>
                <div class="item-body">
                  <div class="item-body-title">
                    <a target="_blank" :href="item.links && item.links.npm">{{item.name}}</a>
                  </div>
                  <div class="item-body-footer">
                    <Dropdown>
                      <a href="javascript:void(0)">
                        {{item.publisher && item.publisher.username}}
                        <Icon type="ios-arrow-down"></Icon>
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem v-for="item in item.maintainers">{{ item.username }}</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <div class="tips">
                      <span><Icon type="ios-pricetag-outline" />{{item.version}}</span>
                      <span><Icon type="ios-time-outline" />{{item.date && item.date.slice(0, 10)}}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal class-name="modal" v-model="showmodal" fullscreen closable :title="title">
      <Tabs v-model="tabType" @on-click="changeTab" v-if="!iframeloading">
        <TabPane label="文档" name="1"></TabPane>
        <TabPane label="更新日志" name="2"></TabPane>
      </Tabs>
      <div class="loading" v-if="iframeloading">
        <Spin size="large"></Spin>
      </div>
      <iframe
          v-show="!iframeloading && tabType === '1'"
          :src="link"
          seamless
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="auto"
          id="iframename"
          name="iframename"
          @load="iframeLoaded"
      ></iframe>

      <Table v-if="tabType === '2'" :columns="logCol" :data="logData"></Table>
      <div slot="footer">
        <Button size="large"  @click="close">关闭</Button>
      </div>
    </Modal>
  </i-article>
</template>

<script type="text/ecmascript-6">
import iArticle from '../../components/article.vue';
import iCode from 'iCode';
import qs from 'qs';
import Code from '../../code/cli/start';
import inAnchor from '../../components/anchor.vue';
import Study from '../../components/study.vue';
import { http } from '../../libs/network';


export default {
  name: '',

  components: {
    iArticle,
    iCode,
    inAnchor,
    Study
  },

  data() {
    return {
      list: [],
      showmodal: false,
      iframeloading: false,
      link: '',
      title: '',
      tabType: 1,
      logCol: [
        {
          title: '版本号',
          key: 'version'
        },
        {
          title: '日期',
          key: 'time',
          sortable: true,
          sortType: 'desc'
        },

      ],
      logData: [],
    }
  },

  created() {
    http.get('/p/cs/QueryList').then(r => {
      if (r.status === 200 && r.data) {
        this.list = r.data && r.data.filter(v => v.keywords && qs.parse(v.keywords[0]) && qs.parse(v.keywords[0]).type)
      }
    })
  },

  methods: {
    showPage(item) {
      if (item) {
        this.showmodal = true;
        this.iframeloading = true;
        this.tabType = '1';
        this.link = `https://unpkg.com/${item.name}@${item.version}/.arkdoc-dist/index.html`;
        this.title = item.name;
        this.getDetail(item)
      }

    },
    getDetail(item) {
      http.get(`/${item.name}`).then(r => {
        if (r.status === 200 && r.data) {
          this.logData = r.data.time && Object.keys(r.data.time).map(v => ({ version: v, time: this.formatData(r.data.time[v]) }))
        }
      })

    },
    close() {
      this.showmodal = false;
      this.title = '';
      this.link = '';
      this.tabType = '1';
      this.logData = [];
    },
    iframeLoaded() {
      this.iframeloading = false;
    },
    changeTab(val) {
      this.tabType = val;
    },
    formatData(t) {
      let time = new Date(t).valueOf()+ 8*3600*1000;
      return new Date(time).toJSON().substr(0, 19).replace('T', ' ');
    }
  },
}
</script>

<style scoped lang="less">
  .material{
    padding: 10px;
    position: relative;
    box-sizing: border-box;
    width: 1300px;
    min-height: calc(100vh - 369px);
    margin: 0 auto;
    .material-filter{
      display: flex;
      align-items: center;
      margin-top: 20px;
      .filter-all{
        min-width: 108px;
        height: 32px;
        font-size: 16px;
        font-weight: 600;
        line-height: 32px;
      }
    }
    .material-content{
      display: flex;
      align-items: flex-start;
      margin-top: 36px;
      .material-list{
        position: relative;
        flex: 4;
        .material-wrap{
          margin: -10px;
          justify-content: flex-start;
          align-items: flex-start;
          display: flex;
          flex-flow: row wrap;
          .material-item{
            padding: 10px;
            flex: 0 0 33.33333333%;
            width: 33.333333%;
            height: 280px;
            .item-cover{
              overflow: hidden;
              .cover-content{
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                border-radius: 4px 4px 0 0;
                background-color: #f7f8fa;
                cursor: pointer;
                overflow: hidden;
                &:after{
                  content: "";
                  display: block;
                  width: 100%;
                  padding-top: 58%;
                  pointer-events: none;
                  z-index: 1;
                  transition: all .3s ease;
                }
              }
            }
            .item-body{
              background-color: var(--color-bg-2);
              padding: 14px 12px 16px;
              .item-body-title{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 600!important;
                font-size: 14px!important;
                a{
                  color: #4e5969;
                }
              }
              .item-body-footer{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 6px;
                .tips{
                  height: 16px;
                  line-height: 16px;
                  vertical-align: text-bottom;
                }
              }
            }
          }
        }
      }

    }

  }
  .modal{
    .loading{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      .ark-spin{
        display: inline-block;
      }
    }
  }
</style>
