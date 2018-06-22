/*
 * File: Music.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:56:00 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 22nd June 2018 5:04:24 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="music">
        <div class="title">
            <div class="l">Music <a href="http://music.163.com/#/user/home?id=261910478"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r">数据来自 xxx</div>
        </div>
        <div class="play">
            <aplayer autoplay :music="Player.music" :list="Player.list" :shuffle="true" :mutex="true" :theme="'rgb(56, 183, 234)'"/>
        </div>
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer';
export default {
    data(){
        return {
            Player: {
                music: {
                    title: 'secret base~君がくれたもの~',
                    artist: 'Silent Siren',
                    src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
                    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                },
                list: [{
                    title: 'カゲロウ',
                    artist: 'Stack',
                    src: 'https://myblogpic.b0.upaiyun.com/music/Stack%20-%20%E3%82%AB%E3%82%B2%E3%83%AD%E3%82%A6.mp3',
                    pic: 'data:image/jpg;base64,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'
                },{
                    title: 'secret base~君がくれたもの~',
                    artist: 'Silent Siren',
                    src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
                    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                }]
            }
        }
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
}
</style>
