import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  async beforeCreate() {
    store.dispatch('getIcons')
    await store.dispatch('getCurrencies')
    .then(() => {
      console.log('*** lazy loading the currencies? ***');
      console.log('*** styling ***');
      

      this.$mount('#app')
    })
    .catch((error) => {
      console.log('*** STHG WENNT WRONG *** ', error);
    });
  },
  render: h => h(App)
})
