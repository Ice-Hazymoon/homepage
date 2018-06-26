/*
 * File: App.vue
 * Project: router
 * File Created: Wednesday, 20th June 2018 3:30:35 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Tuesday, 26th June 2018 11:10:48 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
<template>
    <div id="app">
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
import config from './config.js';
export default {
    components: {
        Nav,
        InfoCard,
        Github
    },
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
