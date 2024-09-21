import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Slider from 'react-slick'
const images = [
  {
    link: 'https://shopdunk.com/images/uploaded/iPhone%2016/banner%20iphone%2016%20pro-KCTA_Danh%20m%E1%BB%A5c.png',
  },
  {
    link: 'https://shopdunk.com/images/uploaded/banner/banner 2024/Thang_9/thang9_2/11dm.png',
  },
  {
    link: 'https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iPad%20Air%205%20T6_PC.jpg',
  },
  {
    link: 'https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20MacBook%20Air%20M1%20T6_PC.jpg',
  },
  {
    link: 'https://shopdunk.com/images/uploaded/banner/banner%202024/Thang_7/banner%20Mac%20t%E1%BB%95ng_PC%20(1).jpg',
  },
  {
    link: 'https://shopdunk.com/images/uploaded/banner/banner%202024/Thang_7/banner%20iPhone%2015%20Pro%20Max%20T7_PC.jpg',
  },
]
const SlideBanner = () => {
  const slider = useRef(null)
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  }
  return (
    <div className="box w-full relative">
      <button
        className=" absolute flex items-center justify-center transform rounded-full z-10 text-white -translate-y-1/2 top-1/2 text-4xl left-16 w-20 h-20 bg-zinc-600 opacity-10 hover:opacity-50"
        onClick={() => slider?.current?.slickPrev()}
      >
        <FaAngleLeft />
      </button>
      <button
        className=" absolute flex items-center justify-center transform rounded-full z-10 text-white -translate-y-1/2 top-1/2 text-4xl right-16 w-20 h-20 bg-zinc-600 opacity-10 hover:opacity-50"
        onClick={() => slider?.current?.slickNext()}
      >
        <FaAngleRight />
      </button>
      <Slider ref={slider} className="" {...settings}>
        {images &&
          images.map((image, index) => (
            <div key={index}>
              <img
                key={index}
                src={image.link}
                className="object-cover"
                alt={index}
              />
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default SlideBanner
