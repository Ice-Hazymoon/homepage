/*
 * File: PostTemplate.vue
 * Project: router
 * File Created: Tuesday, 26th June 2018 5:21:48 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Tuesday, 26th June 2018 5:41:02 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="post">
        <div class="title">{{ title }}</div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: "内容"
    },
    title: {
      type: String,
      default: "标题"
    }
  }
};
</script>
<style lang="scss">
.neko {
  .title {
    padding: 15px 20px;
    font-size: 20px;
    font-family: "Microsoft YaHei";
    border-bottom: 1px solid #eceff2;
  }
}
</style>
