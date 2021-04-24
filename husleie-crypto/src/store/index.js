import Vue from 'vue'
import Vuex from 'vuex'
import apis from '../utils/apis'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyList: {},
    isWaiting: true
  },
  mutations: {
    setCurrencyData(state, payload) {
        state.currencyList = { ...payload };
    },
    updateWaitingStatus(state, payload) {
      state.isWaiting = payload;
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
              let data = (response && response.data ) ? { ...response.data } : {};
              commit('setCurrencyData', data );
              commit('updateWaitingStatus', false );
          });
      }
  },
  getters: {
    getCurrencyById: (state) => (id) => {
      for (let key of Object.keys(state.currencyList)) {
        let currency = state.currencyList[key];
        if(currency.exchange_id == id) { 
          return currency 
        }
      }
    }
  }
})
