import { memo, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./ButtonSilder";
import "./SlideBrand.scss";
import ImageSlide from "./ImageSlide";
import ImageProduct from "./ImageProduct";

const SliderBrand = memo(({ images, onSelectImage, ...prev }) => {
  const [image, setImage] = useState("");
  let settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setImage(current),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  if (prev.node === "slideProduct") {
    settings = {
      ...settings,
      slidesToShow: 5,
      centerMode: true,
      autoplay: false,
    };
  }
  return (
    <div>
      <Slider className="w-full" {...settings}>
        {(prev &&
          prev.node &&
          images.map((image, index) => (
            <ImageProduct
              onSelectImage={onSelectImage}
              image={image.link}
              key={index}
            />
          ))) ||
          images.map((image, index) => (
            <ImageSlide image={image.link} key={index} />
          ))}
      </Slider>
    </div>
  );
});

export default SliderBrand;
