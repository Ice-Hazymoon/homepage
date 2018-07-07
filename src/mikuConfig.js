/*
 * File: config.js
 * Project: router
 * File Created: Monday, 2nd July 2018 3:15:56 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Sunday, 8th July 2018 2:06:58 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
export default {
  name: "Ice-Hazymoon",
  job: "Front-end development",
  address: "Yunnan China",
  rss: "https://imiku.me/feed",
  email: "imiku.me@gmail.com",
  contact: {
    qq: 1733708055,
    telegram: "hazymoon",
    email: "imiku.me@gmail.com"
  },
  pixivId: 16126035, //pixiv id
  pixivProxy: "https://api.imiku.me/pixivProxy.php?url={url}", // pixiv 图片代理地址, 如果没有代理服务器请填写 `https://api.pixiv.moe/v2/image/`
  pixivSanityLevel: 5, // 分级, 默认为5
  blogUrl: "https://imiku.me", // 博客链接
  defaultCover: "https://myblogpic.b0.upaiyun.com/2018/07/2018070516124833.jpg", // 文章默认头图
  blogSearchUrl: "https://imiku.me/?s={keyword}", // 博客搜索链接, {keyword} 为关键字
  navLinks: [
    // 导航链接, 建议放 5 个
    {
      name: "Home",
      link: "./"
    },
    {
      name: "GitHub",
      link: "https://github.com/Ice-Hazymoon"
    },
    {
      name: "About",
      link: "https://i.imiku.me"
    },
    {
      name: "Blog",
      link: "https://imiku.me"
    },
    {
      name: "Status",
      link: "https://status.imiku.me/"
    }
  ],
  wyyyyId: 261910478, // 网易云音乐用户 ID
  playlistId: 488684458, // 播放的歌单 ID
  linksData: "https://imiku.me/wp-json/wp/v2/links", // 友情链接数据接口
  linksUrl: "https://imiku.me/links", // 友情链接页面地址
  bilibiliId: 21851788, // bilibili 用户ID
  bilibiliProxy: "https://api.imiku.me/imgProxy.php?url={url}", // bilibili 图片代理地址
  githubUserName: "Ice-Hazymoon",
  modules: {
    // 功能开关
    posts: true,
    pixiv: true,
    bangumi: true,
    music: true,
    friends: true
  },
  home: "posts", // 首页默认模块, 请务必选择已开启的模块
  catchTime: 86400000 // 数据缓存的时间(毫秒)
};
