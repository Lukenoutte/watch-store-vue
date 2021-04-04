import { shallowMount, createLocalVue } from "@vue/test-utils";
import TheHeader from "@/components/TheHeader.vue";
import VueRouter from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.component("icon", FontAwesomeIcon);
localVue.use(Vuex);
let wrapper;

describe("TheHeader.vue", () => {
  test("TheHeader render ", () => {
    createWrapper();
    expect(wrapper).toBeTruthy();
  });

  test("Pop up render", () => {
    createWrapper();
    expect(wrapper.find("#popup").exists()).toBe(true);
  });

  test("Amount itens on cart", () => {
    createWrapper();
    expect(wrapper.find("#amount-cart").text()).toBe("1");
  });

  test("Amount itens on cart with empty cart", () => {
    createWrapperEmptyCart();
    expect(wrapper.find("#amount-cart").text()).toBe("0");
  });

  test("Pop up render empty cart", () => {
    createWrapperEmptyCart();
    expect(wrapper.find("#popup").exists()).toBe(false);
  });
});

const createWrapper = () => {
  let state;
  let store;

  state = {
    cartItens: [
      {
        id: 4,
        image: require("@/assets/images/watch_5.png"),
        name: "Longines",
        price: 99.9,
        stock: 10,
      },
    ],
  };
  store = new Vuex.Store({
    state,
  });

  wrapper = shallowMount(TheHeader, { store, localVue });
};

const createWrapperEmptyCart = () => {
  let state;
  let store;

  state = {
    cartItens: [],
  };
  store = new Vuex.Store({
    state,
  });

  wrapper = shallowMount(TheHeader, { store, localVue });
};
