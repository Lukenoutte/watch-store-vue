<template>
  <div class="home">

    <div class="main-container">
      <ul class="itens-ul">
        <li v-for="(item, index) in itensArray" :key="index">
          <item :name="item.name" :price="item.price" />
          {{ item.id }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Item: () => import("../components/Item"),
  },
  data() {
    return {
      itensArray: [
        { image: "/", name: "Shoes", price: "10" },
        { image: "/", name: "Table", price: "30" },
        { image: "/", name: "Coath", price: "30" },
        { image: "/", name: "Notebook", price: "100" },
        { image: "/", name: "TV", price: "100" },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap");
.home {
  height: 100%;
}

.main-container {
  padding: 0 100px;
}

.itens-ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}

</style>