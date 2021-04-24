import Vue from 'vue'
import Vuex from 'vuex'
import apis from '../utils/apis'
import axios from 'axios'

console.log('apis ',apis );

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyList: { }
  },
  mutations: {
    setCurrencyData(state, payload) {
        state.currencyList = { ...payload };
        console.log('mutation ', state );
      }
  },
  actions: {
    // try catch
      getCurrencies({ commit }) {
        return axios.get(apis.coins.path, {
            headers: {
              'X-CoinAPI-Key': apis.coins.key              }
            })
              .then(response => {
                console.log('axios returned');
              let data = (response && response.data ) ? { ...response.data } : {};
              commit('setCurrencyData', data );
          });
      }
  },
  getters: {
    getCurrencyById: (state) => (id) => {
      for (let key of Object.keys(state.currencyList)) {
        let mealName = state.currencyList[key];
        if(mealName.exchange_id == id) { return mealName }
      }
    }
  }
})
