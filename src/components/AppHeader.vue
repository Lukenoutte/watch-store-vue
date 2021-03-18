<template>
  <header>
    <router-link class="logo" to="/">Lokenoutte Store</router-link>
    <router-link class="cart" to="/cart">Cart  {{cartItens.length}}</router-link>
  </header>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapState({
      cartItens: (state) => state.cartItens,
    }),
  },
};
</script>


<style scoped>
header {
  height: 90px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;
}
.logo {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 30px;
}

.cart {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 20px;
}

@media only screen and (max-width: 700px) {
.logo {
  font-size: 20px;
}
.cart {
  font-size: 15px;
}
}
</style>