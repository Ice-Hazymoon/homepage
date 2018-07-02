/*
 * File: config.js
 * Project: router
 * File Created: Monday, 2nd July 2018 3:15:56 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Monday, 2nd July 2018 4:15:24 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
export default {
    name: 'Ice-Hazymoon',
    job: 'Front-end development',
    address: 'Yunnan China',
    rss: 'https://imiku.me/feed',
    email: 'imiku.me@gmail.com',
    contact: {
        qq: 1733708055,
        telegram: 'hazymoon',
        email: 'imiku.me@gmail.com'
    },
    pixivId: 16126035,  //pixiv id
    blogUrl: 'https://imiku.me', // 博客链接
    defaultCover: 'https://myblogpic.b0.upaiyun.com/2017/06/2017061621131297.jpg', // 文章默认头图
    blogSearchUrl: 'https://imiku.me/?s={keyword}', // 博客搜索链接, {keyword} 为关键字
    navLinks: [{ // 导航链接, 建议放 5 个
        name: "Home",
        link: "./"
    }, {
        name: "GitHub",
        link: "https://github.com/Ice-Hazymoon"
    }, {
        name: "About",
        link: "https://i.imiku.me"
    }, {
        name: "Blog",
        link: "https://imiku.me"
    }, {
        name: "Status",
        link: "https://status.imiku.me/"
    }],
    wyyyyId: 261910478, // 网易云音乐用户 ID
    playlistId: 488684458, // 播放的歌单 ID
    linksData: 'https://imiku.me/api/links.php', // 友情链接页面数据, 参考 https://imiku.me/api/links.php 格式
    linksUrl: 'https://imiku.me/links', // 友情链接页面地址
    bilibiliId: 21851788, // bilibili 用户ID
    githubUserName: 'Ice-Hazymoon',
    modules: { // 功能开关
        posts: true,
        pixiv: true,
        bangumi: true,
        music: true,
        friends: true
    },
    home: 'friends' // 首页默认模块, 请务必选择已开启的模块
}