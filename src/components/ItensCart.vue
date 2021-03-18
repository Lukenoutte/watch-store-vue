<template>
  <div>
    <div class="item-cart" v-for="(item, index) in cartItens" :key="item.id">
      <ul>
        <li>
          <img :src="item.image" alt="watch" />
        </li>
        <li class="product-info-container">
          <strong>PRODUCT</strong>
          <div>
            <p class="product-name">{{ item.name }}</p>
            <p class="price">{{ formatValue(item.price) }}</p>
          </div>
        </li>
        <li class="amount-container">
          <strong>AMOUNT</strong>
          <div>
            <button
              class="remove-one-button"
              @click="removeOneToQuantity(index)"
            >
              <p>-</p>
            </button>
            <span>{{ item.quantityOnCart }}</span>
            <button class="add-one-button" @click="addOneToQuantity(index)">
              <p>+</p>
            </button>
          </div>
        </li>
        <li class="subtotal-container">
          <strong>SUBTOTAL</strong>
          <div>
            <span class="price"> {{ formatValue(item.subtotal) }}</span>
            <button class="remove-all-button" @click="removeItemToCart(index)">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { formatValue } from "../helpers";
export default {
  name: "ItensCart",
  computed: {
    ...mapState({
      cartItens: (state) => state.cartItens,
    }),
  },
  methods: {
    ...mapMutations([
      "removeItemToCart",
      "addOneToQuantity",
      "removeOneToQuantity",
    ]),
    formatValue,
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

li strong {
  color: var(--grey-color);
  width: fit-content;
}

li div {
  margin-top: 30px;
}
.amount-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.amount-container div {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.remove-all-button {
  background: var(--primary-color);
  border-radius: 5px;
  color: var(--white-color);
  padding: 4px 20px;
  border: 0;
  margin-left: 15%;
}

.price {
  font-weight: 600;
  font-size: 18px;
}

.remove-one-button {
  margin-right: 10px;
}
.add-one-button {
  margin-left: 10px;
}

.product-name {
  font-weight: 500;
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

  .subtotal-container div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .remove-all-button {
    margin-top: 20px;
    margin-left: 0px;
    width: 100%;
    height: 40px;
  }

  .product-info-container div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .amount-container button {
    height: 30px;
    width: 30px;
  }
}

@media only screen and (max-width: 300px) {
  li img {
    height: 190px;
  }
}
</style>