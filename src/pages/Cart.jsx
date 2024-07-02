import React, { useState } from "react";
import { Link } from "react-router-dom";

const sampleCartProducts = [
  {
    id: 1,
    name: "Premium Quality Headphones",
    description:
      "Experience the best sound quality with these premium headphones.",
    price: 10,
    quantity: 1,
    imageUrl: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    description: "Stay warm and comfortable with this stylish hoodie.",
    price: 20,
    quantity: 2,
    imageUrl: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    name: "Modern Watch",
    description: "Keep track of time in style with this modern watch.",
    price: 30,
    quantity: 1,
    imageUrl: "https://picsum.photos/200/300?random=3",
  },
];

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(sampleCartProducts);
  const maxQuantity = 5;

  const handleIncreaseQuantity = (id) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity < maxQuantity
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const getTotalPrice = () => {
    return cartProducts
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        {cartProducts.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold">{product.name}</h4>
                  <p className="text-gray-600">{product.description}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecreaseQuantity(product.id)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-400"
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => handleIncreaseQuantity(product.id)}
                      className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-400"
                      disabled={product.quantity >= maxQuantity}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-bold text-blue-500 mt-2">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {cartProducts.length > 0 && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">
              Total Price: ${getTotalPrice()}
            </h4>
            <Link
              to="/checkout"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
