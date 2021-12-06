<template>
  <i-article>
    <div class="material">
      <div class="material-filter">
        material-filter
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
                    {{item.name}}
                  </div>
                  <div class="item-body-footer">
                    <span>{{item.author}}</span>
                    <div>
                      <span>{{item.download}}</span>
                      <span>{{item.fav}}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="modal11" fullscreen :title="title">
      <iframe :src="link" width="100%" height="800" frameborder="0" scrolling="auto" id="iframename" name="iframename"></iframe>
    </Modal>
  </i-article>
</template>

<script type="text/ecmascript-6">
import iArticle from '../../components/article.vue';
import iCode from 'iCode';
import Code from '../../code/cli/start';
import inAnchor from '../../components/anchor.vue';
import Study from '../../components/study.vue';

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
      list: [
        { name: 'name1', author: 'xc', download: 20, fav: 8, type: 'vue', link: 'http://www.baidu.com/'},
        { name: 'name2', author: 'xc', download: 11, fav: 9, type: 'vue', link: 'http://www.baidu.com/'},
        { name: 'name3', author: 'xc', download: 22, fav: 10, type: 'vue', link: 'http://www.baidu.com/'},
        { name: 'name4', author: 'xc', download: 22, fav: 10, type: 'vue', link: 'http://www.baidu.com/'},
        { name: 'name5', author: 'xc', download: 22, fav: 10, type: 'vue', link: 'http://www.baidu.com/'},
        { name: 'name6', author: 'xc', download: 22, fav: 10, type: 'vue', link: 'http://www.baidu.com/'},
        { name: 'name7', author: 'xc', download: 22, fav: 10, type: 'vue', link: 'http://www.baidu.com/'},
        { name: 'name8', author: 'xc', download: 22, fav: 10, type: 'vue', link: 'http://www.baidu.com/'},
      ],
      modal11: false,
      link: '',
      title: ''
    }
  },

  methods: {
    showPage(item) {
      console.log('item', item)
      this.modal11 = true;
      this.link = item.link;
      this.title = item.name;

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
                background-color: var(--color-fill-1);
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
              }
              .item-body-footer{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 6px;
              }
            }
          }
        }
      }

    }

  }
</style>
