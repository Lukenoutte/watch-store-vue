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
    mutations: {

        addItemToCart: (state, item) => {
            let itemExist = state.cartItens.find(cartItem => cartItem.id === item.id);

            if (itemExist && itemExist.stock > 1) {
                itemExist.quantityOnCart++;
                itemExist.stock--;
                itemExist.subtotal = subtotalValue(itemExist.price, itemExist.quantityOnCart);
                

            } else if (!itemExist) {
                state.cartItens.push({ ...item, quantityOnCart: 1, subtotal: item.price });
                
            }


        },

        removeItemToCart: (state, index) => {
            Vue.delete(state.cartItens, index);
        },

        addOneToQuantity: (state, index) => {
            let item = state.cartItens[index];
            if (item.stock > 1) {
                item.stock--;
                item.quantityOnCart++;
                item.subtotal = subtotalValue(item.price, item.quantityOnCart);
            }
        },
        removeOneToQuantity: (state, index) => {
            let item = state.cartItens[index];
            if (item.quantityOnCart > 1) {
                item.quantityOnCart--;
                item.stock++;
                item.subtotal = subtotalValue(item.price, item.quantityOnCart);
            }
        }
    },
})

export { store };