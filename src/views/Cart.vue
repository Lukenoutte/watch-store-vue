<template>
  <div class="cart">
    <div v-if="cartItens.length === 0" class="cart-container-empty">
      <span> SHOPPING CART IS EMPTY </span>
      <router-link to="/"> CONTINUE SHOPPING </router-link>
    </div>
    <div v-else>
      <div class="item-cart" v-for="item in cartItens" :key="item.id">
        <ul>
          <li>
            <img :src="item.image" alt="watch" />
          </li>
          <li>
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>
          </li>
          <li>Quatity  {{item.quantity}}</li>
          <li>
            Sub <button @click="removeItemToCart(item.id)">Delete</button>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="cartItens.length > 0"  class="total-container"> <span> TOTAL </span> <strong>R$ 200</strong></div>
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

.cart{
  position: relative;
  padding-bottom: 150px;
}

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
  border-radius: 5px;
  padding: 0 20px;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.item-cart ul{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 100%;
}

li img {
  height: 120px;
}

li button{
  margin-left: 70px;
}

.total-container{
  background-color: var(--white-color);
  width: 200px;
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

.total-container strong{
  margin-left: 10px;
  font-size: 25px;
}

</style>