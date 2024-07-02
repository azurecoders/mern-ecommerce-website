import React from "react";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: "99.99",
    imageUrl: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    price: "89.99",
    imageUrl: "https://picsum.photos/200/200?random=2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    price: "79.99",
    imageUrl: "https://picsum.photos/200/200?random=3",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is product 4",
    price: "69.99",
    imageUrl: "https://picsum.photos/200/200?random=4",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is product 5",
    price: "59.99",
    imageUrl: "https://picsum.photos/200/200?random=5",
  },
];

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Top Products</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10 bg-black bg-opacity-75 rounded-full p-2`}
      style={{
        ...style,
        right: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right text-white" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10 bg-black bg-opacity-75 rounded-full p-2`}
      style={{
        ...style,
        left: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left text-white" />
    </div>
  );
};

export default ProductSlider;
