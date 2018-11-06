// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(ElementUI)
//图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error:'./static/picerror.svg',
  loading: './static/loading.gif',
  attempt: 1,
  // throttleWait:10,  //等待秒数
  listenEvents:['mousewheel','scroll ']  //监听事件
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})