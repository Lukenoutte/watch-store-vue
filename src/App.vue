<template>
  <div id="app">
    <AppHeader />
    <div class="main-container">
      <ul class="itens-ul">
        <li><Item /></li>
        <li><Item /></li>
        <li><Item /></li>
        <li><Item /></li>
        <li><Item /></li>
        <li><Item /></li>
      </ul>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    AppHeader: () => import("./components/AppHeader"),
    Item: () => import("./components/Item"),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap");

#app {
  height: 100%;
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

.main-container {
  padding: 0 100px;
}

.itens-ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}

footer {
  height: 50px;
}
</style>
