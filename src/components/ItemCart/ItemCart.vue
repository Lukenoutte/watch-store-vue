<template>
  <div class="item-cart">
    <ul>
      <li>
        <img :src="item.image" alt="watch" />
      </li>
      <li>
        <product-info :name="item.name" :price="item.price" id="info" />
      </li>
      <li>
        <amount :quantity="item.quantityOnCart" :index="index" id="amount" />
      </li>
      <li>
        <subtotal :subtotal="item.subtotal" :index="index" id="subtotal" />
      </li>
    </ul>
  </div>
</template>

<script>
import { formatValue } from "@/helpers";
export default {
  name: "ItemCart",
  props: {
    item: { type: Object, required: true },
    index: { type: Number, required: true },
  },
  methods: {
    formatValue,
  },
  components: {
    Amount: () => import("./components/AmountCart"),
    Subtotal: () => import("./components/SubtotalCart"),
    ProductInfo: () => import("./components/ProductInfoCart"),
  },
};
</script>

<style scoped>
.item-cart {
  width: 100%;
  background: var(--white-color);
  border-radius: 5px;
  padding: 40px;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.item-cart ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 100%;
}

li img {
  height: 120px;
  margin-top: 10px;
}

@media only screen and (max-width: 1240px) {
  .item-cart {
    padding: 3px;
  }
  .item-cart ul {
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    grid-gap: 10px;
  }
}

@media only screen and (max-width: 850px) {
  .item-cart {
    padding: 20px;
  }
  .item-cart ul {
    grid-template-columns: repeat(1, 1fr);
  }
  li img {
    height: 240px;
  }

  ul li {
    border-bottom: 1px solid var(--light-grey);
    padding: 30px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  ul li:last-child {
    border-bottom: 0;
  }
}

@media only screen and (max-width: 300px) {
  li img {
    height: 190px;
  }
}
</style>