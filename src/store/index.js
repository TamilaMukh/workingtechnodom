import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart.js'
import users from './users.js'
import test from './test.js'
import products from './products.js'
import compare from './compare'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart, users, test, products, compare
  }
})
