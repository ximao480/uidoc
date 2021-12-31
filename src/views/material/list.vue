<template>
  <i-article>
    <div class="material">
      <div class="material-filter">
        <span class="filter-all">全部({{ list && list.length }})</span>
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
                    <a target="_blank" :href="item.links && item.links.npm">{{ item.name }}</a>
                  </div>
                  <div class="item-body-footer">
                    <Dropdown>
                      <a href="javascript:void(0)">
                        {{ item.publisher && item.publisher.username }}
                        <Icon type="ios-arrow-down"></Icon>
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem v-for="item in item.maintainers">{{ item.username }}</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <div class="tips">
                      <span><Icon type="ios-pricetag-outline"/>{{ item.version }}</span>
                      <span><Icon type="ios-time-outline"/>{{ item.date && item.date.slice(0, 10) }}</span>
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
      <div class="loading" v-if="iframeloading">
        <Spin size="large"></Spin>
      </div>
      <iframe
          v-show="!iframeloading"
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
      <div slot="footer">
        <Button size="large" @click="close">关闭</Button>
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
import {http} from '../../libs/network';


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
    }
  },

  created() {
    // jsonp('https://www.npmjs.com/search/suggestions?q=%40syman&size=10000', (res) => callback(res))
    // window.callback = function(data){
    //   console.log(data)
    // }
    // http.get('/search/suggestions?q=%40syman&size=10000').then(r => {
    //   if (r.status === 200 && r.data) {
    //     this.list = r.data && r.data.filter(v => v.keywords && qs.parse(v.keywords[0]) && qs.parse(v.keywords[0]).type)
    //   }
    // })
    const json = [{
      "name": "@syman/bmap",
      "scope": "syman",
      "version": "0.1.3",
      "description": "## Project setup ``` npm install ```",
      "keywords": ["name=arkdoc&type=2"],
      "date": "2021-12-29T08:02:30.652Z",
      "links": {"npm": "https://www.npmjs.com/package/%40syman%2Fbmap"},
      "publisher": {"username": "xuchen199010", "email": "xc9010@qq.com"},
      "maintainers": [{"username": "huai.yang", "email": "hycool.happy@163.com"}, {
        "username": "shiliuyuea",
        "email": "liuyuewo@126.com"
      }, {"username": "qubingnian", "email": "1752711471@qq.com"}, {
        "username": "bi.j",
        "email": "1285345902@qq.com"
      }, {"username": "xia.hj", "email": "baizhi0425@163.com"}, {
        "username": "ximao",
        "email": "576747591@qq.com"
      }, {"username": "xieshihua", "email": "843748862@qq.com"}, {
        "username": "burgeon-developer",
        "email": "huai.y@burgeon.cn"
      }, {"username": "gqw", "email": "guo.qw@burgeon.cn"}, {
        "username": "yiq",
        "email": "278199196@qq.com"
      }, {"username": "xuchen199010", "email": "xc9010@qq.com"}]
    }, {
      "name": "@syman/pie-charts",
      "scope": "syman",
      "version": "0.1.2",
      "description": "## Project setup ``` npm install ```",
      "keywords": ["name=arkdoc&type=2"],
      "date": "2021-12-29T07:50:42.730Z",
      "links": {"npm": "https://www.npmjs.com/package/%40syman%2Fpie-charts"},
      "publisher": {"username": "xuchen199010", "email": "xc9010@qq.com"},
      "maintainers": [{"username": "huai.yang", "email": "hycool.happy@163.com"}, {
        "username": "shiliuyuea",
        "email": "liuyuewo@126.com"
      }, {"username": "qubingnian", "email": "1752711471@qq.com"}, {
        "username": "bi.j",
        "email": "1285345902@qq.com"
      }, {"username": "xia.hj", "email": "baizhi0425@163.com"}, {
        "username": "ximao",
        "email": "576747591@qq.com"
      }, {"username": "xieshihua", "email": "843748862@qq.com"}, {
        "username": "burgeon-developer",
        "email": "huai.y@burgeon.cn"
      }, {"username": "gqw", "email": "guo.qw@burgeon.cn"}, {
        "username": "yiq",
        "email": "278199196@qq.com"
      }, {"username": "xuchen199010", "email": "xc9010@qq.com"}]
    }, {
      "name": "@syman/bar-charts",
      "scope": "syman",
      "version": "0.1.1",
      "description": "## Project setup ``` npm install ```",
      "keywords": ["name=arkdoc&type=2"],
      "date": "2021-12-29T08:15:29.823Z",
      "links": {"npm": "https://www.npmjs.com/package/%40syman%2Fbar-charts"},
      "publisher": {"username": "xuchen199010", "email": "xc9010@qq.com"},
      "maintainers": [{"username": "huai.yang", "email": "hycool.happy@163.com"}, {
        "username": "shiliuyuea",
        "email": "liuyuewo@126.com"
      }, {"username": "qubingnian", "email": "1752711471@qq.com"}, {
        "username": "bi.j",
        "email": "1285345902@qq.com"
      }, {"username": "xia.hj", "email": "baizhi0425@163.com"}, {
        "username": "ximao",
        "email": "576747591@qq.com"
      }, {"username": "xieshihua", "email": "843748862@qq.com"}, {
        "username": "burgeon-developer",
        "email": "huai.y@burgeon.cn"
      }, {"username": "gqw", "email": "guo.qw@burgeon.cn"}, {
        "username": "yiq",
        "email": "278199196@qq.com"
      }, {"username": "xuchen199010", "email": "xc9010@qq.com"}]
    }, {
      "name": "@syman/line-charts",
      "scope": "syman",
      "version": "0.1.2",
      "description": "## Project setup ``` npm install ```",
      "keywords": ["name=arkdoc&type=2"],
      "date": "2021-12-31T06:26:11.045Z",
      "links": {"npm": "https://www.npmjs.com/package/%40syman%2Fline-charts"},
      "publisher": {"username": "xuchen199010", "email": "xc9010@qq.com"},
      "maintainers": [{"username": "huai.yang", "email": "hycool.happy@163.com"}, {
        "username": "shiliuyuea",
        "email": "liuyuewo@126.com"
      }, {"username": "qubingnian", "email": "1752711471@qq.com"}, {
        "username": "bi.j",
        "email": "1285345902@qq.com"
      }, {"username": "xia.hj", "email": "baizhi0425@163.com"}, {
        "username": "ximao",
        "email": "576747591@qq.com"
      }, {"username": "xieshihua", "email": "843748862@qq.com"}, {
        "username": "burgeon-developer",
        "email": "huai.y@burgeon.cn"
      }, {"username": "gqw", "email": "guo.qw@burgeon.cn"}, {
        "username": "yiq",
        "email": "278199196@qq.com"
      }, {"username": "xuchen199010", "email": "xc9010@qq.com"}]
    },
      {
        "name": "@syman/html2pdf",
        "scope": "syman",
        "version": "0.1.2",
        "keywords": [
          "name=arkdoc&type=2"
        ],
        "date": "2021-12-31T09:28:30.268Z",
        "links": {
          "npm": "https://www.npmjs.com/package/%40syman%2Fhtml2pdf"
        },
        "publisher": {
          "username": "xuchen199010",
          "email": "xc9010@qq.com"
        },
        "maintainers": [
          {
            "username": "huai.yang",
            "email": "hycool.happy@163.com"
          },
          {
            "username": "shiliuyuea",
            "email": "liuyuewo@126.com"
          },
          {
            "username": "qubingnian",
            "email": "1752711471@qq.com"
          },
          {
            "username": "bi.j",
            "email": "1285345902@qq.com"
          },
          {
            "username": "xia.hj",
            "email": "baizhi0425@163.com"
          },
          {
            "username": "ximao",
            "email": "576747591@qq.com"
          },
          {
            "username": "xieshihua",
            "email": "843748862@qq.com"
          },
          {
            "username": "burgeon-developer",
            "email": "huai.y@burgeon.cn"
          },
          {
            "username": "gqw",
            "email": "guo.qw@burgeon.cn"
          },
          {
            "username": "yiq",
            "email": "278199196@qq.com"
          },
          {
            "username": "xuchen199010",
            "email": "xc9010@qq.com"
          }
        ]
      },];
    this.list = json
    console.log(JSON.stringify(this.list))
  },

  methods: {
    showPage(item) {
      if (item) {
        this.showmodal = true;
        this.iframeloading = true;
        this.link = `https://unpkg.com/${item.name}@${item.version}/.arkdoc-dist/index.html`;
        this.title = item.name;
        // this.getDetail(item)
      }

    },
    // getDetail(item) {
    //   http.get(`/${item.name}`).then(r => {
    //     if (r.status === 200 && r.data) {
    //       this.logData = r.data.time && Object.keys(r.data.time).map(v => ({
    //         version: v,
    //       }))
    //     }
    //   })
    //
    // },
    close() {
      this.showmodal = false;
      this.title = '';
      this.link = '';
    },
    iframeLoaded() {
      this.iframeloading = false;
    }
  },
}
</script>

