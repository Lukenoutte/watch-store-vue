<template>
  <div>
    <div v-if="cartItens.length === 0" class="cart-container-empty">
      <span> SHOPPING CART IS EMPTY </span>
      <router-link to="/"> CONTINUE SHOPPING </router-link>
    </div>
    <div v-else>
      <div class="item-cart" v-for="item in cartItens" :key="item.id">
        <img :src="item.image" alt="watch" />
        <div>
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </div>

        <button @click="removeItemToCart(item.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState({
      cartItens: (state) => state.cartItens,
    }),
  },
  methods: {
    ...mapMutations(["removeItemToCart"]),
  },
};
</script>

<style scoped>
.cart-container-empty {
  width: 100%;
  background: var(--white-color);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item-cart {
  width: 100%;
  height: 150px;
  background: var(--white-color);
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

img {
  height: 120px;
}
</style>