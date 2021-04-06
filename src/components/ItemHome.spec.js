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

  test("ItemHome render ", async () => {
    expect(wrapper).toBeTruthy();
  });

  test("ItemHome render name", async () => {
    expect(wrapper.find(".name").text()).toBe("Piaget");
  });

  test("ItemHome render price", async () => {
    expect(wrapper.find(".price").text()).toBe("R$ 60.90");
  });

  test("ItemHome render img", async () => {
    expect(wrapper.find("img").exists()).toBeTruthy();
  });

  test("ItemHome render button", async () => {
    expect(wrapper.find("button").exists()).toBeTruthy();
  });
});

const createWrapper = () => {
  let state;
  let store;
  let actions;

  actions = {
    addItemToCart: jest.fn(),
    loadingControl: jest.fn(),
  };

  store = new Vuex.Store({
    state,
    actions,
  });

  wrapper = shallowMount(ItemHome, {
    propsData: {
      itemProp: {
        id: 0,
        image: require("@/assets/images/watch_1.png"),
        name: "Piaget",
        price: 60.9,
        stock: 5,
      },
    },
    store,
    localVue,
  });
};
