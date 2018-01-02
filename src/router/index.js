import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Chat from '@/components/Chat.vue'

Vue.use(VueRouter)

const routes = [
  { path: '', redirect: { name: 'home' } },
  { path: '/', redirect: { name: 'home' } },
  { path: '/home', redirect: { name: 'home' } },
  { path: '/chat', redirect: { name: 'chat' } },
  { path: '/about', redirect: { name: 'about' } },
  {
    path: 'home',
    name: 'home',
    component: Home
  },
  {
    path: 'chat',
    name: 'chat',
    component: Chat
  },
  {
    path: 'about',
    name: 'about',
    component: About
  }
]

export default new VueRouter({
  routes,
  mode: 'history',
})
