<template>
  <div id="app">
    <div class="main-container">
      <app-header />
      <router-view />
      <footer />
    </div>
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
:root {
  --primary-color: #3c3c3c;
  --white-color: #fff;
}

#app {
  background-color: var(--primary-color);
  min-height: 100vh;
  display: flex;
  justify-content: center;

}

body,
input,
button {
  font: 14px "Poppins", sans-serif;
}

.main-container {
  padding: 0 100px;
  max-width: 1300px;
  width: 100vw;
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