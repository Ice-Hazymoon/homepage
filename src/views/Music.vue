/*
 * File: Music.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:56:00 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Monday, 25th June 2018 5:13:45 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="music">
        <div class="title">
            <div class="l">Music <a href="http://music.163.com/#/user/home?id=261910478"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r">数据来自 xxx</div>
        </div>
        <div class="play">
            <aplayer v-if="mikuData.music" autoplay :music="mikuData.music[0]" :list="mikuData.music" :shuffle="true" :mutex="true" :theme="'rgb(56, 183, 234)'"/>
        </div>
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer';
export default {
    props: {
        mikuData: {
            type: Object,
            default: {}
        }
    },
    data(){
        return {
            Player: {
                title: 'secret base~君がくれたもの~',
                artist: 'Silent Siren',
                src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
            },
            musicList: [],
            playerLoad: false
        }
    },
    created(){
        this.musicList = this.$store.get('playerData');


        // let musicList = new Array();
        // this.mikuData.music.forEach(async (el, index) => {
        //     await this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id='+el.id).then(e=>{
        //         let d = {
        //             title: el.name,
        //             artist: el.ar[0].name,
        //             src: e.data.data[0].url,
        //             pic: el.al.picUrl
        //         }
        //         musicList.push(d)
        //     })
        // });
        // this.musicList = musicList;
        // this.$store.set('playerData', musicList)
    },
    mounted(){
        // this.playerLoad = true
    },
    components: {
        Aplayer
    }
}
</script>
<style lang="scss" scoped>
.music{
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
    .aplayer{
        margin: 0;
        box-shadow: none;
    }
}
</style>
