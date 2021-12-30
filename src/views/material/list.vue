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
    // jsonp('https://www.npmjs.com/search/suggestions?q=%40syman&size=10000', (res) => callback(res))
    // window.callback = function(data){
    //   console.log(data)
    // }
    // http.get('/search/suggestions?q=%40syman&size=10000').then(r => {
    //   if (r.status === 200 && r.data) {
    //     this.list = r.data && r.data.filter(v => v.keywords && qs.parse(v.keywords[0]) && qs.parse(v.keywords[0]).type)
    //   }
    // })
    const json = [{"name":"@syman/ark-ui-bcl","scope":"syman","version":"1.3.1-test2","description":"Some high quality business component libraries","keywords":["name=arkdoc&type=2"],"date":"2021-12-30T02:35:09.783Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fark-ui-bcl"},"publisher":{"username":"ximao","email":"576747591@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/ark-cli","scope":"syman","version":"3.1.0-beta","description":"r3脚手架工具","date":"2021-12-29T02:32:56.835Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fark-cli"},"author":{"name":"burgeon developer"},"publisher":{"username":"yiq","email":"278199196@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/ark-ui","scope":"syman","version":"1.2.13","description":"A high quality UI components Library with Vue.js","date":"2021-12-27T11:09:32.782Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fark-ui","bugs":"https://github.com/iview/iview/issues"},"author":{"name":"Aresn"},"publisher":{"username":"xuchen199010","email":"xc9010@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/point-plugin","scope":"syman","version":"1.1.11","description":"uniapp/mpvue 数据埋点","keywords":["ponit-plugin","uniapp/mpvue数据埋点"],"date":"2021-01-07T06:55:48.782Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fpoint-plugin"},"author":{"name":"liming"},"publisher":{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},"maintainers":[{"username":"xuchen199010","email":"xc9010@qq.com"},{"username":"yiq","email":"278199196@qq.com"},{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"}]},{"name":"@syman/burgeon-r3-components","scope":"syman","version":"2.1.4","description":"> [You Can Click Here For More Help](https://gitee.com/bojun_front_end/r3-project-template/wikis/burgeon-r3)\r >\r packageTime:2020/9/7 16:50","date":"2021-12-18T13:30:40.563Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fburgeon-r3-components"},"author":{"name":"Burgeon Developer"},"publisher":{"username":"ximao","email":"576747591@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/ark-share-md","scope":"syman","version":"1.1.9","description":"Vue markdown editor","keywords":["javascript","vue","markdown","editor","html"],"date":"2021-10-19T06:46:36.144Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fark-share-md"},"author":{"name":"hinesboy"},"publisher":{"username":"yiq","email":"278199196@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/jflow-plugin","scope":"syman","version":"1.1.9","description":"A plugin for jflow","date":"2021-04-06T03:28:26.307Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fjflow-plugin"},"author":{"name":"?","email":"843748862.com"},"publisher":{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},"maintainers":[{"username":"xuchen199010","email":"xc9010@qq.com"},{"username":"yiq","email":"278199196@qq.com"},{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"}]},{"name":"@syman/burgeon-r3","scope":"syman","version":"3.4.4-connector-cusurl","description":"A Project for R3 Erp.","date":"2021-12-30T02:29:58.810Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fburgeon-r3"},"author":{"name":"Burgeon Front-End Developer"},"publisher":{"username":"ximao","email":"576747591@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/burgeon-r3-ie","scope":"syman","version":"1.3.28","description":"A Project for R3 Erp.","date":"2021-02-01T10:37:43.208Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fburgeon-r3-ie"},"author":{"name":"Burgeon Front-End Developer"},"publisher":{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},"maintainers":[{"username":"xuchen199010","email":"xc9010@qq.com"},{"username":"yiq","email":"278199196@qq.com"},{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"}]},{"name":"@syman/ark-mobile-ui","scope":"syman","version":"1.0.16","description":"Mobile UI Components built on Vue","keywords":["ui","vue","frontend","mobile ui","component","components"],"date":"2021-08-12T06:23:10.791Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fark-mobile-ui"},"author":{"name":"liming"},"publisher":{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/search_plugin","scope":"syman","version":"0.1.3","description":"## Project setup ``` npm install ```","date":"2021-01-29T08:07:47.932Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fsearch_plugin"},"publisher":{"username":"bi.j","email":"1285345902@qq.com"},"maintainers":[{"username":"xuchen199010","email":"xc9010@qq.com"},{"username":"yiq","email":"278199196@qq.com"},{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"}]},{"name":"@syman/ark-mobile-cli","scope":"syman","version":"1.0.5","description":"ark mobile Cli 是一个 vant cli 组件库构建工具，通过 Vant Cli 可以快速搭建一套功能完备的 Vue 组件库。","keywords":["vant"],"date":"2021-05-14T08:48:08.267Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fark-mobile-cli"},"author":{"name":"liming"},"publisher":{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},"maintainers":[{"username":"xuchen199010","email":"xc9010@qq.com"},{"username":"yiq","email":"278199196@qq.com"},{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"}]},{"name":"@syman/pos-plugin","scope":"syman","version":"0.0.22","description":"{**When you're done, you can delete the content in this README and update the file with details for others getting started with your repository**}","keywords":["@syman/pos-plugin","pos店务业务模块","typescript"],"date":"2021-11-03T03:22:20.650Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fpos-plugin"},"author":{"name":"liming"},"publisher":{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/ark-icon","scope":"syman","version":"1.0.0","date":"2019-08-23T05:30:47.375Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fark-icon"},"publisher":{"username":"huai.yang","email":"hycool.happy@163.com"},"maintainers":[{"username":"xuchen199010","email":"xc9010@qq.com"},{"username":"yiq","email":"278199196@qq.com"},{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"}]},{"name":"@syman/ark-dingtalk","scope":"syman","version":"0.0.11","description":"小程序版组件","keywords":["dingtalk-view"],"date":"2019-09-27T07:35:46.091Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fark-dingtalk"},"publisher":{"username":"xieshihua","email":"843748862@qq.com"},"maintainers":[{"username":"xuchen199010","email":"xc9010@qq.com"},{"username":"yiq","email":"278199196@qq.com"},{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"}]},{"name":"@syman/bmap","scope":"syman","version":"0.1.2","description":"## Project setup ``` npm install ```","keywords":["name=arkdoc&type=2"],"date":"2021-12-29T08:02:30.652Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fbmap"},"publisher":{"username":"xuchen199010","email":"xc9010@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/pie-charts","scope":"syman","version":"0.1.2","description":"## Project setup ``` npm install ```","keywords":["name=arkdoc&type=2"],"date":"2021-12-29T07:50:42.730Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fpie-charts"},"publisher":{"username":"xuchen199010","email":"xc9010@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/bar-charts","scope":"syman","version":"0.1.1","description":"## Project setup ``` npm install ```","keywords":["name=arkdoc&type=2"],"date":"2021-12-29T08:15:29.823Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fbar-charts"},"publisher":{"username":"xuchen199010","email":"xc9010@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@syman/line-charts","scope":"syman","version":"0.1.1","description":"## Project setup ``` npm install ```","keywords":["name=arkdoc&type=2"],"date":"2021-12-29T06:26:11.045Z","links":{"npm":"https://www.npmjs.com/package/%40syman%2Fline-charts"},"publisher":{"username":"xuchen199010","email":"xc9010@qq.com"},"maintainers":[{"username":"huai.yang","email":"hycool.happy@163.com"},{"username":"shiliuyuea","email":"liuyuewo@126.com"},{"username":"qubingnian","email":"1752711471@qq.com"},{"username":"bi.j","email":"1285345902@qq.com"},{"username":"xia.hj","email":"baizhi0425@163.com"},{"username":"ximao","email":"576747591@qq.com"},{"username":"xieshihua","email":"843748862@qq.com"},{"username":"burgeon-developer","email":"huai.y@burgeon.cn"},{"username":"gqw","email":"guo.qw@burgeon.cn"},{"username":"yiq","email":"278199196@qq.com"},{"username":"xuchen199010","email":"xc9010@qq.com"}]},{"name":"@itentialopensource/adapter-symantec_mgmtcenter","scope":"itentialopensource","version":"0.1.1","description":"This adapter integrates with system described as: Symantec Management Center","keywords":["Itential","IAP","Automation","Integration","App-Artifacts","Adapter","Security","symantec_mgmtcenter","Pre-Release"],"date":"2021-07-12T19:27:16.992Z","links":{"npm":"https://www.npmjs.com/package/%40itentialopensource%2Fadapter-symantec_mgmtcenter","homepage":"https://gitlab.com/itentialopensource/adapters/security/adapter-symantec_mgmtcenter#readme"},"author":{"name":"Itential"},"publisher":{"username":"itential-ci","email":"cloud@itential.com"},"maintainers":[{"username":"charlie.wilson","email":"charlie.wilson@itential.com"},{"username":"cma0","email":"chris.adams@itential.com"},{"username":"zack.strulovitch","email":"zack.strulovitch@itential.com"},{"username":"itential-ci","email":"cloud@itential.com"}]},{"name":"@datafire/symanto","scope":"datafire","version":"3.0.0","description":"DataFire integration for Psycholinguistic Text Analytics","date":"2020-12-21T21:06:49.573Z","links":{"npm":"https://www.npmjs.com/package/%40datafire%2Fsymanto","homepage":"https://github.com/DataFire/integrations#readme","repository":"https://github.com/DataFire/integrations","bugs":"https://github.com/DataFire/integrations/issues"},"author":{"name":"DataFire"},"publisher":{"username":"datafire","email":"bobby@datafire.io"},"maintainers":[{"username":"datafire","email":"bobby@datafire.io"}]}];
    this.list = json.filter(v => v.keywords && qs.parse(v.keywords[0]) && qs.parse(v.keywords[0]).type)
    console.log(this.list)
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
