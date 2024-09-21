import { BiSolidGift } from 'react-icons/bi'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { FaCreditCard } from 'react-icons/fa6'
import { memo } from 'react'
const Promotion = () => {
  return (
    <div className="product-promotion rounded-2xl text-[#000] border-[0.005rem] mt-7">
      <div className="endow p-6">
        <div className="title flex items-center text-2xl font-bold">
          <BiSolidGift className="text-3xl  mr-4" />
          Ưu đãi
        </div>
        <div className="box-endow leading-10  text-xl ps-8">
          <div className="title-1 font-bold mt-2 text-[#e03e2d]">
            I. Ưu đãi trả góp (01/7 - 31/7)
          </div>
          <div className="short-description flex items-center">
            <IoIosCheckmarkCircle className="mr-3 text-2.5xl text-[#80d14f]" />
            Hỗ trợ trả góp 0% qua thẻ tín dụng Sacombank
            <a
              href="https://shopdunk.com/khuyen-mai-va-noi-bat"
              className="ms-2 detail text-blue-500"
            >
              (Xem chi tiết)
            </a>
          </div>
          <div className="short-description flex items-center">
            <IoIosCheckmarkCircle className="mr-3 text-2.5xl text-[#80d14f]" />
            Ưu đãi tới <strong className="mx-1"> 700.000đ </strong> khi thanh
            toán trả góp Kredivo
            <a
              href="https://shopdunk.com/khuyen-mai-va-noi-bat"
              className="ms-2 detail text-blue-500"
            >
              (Xem chi tiết)
            </a>
          </div>
        </div>
        <div className="box-endow leading-10  text-xl ps-8">
          <div className="title-1 font-bold mt-2 text-[#e03e2d]">
            II. Ưu đãi mua kèm iPhone 13 series
          </div>
          <div className="short-description ">
            <img
              className="mr-3 text-2.5xl w-8 inline-block"
              src="/assets/icons/best-offer.gif"
            />
            Giảm đến <strong className="mx-1"> 20% </strong>
            <a
              href="https://shopdunk.com/khuyen-mai-va-noi-bat"
              className="ms-2 detail text-blue-500"
            >
              (Bảo hành kim cương, Bảo hành VIP (Rơi vỡ, vào nước) , <br /> Bảo
              hành mở rộng.)
            </a>
          </div>
          <div className="short-description flex items-center">
            <IoIosCheckmarkCircle className="mr-3 text-2.5xl text-[#80d14f]" />
            Ưu đãi tới <strong className="mx-1"> 700.000đ </strong> khi thanh
            toán trả góp Kredivo
            <a
              href="https://shopdunk.com/khuyen-mai-va-noi-bat"
              className="ms-2 detail text-blue-500"
            >
              (Xem chi tiết)
            </a>
          </div>
          <div className="title-1 font-bold mt-2 text-[#e03e2d]">
            IV. Ưu đãi lên đời
          </div>
          <div className="short-description ">
            <img
              className="mr-3 text-2.5xl w-8 inline-block"
              src="/assets/icons/best-offer.gif"
            />
            Trợ giá lên đời đến<strong className="mx-1">2.000.000đ</strong>
            <a
              href="https://shopdunk.com/khuyen-mai-va-noi-bat"
              className="ms-2 detail text-blue-500"
            >
              (Xem chi tiết)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Promotion)
