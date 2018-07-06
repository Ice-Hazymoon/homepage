/*
 * File: Post.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 9:42:36 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 12:17:23 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="post">
        <ModuleTemplate :title="moduleData.title" :subTitle="moduleData.subTitle" :url="moduleData.url" :loading="loading">
          <ul id="article" class="article-list" v-if="loading" slot="body">
              <li class="article" v-for="(item, index) in data" :key="index">
                  <div class="l">
                      <div class="article-title"><a @click.prevent="getPost(item)" :href="item.link" target="_blank" v-html="item.title.rendered"></a></div>
                      <div class="article-excerpt" v-html="item.excerpt.rendered"></div>
                  </div>
                  <div class="r">
                      <div class="media">
                          <a @click.prevent="getPost(item)" :href="item.link" target="_blank"><img :src="getMediaLink(index)"></a>
                      </div>
                  </div>
              </li>
          </ul>
        </ModuleTemplate>
        <modals-container transition="scale"/>
    </div>
</template>
<script>
import dateFormat from "../assets/js/dateFormat.js";
import PostTemplate from "../components/PostTemplate.vue";
import ModuleTemplate from '../components/ModuleTemplate';
Date.prototype.Format = dateFormat;

export default {
  data() {
    return {
      data: [],
      loading: false,
      moduleData: {
        title: 'Posts',
        subTitle: '最后更新于: ' +  this.lastDate,
        url: this.mikuConfig.blogUrl,
      }
    };
  },
  methods: {
    getMediaLink(index) {
      if (!this.data[index]._embedded["wp:featuredmedia"]) {
        return this.mikuConfig.defaultCover;
      } else {
        return this.data[index]._embedded["wp:featuredmedia"][0].source_url;
      }
    },
    getPost(item) {
      let con = item.content.rendered
        .replace(/src="data.+s="/g, "")
        .replace(/data-lazy-src/g, "src");
      this.$modal.show(
        PostTemplate,
        {
          title: item.title.rendered,
          content: con
        },
        {
          classes: "neko",
          height: "auto",
          scrollable: true,
          transition: "scale"
        },
        {
          draggable: true
        }
      );
    }
  },
  mounted() {
    const d = this.$store.get("miku_posts");
    if (d) {
      this.data = d;
      this.loading = true;
      this.$nextTick(() => {
        this.$pangu.spacingElementById("article");
      });
    } else {
      this.$http
        .get(this.mikuConfig.blogUrl + "/wp-json/wp/v2/posts?_embed")
        .then(e => {
          this.data = e.data;
          this.$store.set(
            "miku_posts",
            e.data,
            new Date().getTime() + this.mikuConfig.catchTime
          );
          this.loading = true;
          this.$nextTick(() => {
            this.$pangu.spacingElementById("article");
          });
        })
        .catch(err => {
          alert("获取数据失败: " + err);
        });
    }
  },
  computed: {
    lastDate() {
      let date = new Date(this.data[0].date);
      return date.Format("yyyy-MM-dd hh:mm:ss");
    }
  },
  components: {
    ModuleTemplate
  }
};
</script>
<style lang="scss" scoped>
.post {
  ul {
    padding: 30px 35px;
    box-sizing: border-box;
  }
  .article {
    display: flex;
    padding: 20px 0;
    font-family: "Microsoft YaHei";
    border-bottom: 1px solid #f5f5f5;
    .article-title {
      position: relative;
      padding-right: 15px;
      box-sizing: border-box;
      font-weight: bold;
      font-size: 20px;
      line-height: 1.2;
      a {
        text-decoration: none;
        color: #2b2f32;
        letter-spacing: 0.5px;
        word-break: break-all;
        transition: color 0.3s ease;
        &:hover {
          color: rgb(56, 183, 234);
          &::after {
            width: 325px;
          }
        }
        &::after {
          content: " ";
          position: absolute;
          bottom: -10px;
          left: 0;
          height: 2px;
          width: 0;
          background-color: rgb(56, 183, 234);
          transition: width 0.3s ease;
        }
      }
    }
    .article-excerpt {
      padding-right: 15px;
      box-sizing: border-box;
      font-size: 15px;
      color: #999;
      word-break: break-all;
      line-height: 1.2;
    }
    .media {
      img {
        width: 100%;
        height: 90px;
        object-fit: cover;
        border: 1px solid #eceff2;
        transition: 0.3s all ease;
        &:hover {
          opacity: 0.8;
          border: 1px solid #d1d1d1;
        }
      }
    }
    .l {
      width: 350px;
    }
    .r {
      width: 180px;
    }
  }
}
</style>
