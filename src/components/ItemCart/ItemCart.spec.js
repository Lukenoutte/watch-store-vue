import { shallowMount, createLocalVue } from "@vue/test-utils";
import ItemCart from "@/components/ItemCart/ItemCart.vue";
const localVue = createLocalVue();
let wrapper;

describe("ItemCart.vue", () => {
  beforeAll(() => {
    createWrapper();
  });

  test("ItemCart render ", async () => {
    expect(wrapper).toBeTruthy();
  });

  test("ItemCart render img ", async () => {
    expect(wrapper.find("img").exists()).toBeTruthy();
  });

  test("ItemCart render amount ", async () => {
    expect(wrapper.find("#amount").exists()).toBeTruthy();
  });

  test("ItemCart render subtotal ", async () => {
    expect(wrapper.find("#subtotal").exists()).toBeTruthy();
  });

  test("ItemCart render products info ", async () => {
    expect(wrapper.find("#info").exists()).toBeTruthy();
  });
});

const createWrapper = () => {
  wrapper = shallowMount(ItemCart, {
    propsData: {
      item: {
        id: 0,
        image: require("@/assets/images/watch_1.png"),
        name: "Piaget",
        price: 60.9,
        stock: 5,
        quantityOnCart: 2,
      },
      index: 0,
    },
    localVue,
  });
};
