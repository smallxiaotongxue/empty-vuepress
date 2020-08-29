const NAV = require('./config/nav');
const SIDE_BAR = require('./config/sidebar');

module.exports = {
  title: 'css-document 前端文档',
  description: '一点浩然气，千里快哉风。',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {rel: 'shortcut icon', href: 'favicon.ico'}], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    [
      "script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
    },
    ],
  ],
  theme: 'vuepress-theme-reco',
  themeConfig: {
    type: 'blog',
    logo: '/logo.png',  // 左上角logo
    authorAvatar: '/logo.png', //首页右侧头像
    search: true, // 搜索设置
    searchMaxSuggestions: 10,

    nav: NAV,// 添加导航栏
    sidebar: SIDE_BAR, // 自动形成侧边导航
    // sidebar: 'auto',// 自动形成侧边导航
    sidebarDepth: 2,

    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'     // 默认文案 “标签”
      }
    },
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // 作者
    author: 'css',
    // 项目开始时间
    startYear: '2020',
  },

  markdown: {
    lineNumbers: true
  },
  plugins: [
    // require('./plugins/xxx/index')
  ],
  dest: './docs/.vuepress/dist',
  evergreen: false,
};
