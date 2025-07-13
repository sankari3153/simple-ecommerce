import React, { useState } from "react";
import initialProducts from "../data/products.json";
import ProductForm from "../components/ProductForm";

const Admin = () => {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddOrEdit = (product) => {
    if (product.id) {
      // Edit existing product
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
      setEditingProduct(null);
    } else {
      // Add new product
      const newProduct = { ...product, id: Date.now() };
      setProducts((prev) => [...prev, newProduct]);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      {/* Form for Add/Edit */}
      <ProductForm
        onSubmit={handleAddOrEdit}
        productToEdit={editingProduct}
        onCancel={() => setEditingProduct(null)}
      />

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Product List</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Discount</th>
              <th className="p-2 border">In Stock</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id} className="text-center">
                <td className="p-2 border">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-16 w-16 object-contain mx-auto"
                  />
                </td>
                <td className="p-2 border">{prod.name}</td>
                <td className="p-2 border">{prod.category}</td>
                <td className="p-2 border">₹{prod.price}</td>
                <td className="p-2 border">{prod.discount}%</td>
                <td className="p-2 border">
                  {prod.inStock ? "Yes" : "No"}
                </td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => handleEditClick(prod)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(prod.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
