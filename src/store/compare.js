import axios from 'axios';

export default {
    actions: {
        async getAllProducts ({commit}) {
            const res = await axios.get('http://localhost:3001/products');
            const newProductsAll = res.data;
            commit('setAllProducts', newProductsAll);
        },
        getCompare({commit}, id) {
            commit('addCheckTovary', id)
        }
    },
    mutations: {
        setAllProducts(state, newProductsAll) {
            state.tovary = newProductsAll;
        },
        addCheckTovary(state, id) {
            if (state.compareTovary.length >= 3) {
                state.compareTovary.splice(2, 1);
                state.compareTovary.splice(0, 0, state.tovary[id]);
            } else {
                state.compareTovary.splice(0, 0, state.tovary[id]);
            }
        }
    },
    state: {
        tovary: [],
        compareTovary: []
    },
    getters: {
        allTovary(state) {
            return state.compareTovary
        }
    }
}