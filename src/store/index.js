import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';

Vue.use(Vuex);

import watch1 from "@/assets/images/watch_1.png";
import watch2 from "@/assets/images/watch_2.png";
import watch3 from "@/assets/images/watch_3.png";
import watch4 from "@/assets/images/watch_4.png";
import watch5 from "@/assets/images/watch_5.png";
import watch6 from "@/assets/images/watch_6.png";
import watch7 from "@/assets/images/watch_7.png";
import watch8 from "@/assets/images/watch_8.png";

const store = new Vuex.Store({
    state: {
        itensArray: [
            { id: 0, image: watch1, name: "Piaget", price: 60.90, stock: 5 },
            { id: 1, image: watch2, name: "Cartier", price: 50.90, stock: 10 },
            { id: 2, image: watch3, name: "Harry Winston", price: 70.90, stock: 20 },
            { id: 3, image: watch4, name: "Benson", price: 100.00, stock: 3 },
            { id: 4, image: watch5, name: "Longines", price: 99.90, stock: 10 },
            { id: 5, image: watch6, name: "Audemars Piguet", price: 99.90, stock: 5 },
            { id: 6, image: watch7, name: "LeCoultre", price: 98.90, stock: 6 },
            { id: 7, image: watch8, name: "Omega", price: 87.90, stock: 5 },
        ],
        cartItens: [],
    },
    mutations
})

export { store };