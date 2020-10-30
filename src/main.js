import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase.js'
import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false
Vue.use(firestorePlugin);
Vue.use(router);

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})

