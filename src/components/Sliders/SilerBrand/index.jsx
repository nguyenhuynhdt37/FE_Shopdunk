import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./ButtonSilder";
import "./SlideBrand.scss";
import ImageSlide from "./ImageSlide";
import ImageProduct from "./ImageProduct";

function SliderBrand({ images, ...prev }) {
  const [image, setImage] = useState("");
  const handleSelectImage = (value) => {
    setImage(value);
  };
  let settings = {
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
  if (prev.node === "slideProduct") {
    settings = {
      ...settings,
      slidesToShow: 4,
      // slidesToScroll: 100,
      centerMode: true,
    };
  }
  return (
    <div>
      <Slider className="w-full" {...settings}>
        {(prev &&
          prev.node &&
          images.map((image, index) => (
            <ImageProduct
              onSelectImage={handleSelectImage}
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
}

export default SliderBrand;
