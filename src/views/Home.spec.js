import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
let wrapper;

describe("Home.vue", () => {
  beforeAll(() => {
    createWrapper();
  });
  test("Home render ", () => {
    expect(wrapper).toBeTruthy();
  });

  test("Home items render ", () => {
    expect(wrapper.findAll("#item").length).toBe(3);
  });
});

const createWrapper = () => {
  let state;
  let store;

  state = {
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
    ],
  };
  store = new Vuex.Store({
    state,
  });

  wrapper = shallowMount(Home, { store, localVue });
};
