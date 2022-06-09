import { subtotalValue } from "../helpers";
import Vue from 'vue'

export default {

    addItemToCart: (state, item) => {
        const itemExist = state.cartItens.find(cartItem => cartItem.id === item.id);
        if (!itemExist) return state.cartItens.push({ ...item, quantityOnCart: 1, subtotal: item.price });
        if (itemExist.stock === 0)  return
        itemExist.quantityOnCart++;
        itemExist.stock--;
        itemExist.subtotal = subtotalValue(itemExist.price, itemExist.quantityOnCart);
    },

    removeItemToCart: (state, index) => {
        Vue.delete(state.cartItens, index);
    },

    addOneToQuantity: (state, index) => {
        const item = state.cartItens[index];
        if (item.stock === 0) return
        item.stock--;
        item.quantityOnCart++;
        item.subtotal = subtotalValue(item.price, item.quantityOnCart);
    },
    removeOneToQuantity: (state, index) => {
        const item = state.cartItens[index];
        if (item.quantityOnCart  === 1) return
        item.quantityOnCart--;
        item.stock++;
        item.subtotal = subtotalValue(item.price, item.quantityOnCart);
    }

}