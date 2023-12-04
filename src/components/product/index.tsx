import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Product, addToCart, productListState } from "./productState";
import { cartState } from "../cart/cartState";

export const ProductList = () => {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddToCart = (product: Product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };
  return (
    <>
      <div>Product List</div>
      <ul>
        {productList.map((product) => (
          <li>
            {product.title} - {product.price}
            <button
              style={{ marginLeft: "1rem" }}
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
