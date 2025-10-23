import React from "react";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector.length);
  return (
    <div>
      <div className="cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </div>
    </div>
  );
};

export default AddToCart;
