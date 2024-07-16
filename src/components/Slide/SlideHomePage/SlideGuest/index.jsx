import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
const images = [
  {
    link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/B%C3%ACnh%20An%20_%20Ph%C6%B0%C6%A1ng%20Nga.png",
  },
  {
    link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/HUy%E1%BB%81n%20Lizze%20_%20Qu%E1%BB%B3nh%20Koool.png",
  },
  {
    link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Hu%E1%BB%B3nh%20Anh.png",
  },
  {
    link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/H%C3%A0%20Vi%E1%BB%87t%20D%C5%A9ng.png",
  },
  {
    link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/L%C3%AA%20B%E1%BB%91ng.png",
  },
  {
    link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Quang%20Th%E1%BA%AFng.png",
  },
  {
    link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Thu%20M%C3%ADt.png",
  },
];
const SlideGuest = () => {
  const slider = useRef(null);
  let settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="box w-full relative mt-14 mb-28">
      <button
        className=" absolute flex items-center justify-center transform rounded-full z-10 text-black -translate-y-1/2 top-1/2 text-3xl left-8 w-11 h-11 bg-zinc-200 hover:bg-zinc-300"
        onClick={() => slider?.current?.slickPrev()}
      >
        <FaAngleLeft />
      </button>
      <button
        className=" absolute flex items-center justify-center transform rounded-full z-10 text-black -translate-y-1/2 top-1/2 text-3xl right-8 w-11 h-11 bg-zinc-200 hover:bg-zinc-300"
        onClick={() => slider?.current?.slickNext()}
      >
        <FaAngleRight />
      </button>
      <Slider ref={slider} {...settings}>
        {images &&
          images.map((image, index) => (
            <div key={index} className=" px-3">
              <div className="">
                <img
                  key={index}
                  src={image.link}
                  className="object-cover"
                  alt={index}
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SlideGuest;
