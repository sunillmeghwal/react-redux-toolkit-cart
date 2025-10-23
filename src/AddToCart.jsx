import React from "react";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const selector = useSelector((state) => state.cart.value);
  console.log(selector);
  return (
    <div>
      <div className="cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{selector}</span>
      </div>
    </div>
  );
};

export default AddToCart;
