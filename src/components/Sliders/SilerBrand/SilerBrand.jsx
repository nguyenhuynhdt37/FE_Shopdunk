import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./ButtonSilder";
import "./SlideBrand.scss";

function SliderBrand() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  const images = [
    "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/B%C3%ACnh%20An%20_%20Ph%C6%B0%C6%A1ng%20Nga.png",
    "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/HUy%E1%BB%81n%20Lizze%20_%20Qu%E1%BB%B3nh%20Koool.png",
    "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Hu%E1%BB%B3nh%20Anh.png",
    "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/H%C3%A0%20Vi%E1%BB%87t%20D%C5%A9ng.png",
    "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/L%C3%AA%20B%E1%BB%91ng.png",
    "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Quang%20Th%E1%BA%AFng.png",
    "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Thu%20M%C3%ADt.png",
  ];

  return (
    <div className="p-0 w-100 h-100">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="img-fluid w-100 object-fit-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderBrand; // Sửa tên hàm
