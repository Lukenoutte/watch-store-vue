import mutations from "./mutations";

describe("Mutations", () => {
  let item = {
    id: 0,
    image: require("@/assets/images/watch_1.png"),
    name: "Piaget",
    price: 60.9,
    stock: 5,
  };

  let state;

  beforeEach(() => {
    state = {
      cartItens: [],
    };
  });

  test(" Add item to cart empty ", () => {
    mutations.addItemToCart(state, item);
    expect(state.cartItens.length).toBe(1);
    expect(state.cartItens[0].quantityOnCart).toBe(1);
  });

  test(" Add item that already exist to cart ", () => {
    mutations.addItemToCart(state, item);
    mutations.addItemToCart(state, item);
    expect(state.cartItens.length).toBe(1);
    expect(state.cartItens[0].quantityOnCart).toBe(2);
  });

  test(" Remove item to cart ", () => {
    state.cartItens = [item];
    mutations.removeItemToCart(state, 0);
    expect(state.cartItens.length).toBe(0);
  });

  test(" Add to quatity ", () => {
    state.cartItens = [
      {
        id: 0,
        image: require("@/assets/images/watch_1.png"),
        name: "Piaget",
        price: 60.9,
        stock: 5,
        quantityOnCart: 1,
      },
    ];

    mutations.addOneToQuantity(state, 0);
    expect(state.cartItens[0].quantityOnCart).toBe(2);
  });

  test(" Remove to quatity ", () => {
    state.cartItens = [
      {
        id: 0,
        image: require("@/assets/images/watch_1.png"),
        name: "Piaget",
        price: 60.9,
        stock: 5,
        quantityOnCart: 2,
      },
    ];

    mutations.removeOneToQuantity(state, 0);
    expect(state.cartItens[0].quantityOnCart).toBe(1);
  });
});
