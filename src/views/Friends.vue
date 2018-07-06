/*
 * File: Friend.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:56:14 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 12:17:39 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="friend">
        <ModuleTemplate :title="moduleData.title" :subTitle="moduleData.subTitle" :url="moduleData.url" :loading="loading">
          <ul class="list" v-if="loading" slot="body">
            <li @click="flipped" v-for="(item, index) in data" :key="index" :title="item.name">
                <div class="front">
                    <img :src="item.image" :alt="item.name" class="avatar">
                </div>
                <div class="back">
                    <div class="name">
                        {{ item.name }}
                    </div>
                    <div class="link">
                        <a target="_blank" :href="item.url"><svg class="icon-link" viewBox="0 0 1580 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2602" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0 980.702614c0-56.641668 76.466251-357.550527 295.952714-513.315114 184.08542-130.983857 392.95157-160.720732 526.059488-160.720732 0-67.26198-7.080208-228.690733-7.080208-271.171984s25.48875-43.189272 56.641667-21.240625c85.670522 59.473751 615.978136 417.732299 669.0797 449.593237s53.101563 70.802085 0 106.203127-613.146053 421.272403-648.547095 438.972924-70.802085 31.860938-70.802085-31.860938v-251.3474s-284.62438-19.824584-494.19855 77.882293c-159.30469 74.342189-233.646879 159.30469-257.011567 198.245837" p-id="2603"></path></svg></a>
                    </div>
                </div>
            </li>
          </ul>
        </ModuleTemplate>
    </div>
</template>
<script>
import ModuleTemplate from '../components/ModuleTemplate';
export default {
  data() {
    return {
      data: [],
      loading: false,
      moduleData: {
        title: 'Friends',
        subTitle: '永远的好朋友',
        url: this.mikuConfig.linksUrl,
      }
    };
  },
  methods: {
    flipped(e) {
      if (e.currentTarget.classList.contains("flipped")) {
        e.currentTarget.classList.remove("flipped");
      } else {
        e.currentTarget.classList.add("flipped");
      }
    }
  },
  mounted() {
    const d = this.$store.get("miku_friends");
    if (d) {
      this.data = d;
      this.loading = true;
    } else {
      this.$http
        .get(this.mikuConfig.linksData)
        .then(e => {
          this.data = e.data;
          this.$store.set(
            "miku_friends",
            this.data,
            new Date().getTime() + this.mikuConfig.catchTime
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
.friend {
  li {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 20px;
    padding: 35px 0;
    box-sizing: border-box;
    float: left;
    border-radius: 10px;
    box-shadow: 0px 1px 30px 1px rgba($color: rgb(56, 183, 234), $alpha: 0.2);
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    .front,
    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
    .front {
      display: flex;
      align-items: center;
      &:hover {
        .avatar {
          width: 150px;
          height: 150px;
          border-radius: 0;
          box-shadow: none;
        }
      }
    }
    .back {
      position: absolute;
      transform: rotateY(180deg);
    }
    &.flipped {
      transform: rotateY(180deg);
    }
    &::after {
      content: "";
      clear: both;
      display: block;
    }
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0px 1px 1px 1px rgba($color: #000, $alpha: 0.12);
    transition: all 0.4s ease;
  }
  .name {
    font-size: 20px;
    text-align: center;
    font-family: "Microsoft YaHei";
    margin: 35px auto 20px auto;
  }
  .link {
    text-align: center;
    .icon-link {
      width: 25px;
      height: 25px;
      fill: rgb(56, 183, 234);
    }
  }
}
</style>
