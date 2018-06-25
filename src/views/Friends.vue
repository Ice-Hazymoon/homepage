/*
 * File: Friend.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:56:14 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Monday, 25th June 2018 3:53:15 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
/*
 * File: Pixiv.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 3:54:10 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 22nd June 2018 3:55:39 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="friend">
        <div class="title">
            <div class="l">Friends <a href="https://planet.imiku.me"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r">永远的好朋友</div>
        </div>
        <ul class="list">
            <li @click="flipped">
                <div class="front">
                    <img src="../assets/images/avatar.jpg" alt="" class="avatar">
                </div>
                <div class="back">Yo, what up?</div>
            </li>
            <li @click="flipped">
                <div class="front">
                    <img src="../assets/images/avatar.jpg" alt="" class="avatar">
                </div>
                <div class="back">Yo, what up?</div>
            </li>
        </ul>
    </div>
</template>
<script>

(CSS.paintWorklet || paintWorklet).addModule('http://hazymoon-public.b0.upaiyun.com/test/smooth-corners.js')

export default {
    methods: {
        flipped(e){
            if(e.currentTarget.classList.contains('flipped')){
                e.currentTarget.classList.remove('flipped')
            }else{
                e.currentTarget.classList.add('flipped')
            }
            // e.target.classList.contains('flipped') ? e.target.classList.remove('flipped') : e.target.classList.add('flipped')
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
.friend{
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
    .list{
        li{
            position: relative;
            width: 150px;
            margin: 20px;
            padding: 20px 0;
            box-sizing: border-box;
            border-radius: 10px;
            box-shadow: 0px 1px 30px 1px rgba($color: rgb(56, 183, 234), $alpha: .2);
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            .front,.back{
                position: relative;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
            }
            .back{
                transform: rotateY(180deg);
            }
            &.flipped{
                transform: rotateY(180deg);
          
            }
        }
        .avatar{
            width: 80px;
            height: 80px;
            display: block;
            margin: 0 auto;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: 0px 1px 1px 1px rgba($color: #000, $alpha: .12)
        }
    }
}
</style>
