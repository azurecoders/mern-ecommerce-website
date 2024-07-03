import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaBars } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import ProductCard from "../components/ProductCard"; // Import your existing ProductCard component

const sampleProducts = [
  {
    id: 1,
    name: "Premium Quality Headphones",
    description: "Experience high-quality sound with these headphones.",
    category: "Electronics",
    price: 99.99,
    rating: 4.5,
    colors: ["Black", "White"],
    sizes: [],
    imageUrl: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    description: "Stay warm and comfortable with this stylish hoodie.",
    category: "Clothing",
    price: 49.99,
    rating: 4,
    colors: ["Black", "White", "Red"],
    sizes: ["S", "M", "L", "XL"],
    imageUrl: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    name: "Modern Watch",
    description: "Keep track of time in style with this modern watch.",
    category: "Accessories",
    price: 199.99,
    rating: 5,
    colors: ["Silver", "Gold"],
    sizes: [],
    imageUrl: "https://picsum.photos/200/300?random=3",
  },
  {
    id: 4,
    name: "Casual Trouser",
    description: "Stay warm and comfortable with this stylish hoodie.",
    category: "Clothing",
    price: 500,
    rating: 5,
    colors: ["White"],
    sizes: ["S", "M"],
    imageUrl: "https://picsum.photos/200/300?random=4",
  },
  // Add more sample products as needed
];

const ProductDisplayPage = () => {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("price-asc");
  const [filters, setFilters] = useState({
    rating: [],
    color: [],
    size: [],
    priceRange: [0, 600],
  });
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const maxPrice = Math.max(
      ...sampleProducts.map((product) => product.price)
    );
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, maxPrice + 100],
    }));
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[filterType];
      if (currentValues.includes(value)) {
        return {
          ...prevFilters,
          [filterType]: currentValues.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...currentValues, value],
        };
      }
    });
  };

  const handlePriceRangeChange = (e) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, parseFloat(value)],
    }));
  };

  const clearFilters = () => {
    setFilters({
      rating: [],
      color: [],
      size: [],
      priceRange: [0, 600],
    });
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const filteredProducts = sampleProducts
    .filter((product) => {
      if (filters.rating.length > 0 && !filters.rating.includes(product.rating))
        return false;
      if (
        filters.color.length > 0 &&
        !filters.color.some((color) => product.colors.includes(color))
      )
        return false;
      if (
        filters.size.length > 0 &&
        !filters.size.some((size) => product.sizes.includes(size))
      )
        return false;
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <button
              onClick={() => handleViewChange("grid")}
              className={`mr-2 ${view === "grid" ? "font-bold" : ""}`}
            >
              Grid View
            </button>
            <button
              onClick={() => handleViewChange("list")}
              className={`${view === "list" ? "font-bold" : ""}`}
            >
              List View
            </button>
          </div>
          <div>
            <select
              value={sort}
              onChange={handleSortChange}
              className="border border-gray-300 rounded p-2"
            >
              <option value="price-asc">Sort by Price: Low to High</option>
              <option value="price-desc">Sort by Price: High to Low</option>
            </select>
          </div>
          <div className="block lg:hidden">
            <button onClick={toggleSidebar} className="text-xl">
              <FaBars />
            </button>
          </div>
        </div>
        <div className="flex">
          <div
            className={`fixed inset-0 bg-white z-50 p-4 transform ${
              showSidebar ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:bg-transparent lg:z-auto lg:flex lg:flex-col lg:w-1/4 lg:pr-4`}
          >
            <div className="flex items-center justify-between lg:hidden">
              <h3 className="text-xl font-bold mb-4">Filters</h3>
              <button onClick={toggleSidebar} className="text-xl">
                <MdClear />
              </button>
            </div>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Rating</h4>
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="mb-1 flex items-center">
                  <input
                    type="checkbox"
                    id={`rating-${rating}`}
                    name="rating"
                    value={rating}
                    checked={filters.rating.includes(rating)}
                    onChange={() => handleFilterChange("rating", rating)}
                    className="mr-2"
                  />
                  <label htmlFor={`rating-${rating}`}>
                    {[...Array(rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-yellow-500 inline-block mr-1"
                      />
                    ))}
                    {[...Array(5 - rating)].map((_, i) => (
                      <FaRegStar
                        key={i}
                        className="text-gray-400 inline-block mr-1"
                      />
                    ))}
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Color</h4>
              {["Black", "White", "Red", "Silver", "Gold"].map((color) => (
                <div key={color} className="mb-1 flex items-center">
                  <input
                    type="checkbox"
                    id={`color-${color}`}
                    name="color"
                    value={color}
                    checked={filters.color.includes(color)}
                    onChange={() => handleFilterChange("color", color)}
                    className="mr-2"
                  />
                  <label htmlFor={`color-${color}`}>{color}</label>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Size</h4>
              {["S", "M", "L", "XL"].map((size) => (
                <div key={size} className="mb-1 flex items-center">
                  <input
                    type="checkbox"
                    id={`size-${size}`}
                    name="size"
                    value={size}
                    checked={filters.size.includes(size)}
                    onChange={() => handleFilterChange("size", size)}
                    className="mr-2"
                  />
                  <label htmlFor={`size-${size}`}>{size}</label>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-bold mb-2">Price Range</h4>
              <input
                type="range"
                min="0"
                max={
                  Math.max(...sampleProducts.map((product) => product.price)) +
                  100
                }
                value={filters.priceRange[1]}
                onChange={handlePriceRangeChange}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>
                  $
                  {Math.max(...sampleProducts.map((product) => product.price)) +
                    100}
                </span>
              </div>
            </div>
            <button
              onClick={clearFilters}
              className="text-red-500 hover:text-red-700 font-semibold flex items-center mb-4"
            >
              <MdClear className="mr-1" />
              Clear Filters
            </button>
          </div>
          <div className="w-full lg:w-3/4 lg:ml-4">
            {view === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center border p-4 rounded"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p>{product.description}</p>
                      <p>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayPage;
