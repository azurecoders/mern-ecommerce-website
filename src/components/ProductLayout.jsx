import React from "react";
import ProductDetailsPage from "./ProductDetailsPage";
import ProductStats from "./ProductStats";
import DeliveryInfo from "./DeliveryInfo";
import RecommendedProducts from "./RecommendedProducts";
import ReviewsSection from "./ReviewsSection";

const ProductLayout = () => {
  return (
    <div>
      <ProductDetailsPage />
      <ProductStats />
      <DeliveryInfo />
      <RecommendedProducts />
      <ReviewsSection />
    </div>
  );
};

export default ProductLayout;
