import Vue from 'vue'
import Router from 'vue-router'
import Currencies from './components/Currencies'
import CurrencyDetail from './components/CurrencyDetail'
import Settings from './components/Settings'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'currencies',
            component: Currencies
        },
        {
            path: '/currency/:currencyId',
            name: 'currencyDetail',
            component: CurrencyDetail
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        }
    ]
})