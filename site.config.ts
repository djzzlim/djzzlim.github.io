import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://djzzlim.github.io/',
  lang: 'zh-CN',
  title: 'djzzlim\'s blog~',
  timezone: 'Asia/Singapore',
  subtitle: '~~~~~~~~~~~~~~~~',
  author: {
    name: '小林',
    avatar: 'https://avatars.githubusercontent.com/u/57754036?s=400&u=1b0ea34ae64633021445d42ccc30cc4c534fdc0a&v=4',
    status: {
      emoji: '✨'	// 头像旁边的emoji
    },
  },
  description: '寒尽觉春生',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/djzzlim',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/djzzlim',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:limkarjoon221@gmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: false,
  },
})
