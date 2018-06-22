<template>
    <div id="app">
        <Nav></Nav>
        <div class="main">
            <InfoCard></InfoCard>
            <keep-alive>
                <router-view v-if="load" :mikuData="mikuData"></router-view>
            </keep-alive>
            <!-- <Post v-if="load" :blogPost="mikuData.blogPost"></Post> -->
            <Github v-if="load" :githubRepos="mikuData.githubRepos"></Github>
        </div>
    </div>
</template>

<script>
import Nav from './components/Nav';
import InfoCard from './components/InfoCard';
import Github from './components/Github';
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
        handleData(){
            let _this = this;
            let date = new Date();
            date.setDate(date.getDate()+1);

            let mikuData = new Object();
            
            function returnData(url){
                return _this.$http.get(url);
            }

            this.$http.all([
                returnData('https://api.github.com/users/Ice-Hazymoon/repos'),
                returnData('https://imiku.me/wp-json/wp/v2/posts?_embed'),
                returnData('https://api.imjad.cn/bilibili/v2/?get=space&vmid=21851788&pagesize=200'),
                returnData('https://api.imjad.cn/pixiv/v2/?type=favorite&id=16126035')
            ]).then(e=>{
                mikuData.githubRepos = e[0].data;
                mikuData.blogPost = e[1].data;
                mikuData.bangumi = e[2].data.data.season.item;
                mikuData.pixiv = e[3].data.illusts;
                this.$store.set('mikuData', mikuData);
                this.$store.set('mikuDate', date.getTime());
                this.mikuData = mikuData;
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
        overflow: hidden;
        color: #2b2f32;
    }
    .main{
        position: relative;
        width: 100%;
        padding: 20px 30px;
        box-sizing: border-box;
    }
</style>
