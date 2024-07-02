import React, { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Premium Quality Headphones",
    description: "Experience high-quality sound with these headphones.",
    category: "Electronics",
    imageUrl: [
      "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
    ],
    prices: {
      default: 99.99,
    },
    rating: 4.5,
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    description: "Stay warm and comfortable with this stylish hoodie.",
    category: "Clothing",
    imageUrl: [
      "https://picsum.photos/400/300?random=4",
      "https://picsum.photos/400/300?random=5",
      "https://picsum.photos/400/300?random=6",
    ],
    colors: [
      { name: "Black", imageUrl: "https://picsum.photos/400/300?random=1" },
      { name: "White", imageUrl: "https://picsum.photos/400/300?random=2" },
      { name: "Silver", imageUrl: "https://picsum.photos/400/300?random=3" },
    ],
    sizes: ["S", "M", "L", "XL"],
    prices: {
      Black: { S: 59.99, M: 69.99, L: 79.99, XL: 89.99 },
      White: { S: 64.99, M: 74.99, L: 84.99, XL: 94.99 },
      Silver: { S: 69.99, M: 79.99, L: 89.99, XL: 99.99 },
    },
    rating: 4,
  },
  // Add more products as needed
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="text-center py-4">Product not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.imageUrl[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0].name : null
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : null
  );
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 5;

  const handleImageChange = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    // Update selected image based on color selection
    const selectedColorObj = product.colors.find((c) => c.name === color);
    if (selectedColorObj) {
      setSelectedImage(selectedColorObj.imageUrl);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const getPriceForSelectedVariant = () => {
    if (!product.prices) return "N/A";

    if (!selectedColor || !selectedSize) {
      return product.prices.default;
    }

    if (!product.prices[selectedColor]) return "N/A";

    return product.prices[selectedColor][selectedSize] || "N/A";
  };

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
    // Optionally: Implement logic to add/remove from actual wishlist storage (localStorage, backend, etc.)
  };

  const handleQuantityChange = (action) => {
    if (action === "increase" && quantity < maxQuantity) {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Product Description */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-2">
            <div className="text-yellow-500 mr-2">
              {Array.from(
                { length: Math.floor(product.rating) },
                (_, index) => (
                  <span key={index}>★</span>
                )
              )}
              {product.rating % 1 !== 0 && <span>★</span>}
            </div>
            <div className="text-lg text-gray-700">{product.rating}/5</div>
          </div>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <div className="mb-4">
            {product.category === "Clothing" && (
              <>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color:
                </label>
                <div className="flex space-x-2 mb-2">
                  {product.colors &&
                    product.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`rounded-full h-8 w-8 border-2 ${
                          selectedColor === color.name
                            ? "border-blue-500"
                            : "border-gray-300"
                        } focus:outline-none hover:border-blue-500`}
                        style={{ backgroundColor: color.name.toLowerCase() }}
                        onClick={() => handleColorChange(color.name)}
                        title={color.name}
                      />
                    ))}
                </div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Size:
                </label>
                <div className="flex space-x-2">
                  {product.sizes &&
                    product.sizes.map((size, index) => (
                      <button
                        key={index}
                        className={`rounded-full px-4 py-2 border-2 ${
                          selectedSize === size
                            ? "border-blue-500"
                            : "border-gray-300"
                        } focus:outline-none hover:border-blue-500`}
                        onClick={() => handleSizeChange(size)}
                      >
                        {size}
                      </button>
                    ))}
                </div>
              </>
            )}
            <div className="text-2xl font-bold text-gray-900 mt-4">
              ${getPriceForSelectedVariant()}
            </div>
            <div className="flex items-center mt-4 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1 mr-4">
                Quantity:
              </label>
              <button
                className={`px-2 py-1 bg-gray-300 text-gray-700 rounded-l ${
                  quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleQuantityChange("decrease")}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center bg-gray-200 text-gray-700"
              />
              <button
                className={`px-2 py-1 bg-gray-300 text-gray-700 rounded-r ${
                  quantity >= maxQuantity ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleQuantityChange("increase")}
                disabled={quantity >= maxQuantity}
              >
                +
              </button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2">
              {product.category === "Electronics" ? "Buy Now" : "Add to Cart"}
            </button>
            <button
              className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mt-4 ${
                isInWishlist ? "text-red-500" : ""
              }`}
              onClick={handleAddToWishlist}
            >
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>

        {/* Right Column: Product Images */}
        <div className="md:col-span-1">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
            />
            {/* Zoomed Image on Hover */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Thumbnail Images */}
          {product.imageUrl.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {product.imageUrl.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.name}
                  className={`rounded-lg shadow-md cursor-pointer ${
                    selectedImage === image ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() => handleImageChange(image)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
