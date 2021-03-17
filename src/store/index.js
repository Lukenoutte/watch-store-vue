import Vue from 'vue'
import Vuex from 'vuex'
import { subtotalValue } from "../helpers";

Vue.use(Vuex)

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
            { id: 0, image: watch1, name: "Watch 01", price: 10.90 },
            { id: 1, image: watch2, name: "Watch 02", price: 30.90 },
            { id: 2, image: watch3, name: "Watch 03", price: 30.90 },
            { id: 3, image: watch4, name: "Watch 04", price: 100.00 },
            { id: 4, image: watch5, name: "Watch 05", price: 99.90 },
            { id: 5, image: watch6, name: "Watch 06", price: 99.90 },
            { id: 6, image: watch7, name: "Watch 07", price: 99.90 },
            { id: 7, image: watch8, name: "Watch 08", price: 99.90 },
        ],
        cartItens: [],
        countItensCart: 0,
    },
    mutations: {

        addItemToCart: (state, item) => {
            let itemToAddExist = state.cartItens.find(cartItem => cartItem.id === item.id);

            if (itemToAddExist) {
                itemToAddExist.quantity++;

                let index = state.cartItens.indexOf(itemToAddExist);
                state.cartItens[index].subtotal = subtotalValue(item.price, item.quantity);

            } else {
                state.cartItens.push({ ...item, quantity: 1, subtotal: item.price });
            }

            state.countItensCart++;
        },

        removeItemToCart: (state, index) => {
            let quantity = state.cartItens[index].quantity;
            state.countItensCart = state.countItensCart - quantity;
            Vue.delete(state.cartItens, index);
        },

        addOneToQuantity: (state, index) => {
            state.countItensCart++;
            state.cartItens[index].quantity++;

            let item = state.cartItens[index];
            state.cartItens[index].subtotal = subtotalValue(item.price, item.quantity);


        },
        removeOneToQuantity: (state, index) => {

            state.cartItens[index].quantity--;
            state.countItensCart--;

            let item = state.cartItens[index];
            state.cartItens[index].subtotal = subtotalValue(item.price, item.quantity);

        }
    },
})

export { store };