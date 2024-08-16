import { memo, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
const SlideProduct = memo(({ images, onSelectImage }) => {
  console.log(images);
  const slider = useRef(null);
  let settings = {
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 5,
  };
  return (
    <div className="box w-full relative">
      <button
        className=" absolute flex items-center justify-center z-10 transform rounded-full  text-white -translate-y-1/2 top-1/2 text-3xl -left-3 w-10 h-10 bg-zinc-400 hover:bg-zinc-600"
        onClick={() => slider?.current?.slickPrev()}
      >
        <FaAngleLeft />
      </button>
      <button
        className=" absolute flex items-center justify-center z-10 transform rounded-full  text-white -translate-y-1/2 top-1/2 text-3xl -right-3 w-10 h-10 bg-zinc-400 hover:bg-zinc-600"
        onClick={() => slider?.current?.slickNext()}
      >
        <FaAngleRight />
      </button>
      <Slider ref={slider} className="" {...settings}>
        {images &&
          images.map((image, index) => (
            <div key={index} className=" rounded-xl p-1 border-1">
              <div
                className="box-img pr-3 cursor-pointer"
                onClick={() => onSelectImage(image.link)}
              >
                <img
                  key={index}
                  src={image.link}
                  className="object-cover rounded-md"
                  alt={index}
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
});

export default SlideProduct;
