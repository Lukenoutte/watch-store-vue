<template>
  <div class="item">
    <img :src="itemProp.image" :alt="itemProp.name" />
    <div class="name-and-price">
      <p class="name">{{ itemProp.name }}</p>
      <p class="price">{{ formatValue(itemProp.price) }}</p>
    </div>

    <button @click="addItemToCart(itemProp); loadingControl(isLoading)">
      <div>
        <loading v-if="isLoading"/>
        <icon name="cart-arrow-down" v-if="!isLoading" />
      </div>
      <p>ADD TO CART</p>
    </button>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import { formatValue } from "../helpers";
export default {
  name: "ItemHome",
  data(){
    return {
      isLoading: false,
    }
  },
  props: {
    itemProp: { type: Object, required: true },
  },
  methods: {
    ...mapMutations(["addItemToCart"]),
    formatValue,
    loadingControl: function (){
      this.isLoading = true;
      setTimeout(() => this.isLoading = false, 1000);
    }
  },
  components: {
    Loading: () => import("./Loading"),
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
  display: flex;
  align-items: center;
}

button:hover {
  background: var(--primary-hover);
}

button:hover div {
  background: var(--dark-primary-hover);
}

button div {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: var(--dark-primary);
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

button p {
  width: 100%;
}

button .cart-arrow-down {
  height: 16px;
}

img {
  width: 300px;
  height: 300px;
  transition: all 0.3s ease 0s;
}

.name {
  margin-top: 30px;
  font-size: 19px;
  font-weight: 500;
}

.price {
  margin-top: 2px;
  font-weight: bold;
  font-size: 19px;
}

.name-and-price {
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