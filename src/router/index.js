import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App'

import Home from '@/components/Home'
import About from '@/components/About'
import Chat from '@/components/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/(character-classes-skyrim)?',
    redirect: to => {
      return '/character-classes-skyrim/home'
    }
  },
  {
    path: '/character-classes-skyrim',
    component: App,
    children: [
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
  }
]

export default new VueRouter({
  routes,
  mode: 'history',
})
