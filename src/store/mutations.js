import { subtotalValue } from "../helpers";
import Vue from 'vue'

export default {

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

}