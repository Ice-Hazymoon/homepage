/*
 * File: InfoCard.vue
 * Project: router
 * File Created: Thursday, 21st June 2018 4:36:39 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Tuesday, 26th June 2018 5:07:21 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Copyright 2017 - 2018
 */
<template>
    <div class="info">
        <div class="avatar">
            <img src="../assets/images/avatar.jpg" alt="">
        </div>
        <div class="name">Ice-Hazymoon</div>
        <div class="post">Front-end developert</div>
        <div class="adder">Yunnan China</div>
        <div class="button">
            <div class="github"><a target="_blank" href="https://github.com/Ice-Hazymoon">GitHub</a></div>
            <div class="conect">Conect</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.info{
    display: inline-block;
    vertical-align: top;
    width: 250px;
    background-color: #fff;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.09);
    padding-bottom: 20px;
    .avatar{
        width: 100%;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            position: relative;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
            background-color: rgb(129, 200, 252);
            transition: opacity .3s ease;
            cursor: pointer;
            &:hover{
                opacity: .7;
            }
        }
    }
    .name, .post, .adder{
        display: block;
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        letter-spacing: 1px;
        font-family: Arial;
    }
    .name{
        color: #3d4347;
    }
    .post{
        color: #565a5f;
    }
    .adder{
        color: #a6a9ac;
    }
    .button{
        div{
            margin: 0 auto;
            width: 150px;
            border-radius: 20px;
            text-align: center;
            padding: 10px 0;
            box-sizing: border-box;
            cursor: pointer;
            transition: all .3s ease;
            &:nth-child(1){
                background-color: rgb(56, 183, 234);
                color: #fff;
                margin-bottom: 10px;
                margin-top: 20px;
            }
            &:nth-child(2){
                color: rgb(56, 183, 234);
                border: 1px solid rgb(56, 183, 234);;
            }
            &:hover{
                opacity: .9;
                box-shadow: 0px 1px 1px 1px rgba($color: #000000, $alpha: .1)
            }
            &:active{
                opacity: .8;
            }
        }
    }
}
</style>

