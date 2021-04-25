import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
     store.dispatch('getCurrencies');
  },
  // async beforeCreate() {
  //   store.dispatch('getCurrencies');
  //   this.ready = true
  // },
  render (h) {
  //   console.log('is APP ready ', this.ready );
  //    if (this.ready) {
        return h(App)
  //    }
  }
}).$mount('#app')
