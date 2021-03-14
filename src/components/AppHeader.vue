<template>
  <header>
    <router-link to="/">Logo</router-link>
    <router-link to="/cart">Cart</router-link>
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
  padding: 0 100px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  justify-content: space-between;
}
</style>