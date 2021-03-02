import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
import Home from './pages/Home'
import Login from './pages/Login.vue'

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
            meta: { 
                requiresAuth: true
              }
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
