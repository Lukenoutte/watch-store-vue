<template>
  <div>
    <h1>My cart!</h1>
    <p v-for="item in cartItens" :key="item.id">{{ item.name }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState({
      cartItens: (state) => state.cartItens,
    }),
  },
};
</script>