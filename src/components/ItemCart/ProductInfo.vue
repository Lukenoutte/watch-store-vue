<template>
  <div class="product-info-container">
    <strong>PRODUCT</strong>
    <div>
      <p class="product-name">{{ name }}</p>
      <p class="price">{{ formatValue(price) }}</p>
    </div>
  </div>
</template>

<script>
import { formatValue } from "../../helpers";
export default {
  name: "ProductInfo",
  props: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  methods: {
    formatValue,
  },
};
</script>

<style scoped>
.product-name {
  font-weight: 500;
}

.price {
  font-weight: 600;
  font-size: 18px;
  
}

.product-info-container div {
  margin-top: 30px;
}

strong {
  color: var(--grey-color);
  width: fit-content;
}

@media only screen and (max-width: 850px) {
  .product-info-container, .product-info-container div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>