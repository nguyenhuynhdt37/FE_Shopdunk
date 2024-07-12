import { memo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./ButtonSilder";
import "./SlideBrand.scss";
import ImageSlide from "./ImageSlide";
import ImageProduct from "./ImageProduct";

const SliderBrand = memo(({ images, onSelectImage, ...prev }) => {
  console.log(images);
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
      slidesToShow: 6,
      slidesToScroll: 5, // Nhảy 5 slide khi nhấn nút "Next"
      centerMode: false,
      autoplay: false,
    };
  }

  return (
    <div>
      <Slider className="w-full box-slide" {...settings}>
        {prev.node
          ? images.map((image, index) => (
              <ImageProduct
                onSelectImage={onSelectImage}
                image={image.link}
                key={index}
              />
            ))
          : images.map((image, index) => (
              <ImageSlide image={image.Link} key={index} />
            ))}
      </Slider>
    </div>
  );
});

export default SliderBrand;
