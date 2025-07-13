import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">🛍️ MyShop</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/cart" className="hover:text-yellow-400">
            Cart ({cartItems.length})
          </Link>
          <Link to="/checkout" className="hover:text-yellow-400">Checkout</Link>
          <Link to="/admin" className="hover:text-yellow-400">Admin</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
