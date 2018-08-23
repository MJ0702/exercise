import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import news from '@/components/news'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/about",
      name: 'about',
      component: about
    },
    {
      path: "/news",
      name: 'news',
      component: news
    },
    {
      path: "/product",
      name: 'product',
      component: product
    },
    //重定向
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})