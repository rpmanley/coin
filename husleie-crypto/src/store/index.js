import Vue from 'vue'
import Vuex from 'vuex'
import apis from '../utils/apis'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyList: {},
    recordLimit: 20,
    icons: null,
    isError: false
  },
  mutations: {
    setCurrencyData(state, payload) {
      console.log('mutations >> setCurrencyData ', payload );
        state.currencyList = { ...payload };
    },
    setIcons(state, payload) {
      state.icons = { ...payload };
    },
    updateError(state, payload) {
      state.isError = { ...payload };
    }
  },
  actions: {
      getData({ dispatch }) {
          console.log('getData ');
          dispatch('getCurrencies');
          dispatch('getIcons');
      },
      getCurrencies({ commit, state }) { 
        return axios({
            method: 'get',
            url: apis.coins.exchange.path,
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
                          
                // dispatch('getIcons');
               commit('setCurrencyData', sorted );
          })
          .catch (error => {
            console.log('There was an error', error );
            commit('updateError', true );
          })
      },
      getIcons({commit}) { 
        console.log('** getIcons ** state ' , ' ',apis.coins.icons.path );
        return axios({
          method: 'get',
          url: apis.coins.icons.path,
          headers: {
            'X-CoinAPI-Key': apis.coins.key
          }
        })
        .then(response => {
          console.log('response', response );
            let data = (response && response.data ) ? { ...response.data } : {};
            //   sorted = Object.values(data)
            //             .sort((a, b) => a.volume_1day_usd - b.volume_1day_usd)
            //             .filter((z,i) => i > Object.keys(data).length - state.recordLimit )
            commit('setIcons', data );
        });
      },
      getSymbol({commit},payload) { 
        // console.log('state ',  payload , ' ',apis.coins.exchange.symbol );
        axios({
          method: 'get',
          url: apis.coins.symbol.path + payload.exchange_id,
          params: {
              limit: 20,
              time_end: '2016-01-01T00:00:00'
          },
          headers: {
            'X-CoinAPI-Key': apis.coins.key
          }
        })
        .then(response => {
          console.log('response', response );
            //  let data = (response && response.data ) ? { ...response.data } : {},
            //   sorted = Object.values(data)
            //             .sort((a, b) => a.volume_1day_usd - b.volume_1day_usd)
            //             .filter((z,i) => i > Object.keys(data).length - state.recordLimit )
            commit('setCurrencyData');
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
    },
    getIconById: (state) => (id) => {
      for (let key of Object.keys(state.icons)) {
        let currency = state.icons[key];
        if(currency.exchange_id == id) { 
          return currency.url 
        }
      }
    }
  }
})
