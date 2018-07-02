/*
 * File: Post.vue
 * Project: router
 * File Created: Friday, 22nd June 2018 9:42:36 am
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Monday, 2nd July 2018 3:33:11 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div class="post">
        <modals-container transitio="scale"/>
        <div class="title">
            <div class="l">Posts <a :href="mikuConfig.blogUrl"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1950" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M972.8 716.8a51.2 51.2 0 0 0-51.2 51.2v102.4a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 0 0 102.4h819.2a153.6 153.6 0 0 0 153.6-153.6v-102.4a51.2 51.2 0 0 0-51.2-51.2zM204.8 716.8a51.2 51.2 0 0 0 51.2-51.2 358.4 358.4 0 0 1 358.4-358.4h81.408l-117.76 117.248A51.2 51.2 0 0 0 650.24 496.64l204.8-204.8a51.2 51.2 0 0 0 0-72.192l-204.8-204.8a51.2 51.2 0 0 0-72.192 72.192l117.76 117.76H614.4a460.8 460.8 0 0 0-460.8 460.8 51.2 51.2 0 0 0 51.2 51.2z" fill="" p-id="1951"></path></svg></a></div>
            <div class="r" v-if="loading">最后更新于: {{ lastDate }}</div>
        </div>
        <vue-loading v-if="!loading" class="loading" type="spiningDubbles" color="#38b7ea" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <ul id="article" class="article-list" v-if="loading">
            <li class="article" v-for="(item, index) in data" :key="index">
                <div class="l">
                    <div class="article-title"><a @click.prevent="getPost(item)" :href="item.link" target="_blank" v-html="item.title.rendered"></a></div>
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
 import dateFormat from '../assets/js/dateFormat.js';
 import PostTemplate from '../components/PostTemplate.vue';
 Date.prototype.Format = dateFormat;

export default {
    data(){
        return {
            data: [],
            loading: false
        }
    },
    methods: {
        getMediaLink(index){
            if(!this.data[index]._embedded["wp:featuredmedia"]){
                return this.mikuConfig.defaultCover
            }else{
                return this.data[index]._embedded["wp:featuredmedia"][0].source_url
            }
        },
        getPost(item){
            let con = item.content.rendered.replace(/src="data.+s="/g, '').replace(/data-lazy-src/g, 'src')
            this.$modal.show(PostTemplate, {
                title: item.title.rendered,
                content: con
            }, {
                classes: 'neko',
                height: 'auto',
                scrollable: true,
                transition: 'scale'
            },{
                draggable: true
            })
        }
    },
    mounted(){
        const d = this.$store.get('miku_posts');
        if(d){
            this.data = d;
            this.loading = true;
            this.$nextTick(()=>{
                this.$pangu.spacingElementById('article');
            })
        }else{
            this.$http.get(this.mikuConfig.blog+'/wp-json/wp/v2/posts?_embed').then(e=>{
                this.data = e.data;
                this.$store.set('miku_posts', e.data, new Date().getTime()+86400000);
                this.loading = true;
                this.$nextTick(()=>{
                    this.$pangu.spacingElementById('article');
                })
            }).catch(err=>{
                alert('获取数据失败: '+err);
            })
        }
    },
    computed: {
        lastDate(){
            let date = new Date(this.data[0].date)
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
    .loading{
        margin: 40px auto;
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

