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
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");

:root {
  --background: #f5f5f7;
  --white-color: #fff;
  --primary-color: #0071e3;
  --primary-hover: #006cd9;
  --dark-primary: #0066cc;
  --dark-primary-hover: #005dba;
  --grey-color: #999999;
  --light-grey: #dddddd;
  --light-back: #333333;
}

#app {
  background-color: var(--background);
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

@media only screen and (max-width: 1240px) {
  .main-container {
    padding: 0 50px;
  }
}

@media only screen and (max-width: 700px) {
  .main-container {
    padding: 0 25px;
  }
}
</style>