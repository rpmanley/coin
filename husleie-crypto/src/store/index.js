import Vue from 'vue'
import Vuex from 'vuex'
import apis from '../utils/apis'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyList: {},
    recordLimit: 20,
    // isWaiting: true
  },
  mutations: {
    setCurrencyData(state, payload) {
        state.currencyList = { ...payload };
    },
    // updateWaitingStatus(state, payload) {
    //   state.isWaiting = payload;
    // }
  },
  actions: {
    // try catch
      getCurrencies({ commit, state }) { 

        /*
        return axios.get(apis.coins.path, {
            headers: {
              'X-CoinAPI-Key': apis.coins.key              }
            })
              .then(response => {
              let data = (response && response.data ) ? { ...response.data } : {};
              commit('setCurrencyData', data );
              commit('updateWaitingStatus', false );
          });
          */

          axios({
            method: 'get', //you can set what request you want to be
            url: apis.coins.path,
            // params: {
            //   limit: 9,
            //   // filter_symbol_id: ['BITSTAMP_SPOT_BTC_USD']
            // },
            headers: {
              'X-CoinAPI-Key': apis.coins.key
            }
          })
          .then(response => {
               let data = (response && response.data ) ? { ...response.data } : {},
                sorted = Object.values(data)
                          .sort((a, b) => a.volume_1day_usd - b.volume_1day_usd)
                          .filter((z,i) => i > Object.keys(data).length - state.recordLimit )
                          .reverse();

                          // console.log('keys ',Object.keys(data).length);
                          
               console.log('sorted -> ', sorted );
               commit('setCurrencyData', sorted );
               // commit('updateWaitingStatus', false );
          });




      }
  },
  getters: {
    getMostPopularCurrencies: (state) => (id) => {
      for (let key of Object.keys(state.currencyList)) {
        let currency = state.currencyList[key];
        if(currency.exchange_id == id) { 
          return currency 
        }
      }
    },
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
