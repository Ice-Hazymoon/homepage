/*
 * File: InfoCard.vue
 * Project: router
 * File Created: Thursday, 21st June 2018 4:36:39 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Thursday, 5th July 2018 11:59:31 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Copyright 2017 - 2018
 */
<template>
    <div class="info">
        <modal :classes="'conectMod v--modal'" name="conect" transition="conect" :width="320" :height="300">
            <div class="t">联系方式</div>
            <div class="btn-list">
                <a target="_blank" :href="'http://wpa.qq.com/msgrd?v=3&uin='+mikuConfig.contact.qq+'&site=qq&menu=yes'" ><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2350" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M876 489.6c-29.5-46.6-42.3-96.8-50-150-27.8-193.3-218.4-318.2-402.9-261-121.8 37.8-196 122.8-220.7 248.5-11.5 58.7-22.6 116.1-56.4 168.4-34.2 52.9-43.4 114.9-38.9 177.9 2.6 36.4 13.7 69.5 40.7 96.5 8.1 8.1 16.2 21.5 15.7 32.1-3.1 76.6 42.2 117.1 106.4 139.5 71.1 24.8 143.8 23.7 214.1-5.9 19.1-8.1 34.5-11 54.6-1.2 57.8 28.1 119.9 28.5 181.3 17.3 97.9-17.8 141-70.5 141.3-168.2 30.7-22.2 49.9-53.4 54.3-92.3 8-71.2-0.8-140.5-39.5-201.6z m-39.7 166.9c-0.5 18.1-7.9 35.9-14.9 66.1-25-21.2-39.2-33.2-54.3-46-17.5 26.8-34.1 52.2-52.1 79.9 10.9 6 23.7 10.1 32.4 18.5 12.1 11.7 27 25.4 29.9 40.4 4.2 21.7-15.4 34.3-33.6 42.4-57.8 25.9-117.9 28.8-174.1 0.5-40.2-20.2-73.3-21.6-113.5-0.4-52.7 27.7-109.7 24.5-165.5 4.9-6.1-2.1-12-5.2-17.4-8.6-36.5-23-37.5-52.3-2-76 11.9-7.9 25.1-13.7 38.5-20.9-17.6-27.7-33.9-53.5-51.5-81.4-14.8 12.6-29.6 25.3-45.2 38.5-28-21.6-26.6-48.4-25.1-73.4 3.2-52.8 17.4-102.5 53.5-143.2 13.6-15.2 18.2-31.5 20.8-52 5.8-44.6 14.6-89.2 27.2-132.4C319.8 209 418.3 140.6 525 146.4c104.9 5.7 193.8 81.9 215.8 186.5 9.3 44 14.9 88.8 24.7 132.7 2.9 13.1 13.1 25.2 21.8 36.4 35.2 45.6 50.7 97.7 49 154.5z m0 0" p-id="2351"></path></svg> <button class="c-btn">QQ</button></a>
                <a target="_blank" :href="'https://t.me/'+mikuConfig.contact.telegram" ><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3602" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M766.4 929.7c-15.7 0-30.7-6.5-41.9-13.2l-1.2-0.7L541 770.6l-81.3 84.9c-11.5 12.4-25.8 27.7-53.8 27.7h-21.3l15-244.2 293.7-285.2-380.6 259.3-202.8-69.3c-26.8-8.3-42.9-24.5-44-44.5-0.8-13.3 5-38.7 51.7-59l0.3-0.1 753.7-313.3c22-10.5 45.2-8.7 62.2 4.8 10 7.9 31.8 32 19.9 83.8L825.2 867.1c-5.8 30.1-18.5 49.7-37.7 58.3-7 3.1-14.1 4.3-21.1 4.3z m-20.3-46.9c10.7 6.2 19.8 8.4 25.1 6 6.3-2.8 11.7-13.6 14.8-29.4L914.5 207l0.1-0.3c5.7-24.4 0.7-38.6-5.8-43.8-6.6-5.3-15.6-2.2-20.3 0.2l-1.1 0.5L133.3 477c-20.9 9.1-26.8 17.5-27.5 19.9 0.9 1.5 5.1 5.4 16 8.8l0.6 0.2 184.2 62.9 439.7-299.4 0.2-0.1c21.6-14 44.5-13.9 55.8 0.2 7.1 8.9 9.7 24.8-6.4 40.5l-0.1 0.1-357.1 346.8-10.7 174c0.8-0.8 1.6-1.7 2.5-2.7l0.2-0.2 106.6-111.4 208.8 166.2z" fill="" p-id="3603"></path></svg> <button class="c-btn">Telegram</button></a>
                <a target="_blank" :href="'mailto:'+mikuConfig.contact.email" ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="4952" xmlns:xlink="http://www.w3.org/1999/xlink" class="mail"><path data-v-6190d07a="" d="M864 896H160c-52.8 0-96-43.2-96-96V224c0-52.8 43.2-96 96-96h704c52.8 0 96 43.2 96 96v576c0 52.8-43.2 96-96 96zM160 192c-17.6 0-32 14.4-32 32v576c0 17.6 14.4 32 32 32h704c17.6 0 32-14.4 32-32V224c0-17.6-14.4-32-32-32H160z" p-id="4953"></path><path d="M512 617.6c-22.4 0-46.4-8-64-24L203.2 376c-12.8-11.2-14.4-32-3.2-44.8 11.2-12.8 32-14.4 44.8-3.2l244.8 217.6c12.8 11.2 30.4 11.2 43.2 0l244.8-217.6c12.8-11.2 33.6-11.2 44.8 3.2s11.2 33.6-3.2 44.8L576 593.6c-19.2 16-41.6 24-64 24z" p-id="4954"></path></svg> <button class="c-btn">Email</button></a>
            </div>
        </modal>
        <div class="avatar">
            <img src="../assets/images/avatar.jpg" alt="">
        </div>
        <div class="name">{{ mikuConfig.name }}</div>
        <div class="post">{{ mikuConfig.job }}</div>
        <div class="adder">{{ mikuConfig.address }}</div>
        <div class="button">
            <a target="_blank" class="github btn" :href="'https://github.com/'+mikuConfig.githubUserName">GitHub</a>
            <div class="conect btn" @click="showConect">Conect</div>
        </div>
        <div class="copyright">© 2018 <a href="https://imiku.me">Ice-Hazymoon</a></div>
    </div>
