import 'vuesax/dist/vuesax.css'; //Vuesax styles

import App from './App.vue'
import Vue from 'vue'
import Vuesax from 'vuesax';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Vuesax)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


const firebaseConfig = {
  apiKey: "AIzaSyAaJexKSu1iNWOom5dNdytVAygITSdQFGk",
  authDomain: "kdusms-876be.firebaseapp.com",
  projectId: "kdusms-876be",
  storageBucket: "kdusms-876be.appspot.com",
  messagingSenderId: "907043762767",
  appId: "1:907043762767:web:801978c076cbf4572bf03a",
  measurementId: "G-PE1RZVY590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
