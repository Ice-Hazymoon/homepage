import Vue from "vue";
import Router from "vue-router";
import Posts from "./views/Posts.vue";
import Bangumi from "./views/Bangumi.vue";
import Pixiv from './views/Pixiv.vue'
import Music from './views/Music.vue'
import Friends from './views/Friends.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "Posts",
      component: Posts
    },
    {
      path: "/bangumi",
      name: "Bangumi",
      component: Bangumi
    },
    {
      path: "/pixiv",
      name: "Pixiv",
      component: Pixiv
    },
    {
      path: "/music",
      name: "Music",
      component: Music
    },
    {
      path: "/friends",
      name: "Friends",
      component: Friends
    },
    {
      path: "*",
      redirect: '/home'
    }
  ]
});