</template>
<script>
export default {
  methods: {
    showConect() {
      this.$modal.show("conect", { foo: "bar" });
    }
  }
};
</script>
<style lang="scss" scoped>
.copyright {
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  font-size: 12px;
  border-top: 1px solid #eceff2;
  color: rgb(185, 185, 185);
  a{
    text-decoration: underline
  }
}
.info {
  display: inline-block;
  vertical-align: top;
  width: 250px;
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.09);
  .avatar {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
      background-color: rgb(129, 200, 252);
      transition: opacity 0.3s ease;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .name,
  .post,
  .adder {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-family: Arial;
  }
  .name {
    color: #3d4347;
  }
  .post {
    color: #565a5f;
  }
  .adder {
    color: #a6a9ac;
  }
  .button {
    .btn {
      margin: 0 auto;
      width: 150px;
      border-radius: 20px;
      text-align: center;
      padding: 10px 0;
      box-sizing: border-box;
      display: block;
      cursor: pointer;
      transition: all 0.3s ease;
      &:nth-child(1) {
        background-color: rgb(56, 183, 234);
        color: #fff;
        margin-bottom: 10px;
        margin-top: 20px;
      }
      &:nth-child(2) {
        color: rgb(56, 183, 234);
        border: 1px solid rgb(56, 183, 234);
      }
      &:hover {
        opacity: 0.9;
        box-shadow: 0px 1px 1px 1px rgba($color: #000000, $alpha: 0.1);
      }
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>
