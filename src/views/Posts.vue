/*
 * File: Post.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 9:42:36 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Friday, 22nd June 2018 3:44:45 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="post">
        <div class="title">
            <div class="l">Posts <a href="https://imiku.me"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r">最后更新于: {{ lastDate }}</div>
        </div>
        <ul class="article-list">
            <li class="article" v-for="(item, index) in mikuData.blogPost" :key="index">
                <div class="l">
                    <div class="article-title"><a :href="item.link" target="_blank" v-html="item.title.rendered"></a></div>
                    <div class="article-excerpt" v-html="item.excerpt.rendered"></div>
                </div>
                <div class="r">
                    <div class="media">
                        <a :href="item.link" target="_blank"><img :src="getMediaLink(index)"></a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
Date.prototype.Format = function (fmt) {  
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export default {
    props: {
        data(){
            
        },
        mikuData: {
            type: Object,
            default: []
        }
    },
    methods: {
        getMediaLink(index){
            if(!this.mikuData.blogPost[index]._embedded["wp:featuredmedia"]){
                return 'https://myblogpic.b0.upaiyun.com/2017/06/2017061621131297.jpg'
            }else{
                return this.mikuData.blogPost[index]._embedded["wp:featuredmedia"][0].source_url
            }
        }
    },
    mounted(){
        
    },
    computed: {
        lastDate(){
            let date = new Date(this.mikuData.blogPost[0].date)
            return date.Format("yyyy-MM-dd hh:mm:ss");
        }
    }
}
</script>
<style lang="scss" scoped>
.post{
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
    ul{
        padding: 30px 35px;
        box-sizing: border-box;
    }
    .article{
        display: flex;
        padding: 20px 0;
        font-family: "Microsoft YaHei";
        border-bottom: 1px solid #f5f5f5;
        .article-title{
            position: relative;
            padding-right: 15px;
            box-sizing: border-box;
            font-weight: bold;
            font-size: 20px;
            line-height: 1.2;
            a{
                text-decoration: none;
                color: #2b2f32;
                letter-spacing: .5px;
                word-break:break-all;
                transition: color .3s ease;
                &:hover{
                    color: rgb(56, 183, 234);
                    &::after{
                        width: 325px;
                    }
                }
                &::after{
                    content: ' ';
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    height: 2px;
                    width: 0;
                    background-color: rgb(56, 183, 234);
                    transition: width .3s ease;
                }
            }
        }
        .article-excerpt{
            padding-right: 15px;
            box-sizing: border-box;
            font-size: 15px;
            color: #999;
            word-break:break-all;
            line-height: 1.2;
        }
        .media{
            img{
                width: 100%;
                height: 90px;
                object-fit: cover;
                border: 1px solid #eceff2;
                transition: .3s all ease;
                &:hover{
                    opacity: .8;
                    border: 1px solid #d1d1d1;
                }
            }
        }
        .l{
            width: 350px;
        }
        .r{
            width: 180px
        }
    }
}
</style>

