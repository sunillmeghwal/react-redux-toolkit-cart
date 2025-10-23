import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector.length);
  return (
    <div>
      <div className="cart">
        <Link to="/cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">
            {cartSelector.length ? cartSelector.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
