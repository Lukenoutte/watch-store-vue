import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    itensArray: [
      {
        id: 0,
        image: require("@/assets/images/watch_1.png"),
        name: "Piaget",
        price: 60.9,
        stock: 5,
      },
      {
        id: 1,
        image: require("@/assets/images/watch_2.png"),
        name: "Cartier",
        price: 50.9,
        stock: 10,
      },
      {
        id: 2,
        image: require("@/assets/images/watch_3.png"),
        name: "Harry Winston",
        price: 70.9,
        stock: 20,
      },
      {
        id: 3,
        image: require("@/assets/images/watch_4.png"),
        name: "Benson",
        price: 100.0,
        stock: 3,
      },
      {
        id: 4,
        image: require("@/assets/images/watch_5.png"),
        name: "Longines",
        price: 99.9,
        stock: 10,
      },
      {
        id: 5,
        image: require("@/assets/images/watch_6.png"),
        name: "Audemars Piguet",
        price: 99.9,
        stock: 5,
      },
      {
        id: 6,
        image: require("@/assets/images/watch_7.png"),
        name: "LeCoultre",
        price: 98.9,
        stock: 6,
      },
      {
        id: 7,
        image: require("@/assets/images/watch_8.png"),
        name: "Omega",
        price: 87.9,
        stock: 5,
      },
    ],
    cartItens: [],
  },
  mutations,
});

export { store };
