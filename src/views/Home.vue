<template>
  <div>
    <ul class="itens-ul">
      <li v-for="item in itensArray" :key="item.id">
        <item :itemProp="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Item: () => import("../components/Item"),
  },
  computed: {
    ...mapState({
      itensArray: (state) => state.itensArray,
    }),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap");


.itens-ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 13px;
}
</style>