<template>
  <header>
    <router-link class="logo" to="/">Lokenoutte Store</router-link>
    <router-link class="cart" to="/cart">Cart</router-link>
  </header>
</template>


<script>
export default {
  name: "AppHeader",
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
.logo{
  color: var(--white-color);
  font-weight: bold;
  font-size: 20px;
}

.cart{
  color: var(--white-color);
  font-weight: bold;
}

</style>