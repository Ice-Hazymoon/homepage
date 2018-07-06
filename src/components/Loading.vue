/*
 * File: Loading.vue
 * Project: router
 * File Created: Friday, 6th July 2018 11:40:10 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 11:55:00 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <transition name="img-loading">
      <div class="img-loading" v-show="load" @click="load = false">
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
</template>
<script>
export default {
  props: {
    load: {
      default: false,
      type: Boolean,
      required: true
    }
  }
}
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
