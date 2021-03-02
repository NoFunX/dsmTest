import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import Axios from 'axios'
import store from './store/index'
import router from './routers'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
