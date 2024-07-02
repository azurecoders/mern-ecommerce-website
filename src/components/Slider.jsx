import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Slide = styled.div`
  height: 300px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <Slide>Slide 1</Slide>
        <Slide>Slide 2</Slide>
        <Slide>Slide 3</Slide>
      </Slider>
    </SliderContainer>
  );
};

export default CustomSlider;
