/*
 * File: Music.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:56:00 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 12:44:57 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="music">
        <div class="title">
            <div class="l">Music <a :href="'http://music.163.com/#/user/home?id='+mikuConfig.wyyyyId"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r">数据来自 网易云音乐</div>
        </div>
        <div class="play">
            <vue-loading v-if="!playerLoad" class="loading" type="spiningDubbles" color="#38b7ea" :size="{ width: '50px', height: '50px' }"></vue-loading>   
            <aplayer v-if="playerLoad" showLrc :music="musicList[0]" :list="musicList" :shuffle="true" :mutex="true" :theme="'rgb(56, 183, 234)'"/>
        </div>
    </div>
</template>
<script>
import Aplayer from "vue-aplayer";
export default {
  data() {
    return {
      musicList: new Array(),
      playerLoad: false
    };
  },
  methods: {
    getLrc() {
      let lrc = this.musicList.map(value => {
        return this.$http.get(
          "https://api.imjad.cn/cloudmusic/?type=lyric&id=" + value.id
        );
      });
      this.$http
        .all(lrc)
        .then(e => {
          this.musicList.forEach((el, index) => {
            this.musicList[index].lrc = e[index].data.lrc.lyric;
            this.$store.set(
              "miku_music",
              this.musicList,
              new Date().getTime() + this.mikuConfig.catchTime
            );
            this.playerLoad = true;
          });
        })
        .catch(err => {
          alert("数据获取失败, 请稍后重试" + err);
        });
    }
  },
  mounted() {
    const d = this.$store.get("miku_music");
    if (d) {
      this.musicList = d;
      this.playerLoad = true;
    } else {
      this.$http
        .get(
          "https://api.imjad.cn/cloudmusic/?type=playlist&id=" +
            this.mikuConfig.playlistId
        )
        .then(e => {
          this.musicList = e.data.playlist.tracks.map(value => {
            return {
              id: value.id,
              title: value.name,
              artist: value.ar[0].name,
              src:
                "https://api.imjad.cn/cloudmusic/?type=song&raw=true&id=" +
                value.id,
              pic: value.al.picUrl,
              lrc: "[加载中...]\n[00:00.00]"
            };
          });
          this.getLrc();
        })
        .catch(err => {
          alert("数据获取失败, 请稍后重试" + err);
        });
    }
  },
  components: {
    Aplayer
  }
};
</script>
<style lang="scss" scoped>
.music {
  .loading {
    margin: 40px auto;
  }
  .aplayer {
    margin: 0;
    box-shadow: none;
  }
}
</style>
