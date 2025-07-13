// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full">
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/placeholder.jpg"; // fallback image
        }}
        className="h-48 w-full object-contain rounded-t bg-white"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700">₹{product.price}</p>
      </div>
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
