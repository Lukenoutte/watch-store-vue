<template>
  <header>
    <router-link class="logo" to="/">Lokenoutte Store</router-link>
    <router-link class="cart" to="/cart">
      <p>My Cart</p>
      <icon name="shopping-cart" />

      <span>{{ cartItens.length }}</span>
    </router-link>
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
  data() {
    return {};
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
  font-weight: 500;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
}

.cart p {
  margin-right: 3px;
}

.cart span {
  background-color: var(--white-color);
  border: 2px solid var(--primary-color);
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px;
  top: -8px;
  font-size: 12px;
  overflow: hidden;
  font-weight: bold;
  border-radius: 100%;
  text-align: center;
}

@media only screen and (max-width: 700px) {
  .logo {
    font-size: 20px;
  }
  .cart {
    font-size: 15px;
  }
}

@media only screen and (max-width: 300px) {
  .logo {
    font-size: 13px;
  }
  .cart {
    font-size: 13px;
  }
}
</style>