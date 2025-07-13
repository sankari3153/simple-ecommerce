import React, { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({ name: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded">
          Order placed! Thank you, {form.name}.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Your Address"
            className="w-full p-2 border rounded"
            required
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
