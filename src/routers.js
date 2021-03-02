import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
import Home from './pages/Home'
import Login from './pages/Login'
import Projects from './pages/Projects'
import Models from './pages/Models'
import Settings from './pages/Settings'
import Admin from './pages/Admin'

Vue.use(VueRouter)



export const router = new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
          },

        {
            path: '/',
            name: 'home',
            component: Home,
          
          },

          {
            path: '/projects',
            name: 'projects',
            component: Projects,
          
          },

          {
            path: '/models',
            name: 'models',
            component: Models,
          
          },

          {
            path: '/settings',
            name: 'settings',
            component: Settings,
          
          },

          {
            path: '/admin',
            name: 'admins',
            component: Admin,
          
          },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login') 
    } else {
      next() 
    }
  })

  export default router
