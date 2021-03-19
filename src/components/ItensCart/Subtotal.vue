<template>
  <div class="subtotal-container">
    <strong>SUBTOTAL</strong>
    <div>
      <p class="price">{{ formatValue(subtotal) }}</p>
      <button class="remove-all-button" @click="removeItemToCart(index)">
        DELETE
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { formatValue } from "../../helpers";

export default {
  name: "Subtotal",
  props: {
    subtotal: { required: true },
    index: { type: Number, required: true },
  },
  methods: {
    ...mapMutations(["removeItemToCart"]),
    formatValue,
  },
};
</script>

<style scoped>
.subtotal-container {
  display: flex;
  flex-direction: column;
}
.subtotal-container div {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}

.subtotal-container p {
  margin-right: 30px;
}

.remove-all-button {
  background: var(--primary-color);
  border-radius: 5px;
  color: var(--white-color);
  padding: 4px 20px;
  border: 0;
  font-weight: bold;
}

.remove-all-button:hover {
    background: var(--primary-hover);
}

.price {
  font-weight: 600;
  font-size: 18px;
  width: 100px;
}

strong {
  color: var(--grey-color);
  width: fit-content;
}

@media only screen and (max-width: 850px) {
  .subtotal-container div {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .remove-all-button {
    margin-top: 20px;
    margin-left: 0px;
    width: 70%;
    height: 45px;
  }

  .subtotal-container p {
    margin-right: 0px;
  }
  .subtotal-container {
    align-items: center;
    width: 100%;
  }
  .subtotal-container div {
    justify-content: center;
    width: 100%;
  }
  
  .price {
    display: flex;
    justify-content: center;
  }
}
</style>