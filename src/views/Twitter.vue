
<template>
    <div class="post">
        <ModuleTemplate title="Posts" :subTitle="'最后更新于: ' +  this.lastDate" :url="mikuConfig.blogUrl" :loading="loading">
            <ul id="article" class="article-list" v-if="loading" slot="body">
                <li class="article" v-for="(item, index) in data.items" :key="index">
                    <div>{{ item }}</div>
                </li>
            </ul>
        </ModuleTemplate>
        <modals-container transition="scale" />
    </div>
</template>
<script>
import dateFormat from "../assets/js/dateFormat.js";
import PostTemplate from "../components/PostTemplate.vue";
import ModuleTemplate from "../components/ModuleTemplate";
Date.prototype.Format = dateFormat;

export default {
  data() {
    return {
      data: [],
      loading: false
    };
  },
  methods: {
      
  },
  mounted() {
    const d = this.$store.get("miku_posts");
    if (d) {
        this.data = d;
        this.loading = true;
    } else {
      this.$http
        .get('https://rsshub.app/twitter/user/' + this.mikuConfig.twitterId + '.json')
        .then(e => {
            this.data = e.data;
            this.$store.set(
                "miku_posts",
                e.data,
                new Date().getTime() + this.mikuConfig.catchTime
            );
            this.loading = true;
        })
        .catch(err => {
          alert("获取数据失败: " + err);
        });
    }
    },
    computed: {
        lastDate() {
            if(!this.data.items) return ''
            let date = new Date(this.data.items[0].date_published);
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

}
</style>
