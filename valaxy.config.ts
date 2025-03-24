import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '小林的小站',
    },

    pages: [
      {
        name: '项目橱窗',
        url: '/projects/',
        icon: 'i-ri-code-s-slash-line',
      },
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: 'dodgerblue',
      },
    ],

    footer: {
      since: 2025,
    },
  },

  unocss: { safelist },
})
