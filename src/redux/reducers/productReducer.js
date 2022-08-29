import { types } from "../types/types";

const initialProductState = {
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
  cart: [{ id: 1, title: "Product #1", quantity: 1 }],
  activeProduct: { id: 2, title: "Product #2" },
};

const productReducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.productShow:
      return {
        ...state,
        activeProduct: state.products.find((product) => product.id === payload),
      };
    case types.productAddToCart: {
      const cartContainProduct = state.cart.find(
        (product) => product.id === payload
      );
      return cartContainProduct
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === payload
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                ...state.products.find((product) => product.id === payload),
                quantity: 1,
              },
            ],
          };
    }
    case types.productOneRemoveCart: {
      const productDelete = state.cart.find(
        (product) => product.id === payload
      );

      return productDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === action.payload
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((product) => product.id !== payload),
          };
    }
    case types.productRemoveCart:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
};

export { initialProductState };
export default productReducer;
