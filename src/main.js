import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { MdList, MdCard, MdToolbar, MdButton, MdIcon, MdRadio } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css' 
import axios from "axios";

Vue.config.productionTip = false
Vue.use(MdList)
Vue.use(MdCard)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdRadio)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedCurrency: 'EUR',
    currencies: [],
    errors: []
  },
  mutations: {
    setSelectedCurrency (state, payload) {
      state.selectedCurrency = payload.currency
    },
    setCurrencies (state, payload) {
      state.currencies = payload.currencies
    },
    setCurrency (state, payload) {
      let existingCurrencyID = state.currencies.findIndex(currency => currency.id === payload.currency.id)
      Vue.set(state.currencies, existingCurrencyID, payload.currency)
    },
    setErrors (state, payload) {
      state.errors = payload.e
    }
  },
  actions: {
    getCurrencies ({ state, commit }) {
      axios
        .get(`https://api.coinmarketcap.com/v1/ticker/?convert=${state.selectedCurrency}`)
        .then(response => {
          commit({
            type: 'setCurrencies',
            currencies: response.data
          })
        })
        .catch(e => {
          commit({
            type: 'setErrors',
            errors: e
          })
        });
    },
    getCurrency ({ state, commit }, payload) {
      axios
        .get(`https://api.coinmarketcap.com/v1/ticker/${payload.currencyId}/?convert=${state.selectedCurrency}`)
        .then(response => {
          commit({
            type: 'setCurrency',
            currency: response.data[0]
          })
        })
        .catch(e => {
          commit({
            type: 'setErrors',
            errors: e
          })
        });
    }
  },
  getters: {
    getCurrencyById: (state) => (id) => {
      return state.currencies.filter(currency => currency.id === id)[0]
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#app')

