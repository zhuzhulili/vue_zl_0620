import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
Vue.config.productionTip = false

Vue.component('GshopHeader',GshopHeader)
new Vue({
  components:{App},
  template:'<App/>',
  router
}).$mount('#app')
