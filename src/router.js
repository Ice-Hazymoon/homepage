/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';
import mikuConfig from './mikuConfig';

const Posts = () => import('./views/Posts.vue');
const Bangumi = () => import('./views/Bangumi.vue');
const Pixiv = () => import('./views/Pixiv.vue');
const Music = () => import('./views/Music.vue');
const Friends = () => import('./views/Friends.vue');
const Twitter = () => import('./views/Twitter.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/posts',
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
      path: '/twitter',
      name: 'Twitter',
      component: Twitter
    },
    {
      path: '*',
      redirect: '/'+mikuConfig.home
    }
  ]
});