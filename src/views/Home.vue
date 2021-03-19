<template>
  <div>
    <ul class="itens-ul">
      <li v-for="item in itensArray" :key="item.id">
        <item-home :itemProp="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    ItemHome: () => import("../components/ItemHome"),
  },
  computed: {
    ...mapState({
      itensArray: (state) => state.itensArray,
    }),
  },
};
</script>

<style scoped>


.itens-ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 13px;
}

@media only screen and (max-width: 1240px) {
  .itens-ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 700px) {
  .itens-ul {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>