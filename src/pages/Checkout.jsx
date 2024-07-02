import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const sampleCartProducts = [
    {
      id: 1,
      name: "Premium Quality Headphones",
      description:
        "Experience the best sound quality with these premium headphones.",
      price: 99.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Stylish Hoodie",
      description: "Stay warm and comfortable with this stylish hoodie.",
      price: 59.99,
      quantity: 2,
    },
  ];

  const getTotalPrice = () => {
    return sampleCartProducts
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", orderDetails);
    alert("Order placed successfully!");
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Checkout</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Billing Information</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={orderDetails.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={orderDetails.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={orderDetails.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={orderDetails.address}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={orderDetails.city}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={orderDetails.state}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={orderDetails.zip}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={orderDetails.country}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Link to="/checkout-confirm">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-6"
                >
                  Place Order
                </button>
              </Link>
            </form>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
              <ul className="space-y-4">
                {sampleCartProducts.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-lg font-bold">{product.name}</h4>
                      <p className="text-gray-600">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                    <span className="text-lg font-bold">
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold">Total:</h4>
                  <span className="text-xl font-bold text-blue-500">
                    ${getTotalPrice()}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Invoice</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Order Date:</span>
                  <span>July 3, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Number:</span>
                  <span>#12345678</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span>Cash on Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
