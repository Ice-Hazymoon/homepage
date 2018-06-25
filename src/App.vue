<template>
    <div id="app">
        <Nav></Nav>
        <div class="main">
            <InfoCard></InfoCard>
            <keep-alive>
                <router-view v-if="load" :mikuData="mikuData"></router-view>
            </keep-alive>
            <Github v-if="load" :githubRepos="mikuData.githubRepos"></Github>
        </div>
    </div>
</template>

<script>
import Nav from './components/Nav';
import InfoCard from './components/InfoCard';
import Github from './components/Github';
import config from './config.js';
export default {
    data(){
        return {
            mikuData: {},
            load: false
        }
    },
    components: {
        Nav,
        InfoCard,
        Github
    },
    methods: {
        getMusicData(mD, callback){
            let _this = this;
            let musicList = new Array();
            let getMusicSrcFun = new Array();
            mD.forEach((el, index) => {
                let fun = function(){
                    return _this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id='+el.id);
                }
                let d = {
                    title: el.name,
                    artist: el.ar[0].name,
                    src: null,
                    pic: el.al.picUrl
                }
                musicList.push(d)
                getMusicSrcFun.push(this.returnData('https://api.imjad.cn/cloudmusic/?type=song&id='+el.id))
            });

            this.$http.all(getMusicSrcFun).then(e=>{
                musicList.forEach((el, index)=>{
                    el.src = e[index].data.data[0].url
                })
                this.mikuData.music = musicList;
            })
        },
        returnData(url){
            return this.$http.get(url);
        },
        handleData(){
            let _this = this;
            let date = new Date();
            date.setDate(date.getDate()+1);

            let mikuData = new Object();

            this.$http.all([
                this.returnData('https://api.github.com/users/Ice-Hazymoon/repos'),
                this.returnData('https://imiku.me/wp-json/wp/v2/posts?_embed'),
                this.returnData('https://api.imjad.cn/bilibili/v2/?get=space&vmid=21851788&pagesize=200'),
                this.returnData('https://api.imjad.cn/pixiv/v2/?type=favorite&id=16126035'),
                this.returnData('https://api.imjad.cn/cloudmusic/?type=playlist&id=488684458')
            ]).then(e=>{
                mikuData.githubRepos = e[0].data;
                mikuData.blogPost = e[1].data;
                mikuData.bangumi = e[2].data.data.season.item;
                mikuData.pixiv = e[3].data.illusts;
                this.mikuData = mikuData;
                this.mikuData.config = config;
                this.getMusicData(e[4].data.playlist.tracks);
                this.$store.set('mikuData', this.mikuData);
                this.$store.set('mikuDate', date.getTime());
                this.load = true;
            })
        }
    },
    mounted(){
        let date = new Date().getTime();
        let mikuDate = this.$store.get('mikuDate');
        if(mikuDate === undefined || mikuDate<=date){
            this.handleData();
        }else{
            this.mikuData = this.$store.get('mikuData');
            this.load = true;
        }
    }
};
</script>

<style lang="scss">
    #app{
        width: 1200px;
        margin: 0 auto;
        box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.1);
        background-color: rgb(245, 248, 249);
        color: #2b2f32;
    }
    .main{
        position: relative;
        width: 100%;
        padding: 20px 30px;
        box-sizing: border-box;
    }
</style>
