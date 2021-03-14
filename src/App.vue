<template>
  <div id="app">
    <app-header />
    <router-view />
    <footer/>
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

#app{
    background-color: azure;
}

body,
input,
button {
  font: 14px "Poppins", sans-serif;
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