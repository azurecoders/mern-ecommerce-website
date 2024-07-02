import React from "react";

const CheckoutConfirmation = () => {
  const sampleOrderDetails = {
    orderId: "#12345678",
    orderDate: "July 3, 2024",
    deliveryDate: "July 10, 2024",
    paymentMethod: "Cash on Delivery",
    shippingAddress: {
      name: "John Doe",
      address: "1234 Elm St",
      city: "Springfield",
      state: "IL",
      zip: "62704",
      country: "USA",
    },
    items: [
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
    ],
  };

  const getTotalPrice = () => {
    return sampleOrderDetails.items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Order Confirmation
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-bold">Order ID:</span>
            <span>{sampleOrderDetails.orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">Order Date:</span>
            <span>{sampleOrderDetails.orderDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">Estimated Delivery Date:</span>
            <span>{sampleOrderDetails.deliveryDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">Payment Method:</span>
            <span>{sampleOrderDetails.paymentMethod}</span>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Shipping Address</h3>
            <div className="space-y-2">
              <p>{sampleOrderDetails.shippingAddress.name}</p>
              <p>{sampleOrderDetails.shippingAddress.address}</p>
              <p>
                {sampleOrderDetails.shippingAddress.city},{" "}
                {sampleOrderDetails.shippingAddress.state}{" "}
                {sampleOrderDetails.shippingAddress.zip}
              </p>
              <p>{sampleOrderDetails.shippingAddress.country}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
            <ul className="space-y-4">
              {sampleOrderDetails.items.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-bold">{item.name}</h4>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <span className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
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
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => window.print()}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Print Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirmation;
