import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'
const SlideProduct = ({ images, onSelectImage }) => {
  const swiperRef = useRef(null)

  console.log(Swiper)
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }
  return (
    <div className="relative">
      <Swiper
        ref={swiperRef} // Gắn ref để truy cập vào swiper instance
        spaceBetween={5} // Khoảng cách giữa các slide
        slidesPerView={5} // Số slide hiển thị cùng lúc
        scrollbar={{ draggable: true }} // Kích hoạt kéo thả thanh trượt
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="rounded-xl py-1.5 px-1.5 border-1 h-36 max-w-48"
              key={index}
            >
              <div
                className="box-img pr-3 cursor-pointer h-full"
                onClick={() => onSelectImage(image)}
              >
                <img
                  src={image}
                  className="object-cover rounded-lg h-full"
                  alt={`Image ${index}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {images && images.length > 5 && (
        <>
          <button
            onClick={handlePrev}
            className="w-10 h-10 text-3xl text-white translate-x-0 rounded-full bg-zinc-400 flex justify-center items-center absolute top-1/2 -translate-y-1/2 z-10 -left-4"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 text-3xl text-white translate-x-0 rounded-full bg-zinc-400 flex justify-center items-center absolute top-1/2 -translate-y-1/2 z-10 -right-4"
          >
            <FaAngleRight />
          </button>
        </>
      )}
    </div>
  )
}

export default SlideProduct
