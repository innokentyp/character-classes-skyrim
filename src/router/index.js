import Vue from 'vue'
import VueRouter from 'vue-router'

import Caption from '@/components/Caption.vue'
import Home from '@/components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    components: {
      header: Caption,
      main: Home
    }
  },
]

export default new VueRouter({
  routes,
  mode: 'history',
});
