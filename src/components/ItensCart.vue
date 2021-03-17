<template>
  <div>
    <div class="item-cart" v-for="(item, index) in cartItens" :key="item.id">
      <ul>
        <li>
          <img :src="item.image" alt="watch" />
        </li>
        <li>
          <p>{{ item.name }}</p>
          <p>{{ formatValue(item.price) }}</p>
        </li>
        <li>
          <button @click="removeOneToQuantity(index)">-</button>
          {{ item.quantity }}
          <button @click="addOneToQuantity(index)">+</button>
        </li>
        <li>
          Sub {{ formatValue(item.subtotal)
          }}<button @click="removeItemToCart(index)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { formatValue } from "../helpers"
export default {
  name: "ItensCart",
  computed: {
    ...mapState({
      cartItens: (state) => state.cartItens,
    }),
  },
  methods: {
    ...mapMutations([
      "removeItemToCart",
      "addOneToQuantity",
      "removeOneToQuantity",
    ]),
    formatValue
  },
};
</script>

<style scoped>
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

.item-cart ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 100%;
}

li img {
  height: 120px;
}

li button {
  margin-left: 70px;
}
</style>