import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
// import '@/assets/fonts/fonts.css'
// import '//at.alicdn.com/t/font_2048578_5u1ftidscmc.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
