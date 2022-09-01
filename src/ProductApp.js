import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productAddToCart,
  productRemoveAllCart,
  productOneRemoveCart,
  productShow,
} from "./redux/reducers/productSlice";

const ProductApp = () => {
  const productState = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const { products, cart, activeProduct } = productState;
  return (
    <div>
      <h2>Products </h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <button onClick={() => dispatch(productShow(product.id))}>
              Show
            </button>
            <button onClick={() => dispatch(productAddToCart(product.id))}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - quantity {product.quantity}
            <button onClick={() => dispatch(productOneRemoveCart(product.id))}>
              Remove one
            </button>
            <button onClick={() => dispatch(productRemoveAllCart(product.id))}>
              Remove All
            </button>
          </li>
        ))}
      </ul>
      <h2>Preview</h2>
      <p>{activeProduct.title}</p>
    </div>
  );
};

export default ProductApp;
