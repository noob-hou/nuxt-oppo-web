/*
 * @Description: 
 * @Author: houxin
 * @Date: 2024-05-16 14:25:00
 * @LastEditTime: 2024-05-23 16:09:08
 * @LastEditors: houxin
 * @Reference:  
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['normalize.css', '@/assets/css/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        // 指定传递给 CSS 预处理器的选项
        scss: {
          // 全局scss变量
          additionalData:
            '@use "@/assets/css/variables.scss" as *;',
          javascriptEnabled: true,
        },
      },
    },
  },
  app: {
    // 可以给所有的页面的head添加一下SEO的信息
    head: {
      title: 'OPPO手机商城',
      meta: [
        {
          name: 'description',
          content:
            'OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！'
        },
        {
          name: 'keywords',
          content: 'OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [{ children: 'Javascript is required' }]
    }
  },

  devtools: { enabled: true },
  //配置nuxt3扩展模块
  modules: ['@pinia/nuxt']
})
