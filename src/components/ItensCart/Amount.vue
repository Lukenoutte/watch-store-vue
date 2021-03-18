<template>
  <div class="amount-container">
    <strong>AMOUNT</strong>
    <div>
      <button class="remove-one-button" @click="removeOneToQuantity(index)">
        <p>-</p>
      </button>
      <span>{{ quantity }}</span>
      <button class="add-one-button" @click="addOneToQuantity(index)">
        <p>+</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Amount",
  props: {
    quantity: { type: Number, required: true },
    index: { type: Number, required: true },
  },
  methods: {
    ...mapMutations(["addOneToQuantity", "removeOneToQuantity"]),
  },
};
</script>

<style scoped>
.amount-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amount-container div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
}

.amount-container span {
  padding: 5px 30px;
  border: 1px solid var(--light-grey);
  border-radius: 5px;
}

.amount-container button {
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  font-weight: bolder;
}
.amount-container button p {
  line-height: 19px;
}

.add-one-button {
  margin-left: 10px;
}

.remove-one-button {
  margin-right: 10px;
}

strong {
  color: var(--grey-color);
  width: fit-content;
}

@media only screen and (max-width: 850px) {
  .amount-container button {
    height: 30px;
    width: 30px;
  }
}
</style>