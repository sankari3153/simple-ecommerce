import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleQtyChange = (id, qty) => {
    if (qty < 1) return;
    updateQuantity(id, qty);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600 underline">Shop Now</Link></p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded shadow-sm">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>₹{item.price} x {item.qty}</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={item.qty}
                  min="1"
                  onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value))}
                  className="w-16 border rounded px-2 py-1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <Link to="/checkout">
            <button className="bg-green-600 text-white px-6 py-2 mt-4 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
