import React from "react";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import ProductSlider from "./ProductSlider";
import FeaturedSection from "./FeaturedSection";
import TestimonialsSection from "./TestimonialsSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import FlashSaleSection from "./FlashSaleSection";
import VoucherSection from "./VoucherSection";
import JustForYouSection from "./JustForYouSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FlashSaleSection />
      <ProductSlider />
      <JustForYouSection />
      <FeaturedSection />
      <TestimonialsSection />
      <VoucherSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
