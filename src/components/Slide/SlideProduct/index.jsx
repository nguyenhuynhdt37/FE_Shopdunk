import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'

const SlideProduct = ({ medias, onSelectImage }) => {
  const swiperRef = useRef(null)

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
        {medias &&
          medias.map((media) => {
            if (media && media.video)
              return (
                <SwiperSlide key={media.id}>
                  <div className="rounded-xl py-1.5 px-1.5 border-1 h-36 max-w-48">
                    <div
                      className="box-img pr-3 cursor-pointer h-full  relative"
                      onClick={() => onSelectImage(media)}
                    >
                      <img
                        src={media.video.urlImage}
                        className="object-cover rounded-lg h-full"
                        alt={`Image ${media.title}`}
                      />
                      <img
                        src="https://shopdunk.com/images/uploaded-source/icon/play-button.png"
                        className="object-cover rounded-lg h-full absolute top-1/2  -translate-y-1/2"
                        alt={`Image ${media.title}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            if (media && media.image)
              return (
                <SwiperSlide key={media.id}>
                  <div className="rounded-xl py-1.5 px-1.5 border-1 h-36 max-w-48">
                    <div
                      className="box-img pr-3 cursor-pointer h-full overflow-hidden"
                      onClick={() => onSelectImage(media)}
                    >
                      <img
                        src={media.image.url}
                        className="object-cover rounded-lg h-full scale-125"
                        alt={`Image ${media.title}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            return null
          })}
      </Swiper>

      {medias && medias.length > 5 && (
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
