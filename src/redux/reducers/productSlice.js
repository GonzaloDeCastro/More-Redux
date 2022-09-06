import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
  cart: [{ id: 1, title: "Product #1", quantity: 1 }],
  activeProduct: { id: 2, title: "Product #2" },
};

export const productSlice = createSlice({
  name: "productReducers",
  initialState,
  reducers: {
    productShow: (state, action) => {
      return {
        ...state,
        activeProduct: state.products.find(
          (product) => product.id === action.payload
        ),
      };
    },
    productAddToCart: (state, action) => {
      const cartContainProduct = state.cart.find(
        (product) => product.id === action.payload
      );
      return cartContainProduct
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === action.payload
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                ...state.products.find(
                  (product) => product.id === action.payload
                ),
                quantity: 1,
              },
            ],
          };
    },
    productOneRemoveCart: (state, action) => {
      const productDelete = state.cart.find(
        (product) => product.id === action.payload
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
            cart: state.cart.filter((product) => product.id !== action.payload),
          };
    },
    productRemoveAllCart: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    },
  },
});

export const {
  productShow,
  productAddToCart,
  productOneRemoveCart,
  productRemoveAllCart,
} = productSlice.actions;
export default productSlice.reducer;
