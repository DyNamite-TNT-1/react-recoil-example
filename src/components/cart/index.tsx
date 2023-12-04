import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "./cartState";

export const Cart = () => {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);
  return (
    <div>
      Cart
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id}>
            {item.title}: {item.quantity}
          </li>
        ))}
      </ul>
      <h4>Total: {total} VND</h4>
    </div>
  );
};
