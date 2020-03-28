import Vue from 'vue'
import App from './components/App.vue'
import { store } from './store/store'
import VueRouter from 'vue-router'
import './styles/main.scss'

Vue.use(VueRouter)

export const routes = [
  {
    name: 'test',
    title: 'test',
    path: '/test',
    component: App
  },
  {
    name: 'test',
    title: 'test',
    path: '/test',
    component: App
  },
  {
    name: 'test',
    title: 'test',
    path: '/test',
    component: App
  }
]

const router = new VueRouter({
  routes
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})
