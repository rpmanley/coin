import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  async beforeCreate() {
    await store.dispatch('getData')
    this.$mount('#app')
  },
  render: h => h(App)
})
