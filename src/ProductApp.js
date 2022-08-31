import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productAdd,
  productRemoveAllCart,
  productRemoveCart,
  productShow,
} from "./redux/actions/productActions";

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
            <button onClick={() => dispatch(productShow(product))}>Show</button>
            <button onClick={() => dispatch(productAdd(product))}>
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
            <button onClick={() => dispatch(productRemoveCart(product))}>
              Remove one
            </button>
            <button onClick={() => dispatch(productRemoveAllCart(product))}>
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
