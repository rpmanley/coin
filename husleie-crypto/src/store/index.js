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
        console.log('mutation ', state.data );
      }
  },
  actions: {
      getCurrencies({ commit, state }) {

        console.log('addpromotion', state, ' ' ,apis.coins );
        
          return axios.get(apis.coins.path, {
              headers: {
                'X-CoinAPI-Key': apis.coins.key              }
              })
               .then(response => {
                let data = (response && response.data ) ? { ...response.data } : {};
                console.log('commit -> setCurrencyData response ', response , ' data -> ',data );
                commit('setCurrencyData', data );
            });
      }
  }
  
})
