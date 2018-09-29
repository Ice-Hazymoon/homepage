/*
 * File: Bangumi.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:34:02 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 12:46:34 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="bangumi">
        <ModuleTemplate title="Bangumi" :subTitle="'共计追番: ' + data.count + ' 部  数据来自 Bilibili'" :url="'https://space.bilibili.com/' + mikuConfig.bilibiliId" :loading="loading">
            <ul v-if="loading" class="bangumi-list" slot="body">
                <li v-for="(item, index) in data.result" :key="index">
                    <a :href="item.uri" target="_blank"><img class="cover" :src="mikuConfig.bilibiliProxy.replace(/{url}/, item.cover)" :title="item.title"></a>
                        <div class="info"></div>
                </li>
            </ul>
        </ModuleTemplate>
    </div>
</template>
<script>
import ModuleTemplate from "../components/ModuleTemplate";
export default {
  data() {
    return {
      data: {},
      loading: false
    };
  },
  mounted() {
    const d = this.$store.get("miku_bangumi");
    if (d) {
      this.data = d;
      this.loading = true;
    } else {
      this.$http
        .get(
          "https://api.imiku.me/proxyApi.php?http://space.bilibili.com/ajax/Bangumi/getList?page=1&pagesize=100&mid=" +
            this.mikuConfig.bilibiliId
        )
        .then(e => {
          console.log(e.data.data);
          this.data = e.data.data;
          this.$store.set(
            "miku_bangumi",
            this.data,
            new Date().getTime() + 86400000
          );
          this.loading = true;
        })
        .catch(err => {
          alert("获取数据失败: " + err);
        });
    }
  },
  components: {
    ModuleTemplate
  }
};
</script>
<style lang="scss" scoped>
.bangumi {
  .bangumi-list {
    li {
      width: 200px;
      height: 260px;
      overflow: hidden;
      padding: 15px;
      display: inline-block;
      box-sizing: border-box;
    }
    a {
      cursor: pointer;
    }
    .cover {
      width: 100%;
      border-radius: 5px;
      box-shadow: 0 2px 15px 1px rgba($color: #000000, $alpha: 0.15);
      border: 1px solid #f5f5f5;
      transition: all 0.4s ease;
      &:hover {
        box-shadow: none;
        transform: scale(1.1);
      }
    }
  }
}
</style>
