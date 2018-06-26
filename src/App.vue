/*
 * File: App.vue
 * Project: router
 * File Created: Wednesday, 20th June 2018 3:30:35 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Tuesday, 26th June 2018 9:36:16 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div id="app">
        <div class="bg"></div>
        <Nav></Nav>
        <div class="main">
            <InfoCard></InfoCard>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <Github></Github>
        </div>
    </div>
</template>

<script>
import Nav from './components/Nav';
import InfoCard from './components/InfoCard';
import Github from './components/Github';
export default {
    components: {
        Nav,
        InfoCard,
        Github
    },
};
</script>

<style lang="scss">
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