<style scoped lang="less">
.material {
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  width: 1300px;
  min-height: calc(100vh - 369px);
  margin: 0 auto;

  .material-filter {
    display: flex;
    align-items: center;
    margin-top: 20px;

    .filter-all {
      min-width: 108px;
      height: 32px;
      font-size: 16px;
      font-weight: 600;
      line-height: 32px;
    }
  }

  .material-content {
    display: flex;
    align-items: flex-start;
    margin-top: 36px;

    .material-list {
      position: relative;
      flex: 4;

      .material-wrap {
        margin: -10px;
        justify-content: flex-start;
        align-items: flex-start;
        display: flex;
        flex-flow: row wrap;

        .material-item {
          padding: 10px;
          flex: 0 0 33.33333333%;
          width: 33.333333%;
          height: 280px;

          .item-cover {
            overflow: hidden;

            .cover-content {
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              border-radius: 4px 4px 0 0;
              background-color: #f7f8fa;
              cursor: pointer;
              overflow: hidden;

              &:after {
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

          .item-body {
            background-color: var(--color-bg-2);
            padding: 14px 12px 16px;

            .item-body-title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-weight: 600 !important;
              font-size: 14px !important;

              a {
                color: #4e5969;
              }
            }

            .item-body-footer {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 6px;

              .tips {
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

.modal {
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .ark-spin {
      display: inline-block;
    }
  }
}
</style>
