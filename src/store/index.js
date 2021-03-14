import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        itensArray: [
            { image: "/", name: "Shoes", price: "10" },
            { image: "/", name: "Table", price: "30" },
            { image: "/", name: "Coach", price: "30" },
            { image: "/", name: "Notebook", price: "100" },
            { image: "/", name: "TV", price: "100" },
        ],
        cartItens: []
    },
    mutations: {

    }
})

export { store };