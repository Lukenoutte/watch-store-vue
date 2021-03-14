<template>
  <div class="item">
    <div class="image"></div>
    <div>
      <p class="name">{{name}}</p>
      <p class="price">R$ {{price}}</p>
    </div>
    <button>ADD TO CARD</button>
  </div>
</template>


<script>
export default {
  name: "Item",
  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
  },
};
</script>


<style scoped>
.item {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
  width: 280px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px;
}

button {
  height: 40px;
  margin-top: 30px;
  border-radius: 5px;
  border: none;
  background: aquamarine;
  color: #fff;
  font-weight: bolder;
}

.image {
  background: aquamarine;
  width: 100%;
  height: 200px;
}

.name {
  margin-top: 30px;
  font-size: 19px;
}

.price {
  margin-top: 8px;
  font-weight: bold;
  font-size: 19px;
}
</style>