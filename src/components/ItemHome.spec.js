import { shallowMount, createLocalVue } from "@vue/test-utils";
import ItemHome from "@/components/ItemHome.vue";
import VueRouter from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.component("icon", FontAwesomeIcon);
localVue.use(Vuex);
let wrapper;

describe("ItemHome.vue", () => {
  beforeAll(() => {
    createWrapper();
  });

  test("ItemHome render ", () => {
    createWrapper();
    expect(wrapper).toBeTruthy();
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

  wrapper = shallowMount(ItemHome, { store, localVue });
};
