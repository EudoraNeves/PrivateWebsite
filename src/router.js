import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "Home Page - Hai Na Zheng's private website",
        metaTags: [
          {
            name: 'description',
            content: "The home page of Hai Na Zheng's private website."
          },
          {
            property: 'og:description',
            content: "The home page of Hai Na Zheng's private website."
          }
        ]
      }
    }
  ]
})
