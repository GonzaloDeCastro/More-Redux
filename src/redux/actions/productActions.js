import { productTypes } from "../types/productTypes";

export const productShow = (product) => {
  return {
    type: productTypes.productShow,
    payload: product.id,
  };
};

export const productAdd = (product) => {
  return {
    type: productTypes.productAddToCart,
    payload: product.id,
  };
};

export const productRemoveCart = (product) => {
  return {
    type: productTypes.productOneRemoveCart,
    payload: product.id,
  };
};

export const productRemoveAllCart = (product) => {
  return {
    type: productTypes.productRemoveCart,
    payload: product.id,
  };
};
