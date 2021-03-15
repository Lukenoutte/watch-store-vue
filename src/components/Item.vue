<template>
  <div class="item">
    <img :src="itemProp.image" alt="watch">
    <div>
      <p class="name">{{ itemProp.name }}</p>
      <p class="price">R$ {{ itemProp.price }}</p>
    </div>
    <button @click="addItemToCart(itemProp.id)">ADD TO CART</button>
  </div>
</template>


<script>
import { mapMutations } from "vuex";

export default {
  name: "Item",
  props: {
    itemProp: { type: Object, required: true },
  },
  methods: {
    ...mapMutations(["addItemToCart"]),
  },
};
</script>


<style scoped>
.item {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: var(--white-color);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
}

.item:hover img {
  transform: scale(1.1);
}

button {
  height: 40px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background: var(--primary-color);
  color: var(--white-color);
  font-weight: bolder;
}

img {
  width: 300px;
  height: 300px;
  transition: all 0.3s ease 0s;
}

.name {
  margin-top: 30px;
  font-size: 19px;
}

.price {
  margin-top: 2px;
  font-weight: bold;
  font-size: 19px;
}
</style>