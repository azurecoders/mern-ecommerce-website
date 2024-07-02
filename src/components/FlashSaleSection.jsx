import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2024-07-15") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

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
        <h2 className="text-3xl font-bold text-center mb-8">Flash Sale</h2>
        <div className="text-center mb-8">
          {timeLeft.days !== undefined ? (
            <div className="text-2xl font-semibold flex justify-center space-x-4">
              <div className="bg-white rounded-md p-2">
                <div className="text-center font-bold">{timeLeft.days}</div>
                <div className="text-center">Days</div>
              </div>
              <div className="bg-white rounded-md p-2">
                <div className="text-center font-bold">{timeLeft.hours}</div>
                <div className="text-center">Hours</div>
              </div>
              <div className="bg-white rounded-md p-2">
                <div className="text-center font-bold">{timeLeft.minutes}</div>
                <div className="text-center">Minutes</div>
              </div>
              <div className="bg-white rounded-md p-2">
                <div className="text-center font-bold">{timeLeft.seconds}</div>
                <div className="text-center">Seconds</div>
              </div>
            </div>
          ) : (
            <div className="text-2xl font-semibold">Sale ended</div>
          )}
        </div>
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

export default FlashSaleSection;
