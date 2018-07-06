/*
 * File: Github.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 9:39:34 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 12:08:25 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */

<template>
    <div class="github">
        <div class="title">GitHub <a :href="'https://github.com/'+mikuConfig.githubUsername"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
        <vue-loading v-if="!loading" class="loading" type="spiningDubbles" color="#38b7ea" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <ul class="list" v-if="loading">
            <li v-for="(item, index) in data" :key="index">
                <a class="name" :href="item.url" target="_blank">{{ item.name }}</a>
                <div class="des">{{ item.description }}</div>
                <div class="icon">
                    <a :href="item.url" class="star" target="_blank">
                        <svg t="1529637368365" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1935" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M1011.977647 457.11192c-72.606614 83.841477-200.993796 222.203538-200.993796 222.203538s20.973494 152.011894 32.7596 255.776878c5.118688 52.866855-35.095822 75.730326-80.639016 55.150577-86.650192-41.290746-218.581082-105.234965-248.21697-119.59354-30.187132 14.227326-163.404255 77.069059-250.973186 118.254806-46.094437 20.553499-86.781441-2.283722-81.584004-55.071828 11.943604-103.607485 33.153345-255.409382 33.153345-255.409382s-129.909664-138.178313-203.382517-221.888541c-25.960933-30.397129-9.266137-73.604102 41.946988-81.584004C158.443066 356.234401 320.246091 326.467265 320.246091 326.467265s88.48767-154.610613 144.530736-249.319457c30.817124-57.618047 52.105614-50.976878 55.780569-49.270649 9.502384 3.097462 24.464701 14.332325 44.046962 49.349398 55.386824 94.840092 142.850756 249.660702 142.850756 249.660702s159.939298 29.819636 263.100538 48.561907C1021.138785 383.40282 1037.649833 426.688541 1011.977647 457.11192z" p-id="1936"></path></svg>
                        <span>{{ item.stargazers_count }}</span>
                    </a>
                    <div class="lang">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2619" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M280.448 376.32a53.76 53.76 0 0 0 0-75.52l-0.64-0.768a52.48 52.48 0 0 0-74.88 0L15.552 491.264a53.76 53.76 0 0 0 0 75.52l189.44 191.296a52.48 52.48 0 0 0 74.88 0l0.64-0.704a53.76 53.76 0 0 0 0-75.52l-113.92-115.008a53.76 53.76 0 0 1 0-75.52l113.92-115.072z m728.064 114.944l-189.44-191.232a52.48 52.48 0 0 0-74.88 0l-0.64 0.704a53.76 53.76 0 0 0 0 75.52l113.92 115.008a53.76 53.76 0 0 1 0 75.52l-113.92 115.072a53.76 53.76 0 0 0 0 75.52l0.64 0.64a52.48 52.48 0 0 0 74.88 0l189.44-191.168a53.76 53.76 0 0 0 0-75.52z m-318.144-223.36l-272.832 583.68c-8.832 18.368-24.32 41.024-44.352 41.024h-1.088c-38.912 0-64.256-52.8-47.04-88.448l271.232-578.176c8.832-18.304 41.6-32.64 41.6-32.64V192c52.928 0 69.632 40.32 52.48 75.904z" p-id="2620"></path></svg>
                        <span>{{ item.language }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      loading: false
    };
  },
  mounted() {
    const d = this.$store.get("miku_github");
    if (d) {
      this.data = d;
      this.loading = true;
    } else {
      this.$http
        .get(
          "https://api.github.com/users/" +
            this.mikuConfig.githubUserName +
            "/repos"
        )
        .then(e => {
          this.data = e.data;
          this.$store.set(
            "miku_github",
            this.data,
            new Date().getTime() + this.mikuConfig.catchTime
          );
          this.loading = true;
        })
        .catch(err => {
          alert("获取数据失败: " + err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.github {
  display: inline-block;
  vertical-align: top;
  width: 230px;
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  .title {
    font-size: 20px;
    letter-spacing: 1px;
    font-family: Arial;
    padding: 20px;
    border-bottom: 1px solid #f5f5f5;
    svg {
      width: 18px;
      height: 18px;
      margin-left: 5px;
      fill: #2b2f32;
    }
  }
  .loading {
    margin: 40px auto;
  }
  li {
    padding: 15px 20px;
    border-bottom: 1px solid #f5f5f5;
    .name {
      color: rgb(56, 183, 234);
      font-size: 18px;
      font-weight: bold;
      line-height: 1.5;
      text-decoration: none;
      font-family: Arial;
    }
    .des {
      font-style: italic;
      color: #bbbbbb;
      font-size: 12px;
      margin: 6px 0;
      line-height: 1.3;
    }
    .icon {
      font-size: 12px;
      .star {
        margin-right: 60px;
        color: #2b2f32;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
      }
      div {
        display: inline-flex;
        align-items: center;
        transform: scale(0.9);
      }
      svg {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 5px;
        fill: rgb(36, 41, 46);
      }
      span {
        vertical-align: middle;
      }
    }
  }
}
</style>
