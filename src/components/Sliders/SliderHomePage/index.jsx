import React from "react";
import Slider from "react-slick";
import SliderImage from "../SilerBrand/SliderImage";

const images = [
  {
    id: 1,
    url: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iPad%20Air%20M2-1_PC.jpg",
  },
  {
    id: 2,
    url: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iPhone%2015%20Pro%20Max%20T6_PC.jpg",
  },
  {
    id: 3,
    url: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iMac%20T6_PC.jpg",
  },
  {
    id: 4,
    url: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20watch%209%20T6_PC.jpg",
  },
];

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="bg-black" {...settings}>
      {images.map((image, index) => (
        <SliderImage key={index} image={image} />
      ))}
    </Slider>
  );
}
