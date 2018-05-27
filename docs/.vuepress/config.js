module.exports = {
  title: 'xbj-ui',
  description: 'A simple vue components',
  base: '',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      { text: 'Github', link: 'https://github.com/YuanBingrui/xbj-ui-vue' },
    ],
    sidebar: [
      {
        title: '简介',
        collapsable: false,
        children: [
          '/components/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/TopMenu',
          '/components/PictureZoom',
          '/components/VueGenerateCli'
        ]
      }
    ]
  }
}