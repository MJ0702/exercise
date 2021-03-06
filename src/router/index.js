import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import news from '@/components/news'
import product from '@/components/product'
import secondChild from '@/components/chlidComponents/secondChild'
Vue.use(Router)

export default new Router({
  linkActiveClass:"is-active",
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
      component: product,
      children:[
        {path:"secondChild",name:"secondChild",component:secondChild}
      ]
    },
    //重定向
    {
      path: '/',
      redirect: '/HelloWorld'
    },
  ]
})