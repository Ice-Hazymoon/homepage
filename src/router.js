/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';

const Posts = () => import('./views/Posts.vue');
const Bangumi = () => import('./views/Bangumi.vue');
const Pixiv = () => import('./views/Pixiv.vue');
const Music = () => import('./views/Music.vue');
const Friends = () => import('./views/Friends.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/bangumi',
      name: 'Bangumi',
      component: Bangumi
    },
    {
      path: '/pixiv',
      name: 'Pixiv',
      component: Pixiv
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});