import Vue from 'vue'
import Router from 'vue-router'
import Currencies from './components/Currencies'
import CurrencyDetail from './components/CurrencyDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'currencies',
            component: Currencies
        },
        {
            path: '/:currencyId',
            name: 'currencyDetail',
            component: CurrencyDetail
        }
    ]
})