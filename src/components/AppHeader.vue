<template>
  <header>
    <router-link class="logo" to="/">
      <icon name="stopwatch" />Lokenoutte</router-link
    >
    <router-link class="cart" to="/cart">
      <p>My Cart</p>
      <icon name="shopping-cart" />

      <span>{{ cartItens.length }}</span>
      <pop-up v-if="cartItens.length > 0" />
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
  components: {
    PopUp: () => import("./PopUp"),
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

.logo:hover {
  color: var(--primary-hover);
}

.cart {
  color: var(--primary-color);
  font-weight: 500;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
}

.cart:hover {
  color: var(--primary-hover);
}

.cart:hover .pop-up {
  opacity: inherit;
  visibility: visible;
  transition: all 0.3s ease 0s;
  transform: translateY(10px);
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

.logo .stopwatch {
  margin-right: 10px;
}

@media only screen and (max-width: 700px) {
  .logo {
    font-size: 19px;
  }
  .cart {
    font-size: 14px;
  }
  .cart p {
    display: none;
  }
}

@media only screen and (max-width: 375px) {
  .stopwatch {
    height: 25px;
  }
  .shopping-cart {
    height: 23px;
  }
  .logo {
    font-size: 16px;
  }
}
</style>