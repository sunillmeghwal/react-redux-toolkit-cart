import React, { useState } from "react";
import { useSelector } from "react-redux";

function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);

  const [cartItems, setCartItems] = useState(cartSelector);

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    setCartItems(cartTempItems);
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartItems.length}items</span>
        </div>

        {cartItems.length > 0
          ? cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.thumbnail} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div className="item-action">
                  <div style={{ display: "flex" }}>
                    <input
                      onChange={(e) => manageQuantity(item.id, e.target.value)}
                      value={item.quantity ? item.quantity : 1}
                      style={{ margin: "15px" }}
                      type="number"
                      placeholder="enter quantity"
                    />
                    <div>
                      <span className="price">
                        ${" "}
                        {(item.quantity
                          ? item.price * item.quantity
                          : item.price
                        ).toFixed(2)}
                      </span>
                      <button className="remove-btn">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}

        <div className="cart-footer">
          Total:$
          {cartItems
            .reduce(
              (sum, item) =>
                item.quantity
                  ? sum + item.price * item.quantity
                  : sum + item.price,
              0
            )
            .toFixed(2)}
        </div>
      </div>
    </>
  );
}

export default CartList;
