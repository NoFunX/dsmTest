import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary:'#48BBC8', 
          secondary: '#FFFFFF',
          grey: '#E5E5E5'
        },
      },
    },
  })
