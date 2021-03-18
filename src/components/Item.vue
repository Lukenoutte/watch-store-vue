<template>
  <div class="item">
    <img :src="itemProp.image" alt="watch" />
    <div class="name-and-price">
      <p class="name">{{ itemProp.name }}</p>
      <p class="price">{{ formatValue(itemProp.price) }}</p>
    </div>
    <button @click="addItemToCart(itemProp)">ADD TO CART</button>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import { formatValue } from "../helpers";
export default {
  name: "Item",
  props: {
    itemProp: { type: Object, required: true },
  },
  methods: {
    ...mapMutations(["addItemToCart"]),
    formatValue,
  },
};
</script>


<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
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

.name-and-price{
  width: 100%;
}

@media only screen and (max-width: 1240px) {
  img {
    width: 100%;
    height: auto;
  }
}

@media only screen and (max-width: 700px) {
  .itens-ul {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>