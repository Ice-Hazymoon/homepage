/*
 * File: Bangumi.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:34:02 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Tuesday, 26th June 2018 3:17:14 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="bangumi">
        <div class="title">
            <div class="l">Bangumi <a href="https://space.bilibili.com/21851788/"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r">共计追番: {{ data.count }} 部  数据来自 Bilibili</div>
        </div>
        <ul v-if="loading" class="bangumi-list">
            <li v-for="(item, index) in data.item" :key="index">
                <a :href="item.uri" target="_blank"><img class="cover" :src="'https://tools.imiku.me/api/imgProxy.php?url='+item.cover" :title="item.title"></a>
                <div class="info"></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data: [],
            loading: false
        }
    },
    mounted(){
        const d = this.$store.get('miku_bangumi');
        if(d){
            this.data = d;
            this.loading = true;
        }else{
            this.$http.get('https://api.imjad.cn/bilibili/v2/?get=space&vmid=21851788&pagesize=200').then(e=>{
                this.data = e.data.data.season;
                this.$store.set('miku_bangumi', this.data, new Date().getTime()+86400000);
                this.loading = true;
            }).catch(err=>{
                alert('获取数据失败: '+err);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.bangumi{
    display: inline-block;
    vertical-align: top;
    width: 600px;
    margin: 0 30px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.09);
    .title{
        font-size: 20px;
        padding: 20px 0 20px 20px;
        letter-spacing: 1px;
        font-family: Arial;
        border-bottom: 1px solid #eceff2;
        svg{
            width: 18px;
            height: 18px;
            margin-left: 5px;
            fill: #2b2f32;
        }
        .l{
            display: inline-block;
        }
        .r{
            display: inline-block;
            float: right;
            line-height: 23px;
            font-size: 14px;
            color: rgb(158, 158, 158);
            margin-right: 20px;
        }
    }
    .bangumi-list{
        li{
            width: 200px;
            height: 260px;
            overflow: hidden;
            padding: 15px;
            display: inline-block;
            box-sizing: border-box;
        }
        a{
            cursor: pointer;
        }
        .cover{
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 2px 15px 1px rgba($color: #000000, $alpha: .15);
            border: 1px solid #f5f5f5;
            transition: all .4s ease;
            &:hover{
                box-shadow: none;
                transform: scale(1.1);
            }
        }
    }
}
</style>
