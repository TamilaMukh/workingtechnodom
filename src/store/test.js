export default {
    actions: {
        textChange({commit}) {
            commit('textMutate');
        },
        setIncrement({commit}) {
            commit('mutateIncrement')
        },
        setDecrement({commit}) {
            commit('mutateDecrement')
        },
        addToHellos({commit}) {
            commit('sayHello')
        }
    },
    mutations: {
        textMutate(state) {
            state.text = 'world'
        },
        mutateIncrement(state) {
            state.counter = state.counter + 1
        },
        mutateDecrement(state) {
            state.counter = state.counter - 1
        },
        sayHello(state) {
            state.hellos.push(state.text)
        }
    },
    state: {
        text: 'hello',
        counter: 0,
        hellos: []
    },
    getters: {
        setText(state) {
            return state.text
        },
        getCounter(state) {
            return state.counter
        },
        showHellos(state) {
            return state.hellos
        }
    }
}