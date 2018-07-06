/*
 * File: Music.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:56:00 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 12:09:36 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="music">
        <ModuleTemplate :title="moduleData.title" :subTitle="moduleData.subTitle" :url="moduleData.url" :loading="playerLoad">
            <aplayer slot="body" v-if="playerLoad" showLrc :music="musicList[0]" :list="musicList" :shuffle="true" :mutex="true" :theme="'rgb(56, 183, 234)'"/>
        </ModuleTemplate>
    </div>
</template>
<script>
import Aplayer from "vue-aplayer";
import ModuleTemplate from '../components/ModuleTemplate';
export default {
  data() {
    return {
      musicList: new Array(),
      playerLoad: false,
      moduleData: {
        title: 'Music',
        subTitle: '数据来自 网易云音乐',
        url: 'http://music.163.com/#/user/home?id=' + this.mikuConfig.wyyyyId,
      }
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
    Aplayer,
    ModuleTemplate
  }
};
</script>
<style lang="scss" scoped>
.music {
  .aplayer {
    margin: 0;
    box-shadow: none;
  }
}
</style>
