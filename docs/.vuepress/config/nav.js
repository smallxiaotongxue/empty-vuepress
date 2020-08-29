//导航栏
module.exports = [
  {text: '首页', link: '/views/', icon: 'reco-home'},
  {text: '技术文档', link: '/tech/interview/'},
  {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
  {
    text: '其它', icon: 'reco-document',
    items: [
      {
        text: 'Common sites🎈',
        items: [
          {
            text: 'Stackoverflow',
            link: 'https://stackoverflow.com/',
          }, {
            text: 'LeetCode',
            link: 'https://leetcode-cn.com/',
          }, {
            text: 'Vue.js',
            link: 'https://cn.vuejs.org/v2/guide/',
          }, {
            text: 'BootCDN',
            link: 'https://www.bootcdn.cn/',
          }, {
            text: 'Linux命令大全',
            link: 'https://www.linuxcool.com/',
          }, {
            text: '编程语言排行榜',
            link: 'https://www.tiobe.com/tiobe-index/',
          }]
      },]
  },
  {text: '关于我们', link: '/about/', icon: 'reco-message'},
]
