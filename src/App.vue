<template>
  <div id="app">
    <app-header />
    <div class="main-container">
      <router-view />
    </div>
    <footer />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    AppHeader: () => import("./components/AppHeader"),
  },
};
</script>


<style>
#app {
  background-color: azure;
  min-height: 100vh;
}

body,
input,
button {
  font: 14px "Poppins", sans-serif;
}

.main-container {
  padding: 0 100px;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

a {
  text-decoration: none;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}

footer {
  height: 50px;
}
</style>