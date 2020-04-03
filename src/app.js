import Vue from 'vue'
import App from './components/App.vue'
import { store } from './store/store'
import VueRouter from 'vue-router'
import './styles/main.scss'
import About from './components/pages/About.vue'
import Buttons from './components/common/Buttons.vue'

Vue.component('app-button', Buttons)
Vue.use(VueRouter)

export const routes = [
  {
    name: 'about',
    title: 'about',
    path: '/about',
    component: About
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
