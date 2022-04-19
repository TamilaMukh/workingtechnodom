import axios from 'axios'

export default {
    actions: {
        async fetchProducts(result) {
            const res = await axios.get('http://localhost:3001/products');
            const newProducts = res.data;
            result.commit('updateProducts', newProducts);
        }
    },
    mutations: {
        updateProducts(state, newProducts) {
            state.products = newProducts
        }
    },
    state: {
        products: []
    },
    getters: {
        allProducts(state) {
            return state.products
        }
    },
}