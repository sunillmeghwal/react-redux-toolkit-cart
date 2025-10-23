import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">ShopMate</div>

        <nav className="nav">
          <Link to="/">Home</Link>
        </nav>

        <AddToCart />
      </header>
    </div>
  );
};

export default Header;
