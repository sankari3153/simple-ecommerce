import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, productToEdit, onCancel }) => {
  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    image: "",
    description: "",
    category: "Clothing",
    discount: 0,
    inStock: true,
  });

  useEffect(() => {
    if (productToEdit) {
      setForm(productToEdit);
    } else {
      setForm({
        id: null,
        name: "",
        price: "",
        image: "",
        description: "",
        category: "Clothing",
        discount: 0,
        inStock: true,
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) {
      alert("Please fill all required fields");
      return;
    }
    onSubmit(form);
    setForm({
      id: null,
      name: "",
      price: "",
      image: "",
      description: "",
      category: "Clothing",
      discount: 0,
      inStock: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 p-4 rounded shadow"
    >
      <h3 className="text-lg font-semibold">
        {form.id ? "Edit Product" : "Add New Product"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL (e.g. /images/red-shirt.jpg)"
          className="p-2 border rounded col-span-1 md:col-span-2"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 border rounded col-span-1 md:col-span-2"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
          <option value="Accessories">Accessories</option>
        </select>

        <input
          type="number"
          name="discount"
          value={form.discount}
          onChange={handleChange}
          placeholder="Discount (%)"
          className="p-2 border rounded"
        />

        <label className="flex items-center space-x-2 col-span-1 md:col-span-2">
          <input
            type="checkbox"
            name="inStock"
            checked={form.inStock}
            onChange={handleChange}
          />
          <span>In Stock</span>
        </label>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {form.id ? "Update Product" : "Add Product"}
        </button>
        {productToEdit && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
