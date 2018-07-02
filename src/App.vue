/*
 * File: App.vue
 * Project: router
 * File Created: Wednesday, 20th June 2018 3:30:35 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Monday, 2nd July 2018 4:30:49 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div id="app">
        <transition name="init">
            <div class="init-loading" v-if="init">
                <img src="../src/assets/images/loading.gif" alt="">
                <div class="text">少女祈祷中···</div>
            </div>
        </transition>
        <div class="bg"></div>
        <Nav/>
        <div class="main">
            <InfoCard/>
            <keep-alive>
                <router-view/>
            </keep-alive>
            <Github/>
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
            init: true
        }
    },
    components: {
        Nav,
        InfoCard,
        Github
    },
    mounted(){
        setTimeout(()=>{
            this.init = false;
        },1500)
    }
};
</script>

<style lang="scss">
    .init-leave{
        opacity: 1;
    }
    .init-leave-active{
        transition: .5s ease opacity;
    }
    .init-leave-to{
        opacity: .0;
    }
    .init-loading{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #fff;
        z-index: 999;
        overflow: hidden;
      }
      .init-loading .text{
        margin-top: 20px;
        font-size: 20px;
        letter-spacing: 1.5px;
      }
    .bg{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        z-index: -1;
    }
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
