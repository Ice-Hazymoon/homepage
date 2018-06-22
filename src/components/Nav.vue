/*
 * File: Head.vue
 * Project: router
 * File Created: Thursday, 21st June 2018 2:49:46 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 22nd June 2018 4:02:51 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Copyright 2017 - 2018
 */
<template>
    <div class="header">
        <div class="head">
            <div class="logo">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <div class="search">
                <input placeholder="Search" type="text">
                <div class="icon">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M940.571 852.693l-214.475-214.722c44.778-60.855 69.263-134.077 69.263-211.012 0-95.732-37.354-185.78-104.889-253.311-67.781-67.536-157.825-104.889-253.557-104.889s-185.78 37.354-253.311 104.889c-139.518 139.518-139.518 366.859 0 506.626 67.536 67.536 157.579 104.889 253.311 104.889 77.18 0 150.155-24.487 211.257-69.263l214.475 214.722c21.52 21.52 56.403 21.52 77.676 0 21.77-21.52 21.77-56.403 0.25-77.921zM252.866 611.256c-101.425-101.673-101.425-266.916 0-368.342 49.227-49.227 114.535-76.192 184.295-76.192 69.511 0 134.819 26.966 184.047 76.192 49.227 49.227 76.443 114.535 76.443 184.295 0 69.762-27.211 135.065-76.443 184.295-49.227 49.227-114.535 76.192-184.047 76.192-69.762-0.25-135.065-27.211-184.295-76.443z"></path></svg>
                </div>
            </div>
            <div class="links">
                <ul>
                    <li v-for="(item, index) in config.navLinks" :key="index">
                        <a :href="item.link">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="other">
                <a title="RSS" href="https://imiku.me/feed"><svg class="rss" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M554.666667 896c-25.6 0-42.666667-17.066667-42.666667-42.666667 0-187.733333-153.6-341.333333-341.333333-341.333333-25.6 0-42.666667-17.066667-42.666667-42.666667s17.066667-42.666667 42.666667-42.666666c234.666667 0 426.666667 192 426.666666 426.666666 0 25.6-17.066667 42.666667-42.666666 42.666667z" p-id="6275"></path><path d="M853.333333 896c-25.6 0-42.666667-17.066667-42.666666-42.666667 0-354.133333-285.866667-640-640-640-25.6 0-42.666667-17.066667-42.666667-42.666666s17.066667-42.666667 42.666667-42.666667c401.066667 0 725.333333 324.266667 725.333333 725.333333 0 25.6-17.066667 42.666667-42.666667 42.666667z" p-id="6276"></path><path d="M213.333333 810.666667m-85.333333 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z" p-id="6277"></path></svg></a>
                <a title="E-MAIL" href="mailto:imiku.me@gmail.com"><svg class="mail" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="4952" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M864 896H160c-52.8 0-96-43.2-96-96V224c0-52.8 43.2-96 96-96h704c52.8 0 96 43.2 96 96v576c0 52.8-43.2 96-96 96zM160 192c-17.6 0-32 14.4-32 32v576c0 17.6 14.4 32 32 32h704c17.6 0 32-14.4 32-32V224c0-17.6-14.4-32-32-32H160z" p-id="4953"></path><path d="M512 617.6c-22.4 0-46.4-8-64-24L203.2 376c-12.8-11.2-14.4-32-3.2-44.8 11.2-12.8 32-14.4 44.8-3.2l244.8 217.6c12.8 11.2 30.4 11.2 43.2 0l244.8-217.6c12.8-11.2 33.6-11.2 44.8 3.2s11.2 33.6-3.2 44.8L576 593.6c-19.2 16-41.6 24-64 24z" p-id="4954"></path></svg></a>
                <a title="QRCODE" href="javascript:;"><svg class="qrcode" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2628" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M331.904 958.624H110.624A110.752 110.752 0 0 1 0 848v-221.216a110.752 110.752 0 0 1 110.624-110.624h221.28a110.752 110.752 0 0 1 110.624 110.624V848a110.752 110.752 0 0 1-110.624 110.624zM110.624 589.92c-20.32 0-36.864 16.512-36.864 36.864V848c0 20.352 16.544 36.864 36.864 36.864h221.28c20.32 0 36.864-16.512 36.864-36.864v-221.216c0-20.352-16.544-36.864-36.864-36.864H110.624zM737.568 921.76a36.832 36.832 0 0 1-36.864-36.864v-73.728a36.832 36.832 0 1 1 73.728 0v73.728c0 20.384-16.48 36.864-36.864 36.864zM885.088 921.76a36.832 36.832 0 0 1-36.864-36.864v-110.624a36.832 36.832 0 1 1 73.728 0v110.624c0 20.384-16.48 36.864-36.864 36.864zM885.088 663.648a36.832 36.832 0 0 1-36.864-36.864v-73.728a36.832 36.832 0 1 1 73.728 0v73.728c0 20.384-16.48 36.864-36.864 36.864zM737.568 737.408a36.832 36.832 0 0 1-36.864-36.864v-147.488a36.832 36.832 0 1 1 73.728 0v147.488c0 20.384-16.48 36.864-36.864 36.864zM590.08 921.76a36.832 36.832 0 0 1-36.864-36.864v-147.488a36.832 36.832 0 1 1 73.728 0v147.488c0 20.384-16.48 36.864-36.864 36.864zM590.08 626.784a36.832 36.832 0 0 1-36.864-36.864v-36.864a36.832 36.832 0 1 1 73.728 0v36.864c0 20.384-16.48 36.864-36.864 36.864z" p-id="2629"></path><path d="M258.144 811.136H184.384a36.864 36.864 0 0 1-36.864-36.864v-73.728c0-20.384 16.512-36.864 36.864-36.864h73.76c20.352 0 36.864 16.48 36.864 36.864v73.728c0 20.384-16.512 36.864-36.864 36.864zM331.904 442.432H110.624A110.752 110.752 0 0 1 0 331.808V110.592A110.752 110.752 0 0 1 110.624-0.032h221.28a110.752 110.752 0 0 1 110.624 110.624v221.216a110.752 110.752 0 0 1-110.624 110.624zM110.624 73.728c-20.32 0-36.864 16.544-36.864 36.864v221.216c0 20.32 16.544 36.864 36.864 36.864h221.28c20.32 0 36.864-16.544 36.864-36.864V110.592c0-20.32-16.544-36.864-36.864-36.864H110.624z" p-id="2630"></path><path d="M258.144 294.976H184.384A36.864 36.864 0 0 1 147.52 258.112V184.384c0-20.352 16.512-36.864 36.864-36.864h73.76c20.352 0 36.864 16.512 36.864 36.864v73.728c0 20.352-16.512 36.864-36.864 36.864zM848.224 442.432h-221.28a110.752 110.752 0 0 1-110.624-110.624V110.592a110.752 110.752 0 0 1 110.624-110.624h221.28a110.752 110.752 0 0 1 110.624 110.624v221.216a110.752 110.752 0 0 1-110.624 110.624zM626.944 73.728c-20.352 0-36.864 16.544-36.864 36.864v221.216c0 20.32 16.512 36.864 36.864 36.864h221.28c20.352 0 36.864-16.544 36.864-36.864V110.592c0-20.32-16.512-36.864-36.864-36.864h-221.28z" p-id="2631"></path><path d="M774.464 294.976h-73.76a36.864 36.864 0 0 1-36.864-36.864V184.384c0-20.352 16.48-36.864 36.864-36.864h73.76c20.384 0 36.864 16.512 36.864 36.864v73.728c0 20.352-16.48 36.864-36.864 36.864z" p-id="2632"></path></svg></a>
            </div>
            <div class="author">
                <img src="../assets/images/avatar.jpg" alt="">
            </div>
        </div>
        <div class="nav">
            <ul>
                
                <li><router-link to="/home">POSTS</router-link></li>
                <li><router-link to="/bangumi">BILIBILI</router-link></li>
                <li><router-link to="/pixiv">PIXIV</router-link></li>
                <li><router-link to="/music">MUSIC</router-link></li>
                <li><router-link to="/friends">FRIENDS</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
