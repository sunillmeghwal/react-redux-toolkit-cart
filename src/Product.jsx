import React from "react";
import { useDispatch } from "react-redux";

import { addItem, removeItem } from "./redux/slice";

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <main className="products-section">
        <h2>Our Products</h2>
        <div className="products">
          <div className="product-card">
            <img
              src="https://imagescdn.pantaloons.com/img/app/product/3/307949-1397073.jpg?auto=format&w=450"
              alt="Product 1"
            />
            <h3>Red T-Shirt</h3>
            <p className="price">$19.99</p>
            <button onClick={() => dispatch(addItem(1))} className="add-btn">
              Add to Cart
            </button>
            <button onClick={()=>dispatch(removeItem(1))} class="remove-btn">Remove to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
