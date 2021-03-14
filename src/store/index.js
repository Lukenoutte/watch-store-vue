import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        itensArray: [
            { id: 0, image: "/", name: "Shoes", price: "10" },
            { id: 1, image: "/", name: "Table", price: "30" },
            { id: 2, image: "/", name: "Coach", price: "30" },
            { id: 3, image: "/", name: "Notebook", price: "100" },
            { id: 4, image: "/", name: "TV", price: "100" },
        ],
        cartItens: []
    },
    mutations: {
        addItemToCart: (state, id) => {
            let itemToAdd = state.itensArray.find(itemInArray => itemInArray.id === id);
            state.cartItens.push(itemToAdd);
            console.log(state.cartItens);
        }
    }
})

export { store };