import config from '../config.js';
export default {
    data(){
        return {
            config: config
        }
    }
}
</script>
<style lang="scss" scoped>
$border-color: #f5f5f5;
$blue: rgb(56, 183, 234);
.header{
    position: relative;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 3px 1px rgba($color: #000000, $alpha: .09);
    .head{
        display: flex;
        align-items: center;
        height: 90px;
        border-bottom: 1px solid $border-color;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 90px;
        text-align: center;
        border-right: 1px solid $border-color;
        cursor: pointer;
        img{
            width: 40px;
            height: 40px;
        }
    }
    .search{
        position: relative;
        display: inline-block;
        height: 40px;
        width: 200px;
        margin: 0 30px;
        input{
            width: 100%;
            height: 100%;
            border-radius: 50px;
            outline: none;
            box-shadow: none;
            border: solid 1px #dde0e4;
            padding: 0 45px 0 20px;
            box-sizing: border-box;
            transition: all .3s ease;
            &::placeholder{
                letter-spacing: 1px;
                color: #a6a9ac;
            }
            &:focus{
                border-color: $blue;
            }
        }
        svg{
            position: absolute;
            right: 20px;
            top: 9px;
            width: 20px;
            height: 20px;
            fill: rgb(86, 90, 95);
        }
    }
    .links{
        width: 500px;
        height: 100%;
        border-left: 1px solid $border-color;
        border-right: 1px solid $border-color;
        padding: 0 50px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        ul{
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        li{
            display: inline-block;
            font-size: 14px;
        }
        a{
            text-decoration: none;
            color: #2b2f32;
            letter-spacing: 1px;
            transition: color .3s ease;
            &:hover{
                color: $blue;
            }
        }
    }
    .author{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 90px;
        cursor: pointer;
        img{
            width: 55px;
            height: 55px;
            border-radius: 50%;
        }
    }
    .other{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 250px;
        height: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        border-right: 1px solid $border-color;
        svg{
            width: 25px;
            height: 25px;
            cursor: pointer;
        }
        .rss{
            fill: rgb(205, 127, 226);
        }
        .mail{
            fill: rgb(255, 195, 92);
        }
        .qrcode{
            fill: rgb(146, 238, 142);
        }
    }
    .nav{
        position: relative;
        width: 100%;
        height: 60px;
        li{
            display: inline-block;
            margin: 0 50px;
        }
        ul{
            display: flex;
            height: 100%;
            align-items: center;
        }
        a{
            text-decoration: none;
            color: #a6a9ac;
            letter-spacing: 1px;
            font-size: 15px;
            transition: color .3s ease;
            padding-bottom: 18px;
            font-family: Arial;
            &:hover{
                color: #2b2f32;
            }
            &.router-link-active{
                color: #2b2f32;
                border-bottom: 3px solid $blue;
            }
        }
    }

}
</style>

