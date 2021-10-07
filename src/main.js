import 'vuesax/dist/vuesax.css'; //Vuesax styles

import App from './App.vue'
import Vue from 'vue'
import Vuesax from 'vuesax';
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Vuesax)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
