import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "./redux/productSlice";
import { addItem, removeItem } from "./redux/slice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector.length);

  return (
    <div className="grid">
      {productSelector.length &&
        productSelector.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>

              {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="remove-btn"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="add-btn"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
