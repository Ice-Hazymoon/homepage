/*
 * File: Pixiv.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:54:10 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 12:17:22 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="pixiv">
        <transition name="img-loading">
            <div class="img-loading" v-show="loadImg" @click="loadImg = false">
                <div class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
                <div class="text">LOADING</div>
            </div>
        </transition>
        <div class="title">
            <div class="l">Pixiv <a :href="'https://www.pixiv.net/member.php?id='+mikuConfig.pixivId"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r">数据来自 Pixiv</div>
        </div>
        <vue-loading v-if="!loading" class="loading" type="spiningDubbles" color="#38b7ea" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <ul class="grid" v-if="loading">
            <li class="grid-item" v-for="(item, index) in data" :key="index">
                <img data-action="zoom" 
                class="a" 
                :data-zooming-width="item.width" 
                :data-zooming-height="item.height" 
                :data-original="handleOriginalImage(item)" 
                :src="handleImgUrl(item.image_urls.square_medium)" 
                :alt="item.title">
                <div class="info">
                    <div class="p-title">
                        <a target="_blank" :href="'https://www.pixiv.net/member_illust.php?mode=medium&illust_id='+item.id">
                        <svg class="icon heading" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9096" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M32 0v1024" fill="" p-id="9097"></path><path d="M64 0v1024" fill="" p-id="9098"></path><path d="M96 0v1024" fill="" p-id="9099"></path><path d="M128 0v1024" fill="" p-id="9100"></path><path d="M160 0v1024" fill="" p-id="9101"></path><path d="M192 0v1024" fill="" p-id="9102"></path><path d="M224 0v1024" fill="" p-id="9103"></path><path d="M256 0v1024" fill="" p-id="9104"></path><path d="M288 0v1024" fill="" p-id="9105"></path><path d="M320 0v1024" fill="" p-id="9106"></path><path d="M352 0v1024" fill="" p-id="9107"></path><path d="M384 0v1024" fill="" p-id="9108"></path><path d="M416 0v1024" fill="" p-id="9109"></path><path d="M448 0v1024" fill="" p-id="9110"></path><path d="M480 0v1024" fill="" p-id="9111"></path><path d="M512 0v1024" fill="" p-id="9112"></path><path d="M544 0v1024" fill="" p-id="9113"></path><path d="M576 0v1024" fill="" p-id="9114"></path><path d="M608 0v1024" fill="" p-id="9115"></path><path d="M640 0v1024" fill="" p-id="9116"></path><path d="M672 0v1024" fill="" p-id="9117"></path><path d="M704 0v1024" fill="" p-id="9118"></path><path d="M736 0v1024" fill="" p-id="9119"></path><path d="M768 0v1024" fill="" p-id="9120"></path><path d="M800 0v1024" fill="" p-id="9121"></path><path d="M832 0v1024" fill="" p-id="9122"></path><path d="M864 0v1024" fill="" p-id="9123"></path><path d="M896 0v1024" fill="" p-id="9124"></path><path d="M928 0v1024" fill="" p-id="9125"></path><path d="M960 0v1024" fill="" p-id="9126"></path><path d="M992 0v1024M0 32h1024" fill="" p-id="9127"></path><path d="M0 64h1024" fill="" p-id="9128"></path><path d="M0 96h1024" fill="" p-id="9129"></path><path d="M0 128h1024" fill="" p-id="9130"></path><path d="M0 160h1024" fill="" p-id="9131"></path><path d="M0 192h1024" fill="" p-id="9132"></path><path d="M0 224h1024" fill="" p-id="9133"></path><path d="M0 256h1024" fill="" p-id="9134"></path><path d="M0 288h1024" fill="" p-id="9135"></path><path d="M0 320h1024" fill="" p-id="9136"></path><path d="M0 352h1024" fill="" p-id="9137"></path><path d="M0 384h1024" fill="" p-id="9138"></path><path d="M0 416h1024" fill="" p-id="9139"></path><path d="M0 448h1024" fill="" p-id="9140"></path><path d="M0 480h1024" fill="" p-id="9141"></path><path d="M0 512h1024" fill="" p-id="9142"></path><path d="M0 544h1024" fill="" p-id="9143"></path><path d="M0 576h1024" fill="" p-id="9144"></path><path d="M0 608h1024" fill="" p-id="9145"></path><path d="M0 640h1024" fill="" p-id="9146"></path><path d="M0 672h1024" fill="" p-id="9147"></path><path d="M0 704h1024" fill="" p-id="9148"></path><path d="M0 736h1024" fill="" p-id="9149"></path><path d="M0 768h1024" fill="" p-id="9150"></path><path d="M0 800h1024" fill="" p-id="9151"></path><path d="M0 832h1024" fill="" p-id="9152"></path><path d="M0 864h1024" fill="" p-id="9153"></path><path d="M0 896h1024" fill="" p-id="9154"></path><path d="M0 928h1024" fill="" p-id="9155"></path><path d="M0 960h1024" fill="" p-id="9156"></path><path d="M0 992h1024" fill="" p-id="9157"></path><path d="M440.236 635.766a51.834 51.834 0 0 1-36.77-15.23c-95.134-95.136-95.134-249.934 0-345.07l192-192C641.554 37.38 702.826 12 768 12s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.07l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99C840.554 130.562 805.396 116 768 116s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54a51.838 51.838 0 0 1-36.768 15.23z" fill="" p-id="9158"></path><path d="M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.07l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992C183.446 893.438 218.604 908 256 908s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192C382.448 986.622 321.174 1012 256 1012z" p-id="9159"></path></svg>
                        {{ item.title }}</a>
                    </div>
                    <div class="p-author">
                        <svg class="icon author" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6732" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M511.974422 597.320534c125.79211 0 241.856707-109.869707 254.860857-270.578471C780.453798 158.60967 668.792181 0 511.974422 0 355.20786 0 243.495046 158.60967 257.113565 326.742063c13.00415 160.708765 129.119944 270.578471 254.860857 270.578471z m-2.252688 86.728464c-281.534723 0-509.721714 111.917604-509.721714 249.9971 0 47.255237 43.415429 65.430328 171.101845 79.253637C269.708135 1023.948803 387.61584 1023.948803 511.974422 1023.948803c127.430428 0 253.785711 0 342.664467-10.649068 125.740913-15.103245 169.309935-31.9984 169.309934-79.253637 0-138.079496-232.743563-249.9971-514.227089-249.9971z" p-id="10958"></path></svg>
                        {{ item.user.name }}
                    </div>
                    <div class="p-date">
                        <svg class="icon date" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4381" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M512 90.125c-233.0015625 0-421.875 188.8734375-421.875 421.875s188.8734375 421.875 421.875 421.875c233.0015625 0 421.875-188.8734375 421.875-421.875S745.0015625 90.125 512 90.125L512 90.125zM512 849.5c-186.384375 0-337.5-151.115625-337.5-337.5s151.115625-337.5 337.5-337.5 337.5 151.115625 337.5 337.5S698.384375 849.5 512 849.5L512 849.5z" p-id="4382"></path><path d="M680.75 469.8125L554.1875 469.8125l0-210.9375c0-23.2875-18.8578125-42.1875-42.1875-42.1875-23.2875 0-42.1875 18.9-42.1875 42.1875l0 253.125c0 23.2875 18.9 42.1875 42.1875 42.1875l168.75 0c23.3296875 0 42.1875-18.9 42.1875-42.1875C722.9375 488.6703125 704.0796875 469.8125 680.75 469.8125L680.75 469.8125z" p-id="4383"></path></svg>
                        {{ handleDate(item.create_date) }}
                    </div>
                    <div class="p-like">
                        <svg class="icon like" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3167" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M716.420251 100.408851c12.646018 0 26.025747 0.733711 40.558741 2.025123 87.581708 8.734942 188.924837 89.502453 201.188138 244.506736l0 51.423183C946.814572 546.521235 835.686588 729.47508 511.076466 958.957635 186.49909 729.47508 75.406922 546.592866 63.844585 398.398686l0-51.457975C76.10584 191.866842 177.626002 111.168915 264.996908 102.433974c14.428617-1.292436 28.051893-2.025123 40.663118-2.025123 101.135398 0 149.72914 44.227294 205.415416 110.776989C566.586734 144.636145 615.110891 100.408851 716.420251 100.408851" p-id="3168"></path></svg>
                        {{ item.total_bookmarks }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import dateFormat from "../assets/js/dateFormat.js";
Date.prototype.Format = dateFormat;

import Zooming from "zooming";
export default {
  data() {
    return {
      loadImg: false,
      data: null,
      loading: false
    };
  },
  methods: {
    handleDate(d) {
      if (d) {
        let date = new Date(d);
        return date.Format("yyyy-MM-dd");
      }
    },
    // 图片放大效果
    handleImg() {
      new Zooming({
        bgColor: "#fff",
        bgOpacity: 0.8,
        scaleBase: 0.8,
        onImageLoading: () => {
          this.loadImg = true;
        },
        onImageLoaded: () => {
          this.loadImg = false;
        }
      }).listen('[data-action="zoom"]');
    },
    // 判断是多图还是单图, 如果是多图, 使用第一张图片作为大图
    handleOriginalImage(item) {
      if (item.meta_single_page.original_image_url) {
        let imgUrl = item.meta_single_page.original_image_url;
        return this.handleImgUrl(imgUrl);
      } else {
        let imgUrl = item.meta_pages[0].image_urls.large.replace(
          /c\/600x1200_90\//,
          ""
        );
        return this.handleImgUrl(imgUrl);
      }
    },
    // 处理图片地址
    handleImgUrl(url) {
      // 判断是否使用 pixiv.moe 作为图片代理, 如果使用了将删除 `https` 字段
      if (this.mikuConfig.pixivProxy.indexOf("pixiv.moe") !== -1) {
        return this.mikuConfig.pixivProxy + url.replace(/https:\/\//, "");
      } else {
        return this.mikuConfig.pixivProxy.replace(/{url}/, url);
      }
    }
  },
  created() {
    const d = this.$store.get("miku_pixiv");
    if (d) {
      this.data = d;
      this.loading = true;
      this.$nextTick(this.handleImg);
    } else {
      this.$http
        .get(
          "https://api.imjad.cn/pixiv/v2/?type=favorite&id=" +
            this.mikuConfig.pixivId
        )
        .then(e => {
          this.data = e.data.illusts;
          this.$store.set(
            "miku_pixiv",
            e.data.illusts,
            new Date().getTime() + this.mikuConfig.catchTime
          );
          this.loading = true;
          this.$nextTick(this.handleImg);
        })
        .catch(err => {
          alert("获取数据失败: " + err);
        });
    }
  },
  computed: {
    proxy() {
      if (this.mikuConfig.pixivProxy.indexOf("pixiv.moe") !== -1) {
        return "";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.img-loading-enter-active,
.img-loading-leave-active {
  transition: 0.5s ease all;
}
.img-loading-enter,
.img-loading-leave-to {
  opacity: 0;
}
.img-loading-leave,
.img-loading-enter-to {
  opacity: 1;
}
.pixiv {
  .img-loading {
    z-index: 9999;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .spinner {
      position: relative;
      margin: 0 auto;
      margin-top: 200px;
      width: 50px;
      height: 40px;
      text-align: center;
      font-size: 10px;
      div {
        margin-right: 3px;
      }
      & > div {
        background-color: rgb(32, 126, 194);
        height: 100%;
        width: 6px;
        display: inline-block;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
      }
      .rect2 {
        animation-delay: -1.1s;
      }
      .rect3 {
        animation-delay: -1s;
      }
      .rect4 {
        animation-delay: -0.9s;
      }
      .rect5 {
        animation-delay: -0.8s;
      }
    }
    .text {
      font-size: 20px;
      text-align: center;
      margin-top: 20px;
      letter-spacing: 1.5px;
    }
  }
  .loading {
    margin: 40px auto;
  }
  .grid {
    position: relative;
    width: 100%;
    .grid-item {
      width: (100% / 3);
    }
    .grid-item {
      position: relative;
      width: 200px;
      height: 200px;
      box-sizing: border-box;
      float: left;
      &:hover {
        .info {
          opacity: 1;
        }
        &::after {
          opacity: 0.7;
        }
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.7;
        transition: opacity 0.4s ease;
        pointer-events: none;
        opacity: 0;
      }
      .info {
        z-index: 2;
        position: absolute;
        bottom: 10px;
        width: 200px - 40px;
        left: 20px;
        box-sizing: border-box;
        color: #fff;
        transition: opacity 0.4s ease;
        opacity: 0;
        a {
          cursor: alias;
        }
        svg {
          width: 15px;
          height: 15px;
          fill: #fff;
          margin-right: 5px;
          &.like {
            fill: rgb(255, 87, 87);
          }
          &.heading {
            fill: rgb(83, 152, 255);
          }
          &.author {
            fill: rgb(255, 167, 96);
          }
          &.date {
            fill: rgb(147, 255, 132);
          }
        }
        [class^="p-"] {
          line-height: 1.7;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      img {
        max-width: 100%;
        display: block;
      }
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
