<template>
  <div class="cart">
    <div v-if="cartItens.length === 0" class="cart-container-empty">
      <icon name="sad-tear"/>
      <span> SHOPPING CART IS EMPTY </span>
      <p> You have no products in your shopping cart. </p>
      <router-link  class="button-empty" to="/"> CONTINUE SHOPPING </router-link>
    </div>
    <div v-else>
      <itens-cart />
    </div>

    <div v-if="cartItens.length > 0" class="total-container">
      <span> TOTAL </span>
      <strong> {{ formatValue(total($store.state.cartItens)) }}</strong>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formatValue } from "../helpers";
export default {
  name: "Cart",
  components: {
    ItensCart: () => import("../components/ItensCart/ItensCart.vue"),
  },
  computed: {
    ...mapState({
      cartItens: (state) => state.cartItens,
    }),
  },
  methods: {
    total: (cartItens) => {
      if (cartItens.length > 1) {
        let total = cartItens.reduce(
          (sum, cur) => sum + parseFloat(cur.subtotal),
          0
        );
        return total;
      } else {
        return cartItens[0].subtotal;
      }
    },
    formatValue
  },
};
</script>

<style scoped>
.cart {
  position: relative;
  padding-bottom: 150px;
}

.cart-container-empty {
  width: 100%;
  background: var(--white-color);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cart-container-empty span{
  font-weight: 600;
  font-size: 30px;
  color: var(--light-back);
}

.cart-container-empty p{
  color: var(--grey-color);
}

.total-container {
  background-color: var(--white-color);
  width: 250px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
  margin-top: 20px;
  position: absolute;
  right: 0;
}

.total-container strong {
  margin-left: 10px;
  font-size: 25px;
}

.total-container span{
  font-weight: 500;
  color: var(--grey-color);
}

.button-empty{
  background: var(--primary-color);
  border-radius: 5px;
  color: var(--white-color);
  padding: 10px 20px;
  margin-top: 20px;
  font-weight: 600;
}

.button-empty:hover{
  background: var(--primary-hover);
}

.sad-tear{
  height: 150px;
  width: 150px;
  margin-bottom: 30px;
  color: var(--light-grey);
}

@media only screen and (max-width: 700px) {
  .total-container {
    width: 100%;
  }

  .sad-tear{
  height: 100px;
  width: 100px;
  }

  .cart-container-empty span{
  font-size: 18px;
  }
  .cart-container-empty p{
    font-size: 12px;
  }
}

@media only screen and (max-width: 280px) {
  .cart-container-empty span{
  font-size: 14px;
  }
  .cart-container-empty p{
    display: none;
  }
}
</style>