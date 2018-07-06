/*
 * File: ModuleTemplate.vue
 * Project: router
 * File Created: Friday, 6th July 2018 10:20:54 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 6th July 2018 10:20:54 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div>
        <div class="title">
            <div class="l">{{ title }} <a :href="url"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r">{{ subTitle }}</div>
        </div>
        <vue-loading v-if="!loading" class="loading" type="spiningDubbles" color="#38b7ea" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <slot name="body"></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            default: '暂无数据',
            required: false,
            type: String
        },
        subTitle: {
            default: '暂无数据',
            required: false,
            type: String
        },
        url: {
            default: '',
            required: false,
            type: String
        },
        loading: {
            default: false,
            required: false,
            type: Boolean
        }
    }
}
</script>
<style lang="scss" scoped>
  .loading {
    margin: 40px auto;
  }
</style>
