<template>
  <div class="pop-up">
    <div class="item" v-for="(item, index) in cartItens" :key="index">
      <img :src="item.image" :alt="item.name" />
      <div>
        <p>{{ item.name }}</p>
        <p class="price">
          <span>{{ item.quantityOnCart }}x</span>{{ formatValue(item.price) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formatValue } from "../helpers";
export default {
  name: "PopUp",
  computed: {
    ...mapState({
      cartItens: state => state.cartItens
    })
  },
  methods: {
    formatValue
  }
};
</script>

<style scoped>
.pop-up {
  width: 220px;
  background: var(--primary-color);
  padding: 20px;
  z-index: 5;
  box-shadow: rgb(0 0 0 / 30%) 0px 3px 5px;
  border-radius: 5px;

  position: absolute;
  top: 100%;
  right: 0px;
  color: var(--white-color);
  opacity: 0;
  visibility: hidden;
}

.pop-up img {
  width: 50px;
  border: 1px solid var(--white-color);
  border-radius: 5px;
  padding: 5px;
  background: var(--white-color);
}

.item {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
}

.item:first-child {
  margin-top: 0px;
}

.item p {
  font-size: 12px;
  margin-left: 10px;
}

.price {
  font-weight: 700;
}

.price span {
  margin-right: 5px;
  font-size: 10px;
}
</style>