import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import NotFound from '@/views/404.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})