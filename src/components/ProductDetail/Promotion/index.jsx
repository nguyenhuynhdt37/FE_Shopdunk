import React from "react";
import { TbGiftCard } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
const Promotion = () => {
  return (
    <div className="product-promotion rounded-xl border-1 mt-7">
      <div className="puchathing-method  p-6">
        <div className="title flex items-center text-2xl font-bold">
          <FaCreditCard className="text-3xl mr-4" />
          Purchasing method
        </div>
        <div className="buy-straight mt-6 flex font-medium text-2xl text-zinc-600 items-center">
          <input type="radio" className="mr-3" />
          Buy straight
        </div>
      </div>
      <div className="line h-0.5 bg-zinc-100"></div>
      <div className="endow p-6">
        <div className="title flex items-center text-2xl font-bold">
          <TbGiftCard className="text-3xl mr-4" />
          Discount when buying
        </div>
        <div className="box-endow leading-10  text-xl ps-8">
          <div className="title-1 font-bold mt-2 text-red-500">
            I. Ưu đãi trả góp (01/7 - 31/7)
          </div>
          <div className="short-description flex items-center">
            <IoIosCheckmarkCircle className="mr-3 text-2.5xl text-green-500" />
            Hỗ trợ trả góp 0% qua thẻ tín dụng Sacombank
            <a
              href="https://shopdunk.com/khuyen-mai-va-noi-bat"
              className="ms-2 detail text-blue-500"
            >
              (Xem chi tiết)
            </a>
          </div>
          <div className="short-description flex items-center">
            <IoIosCheckmarkCircle className="mr-3 text-2.5xl text-green-500" />
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
          <div className="title-1 font-bold mt-2 text-red-500">
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
            <IoIosCheckmarkCircle className="mr-3 text-2.5xl text-green-500" />
            Ưu đãi tới <strong className="mx-1"> 700.000đ </strong> khi thanh
            toán trả góp Kredivo
            <a
              href="https://shopdunk.com/khuyen-mai-va-noi-bat"
              className="ms-2 detail text-blue-500"
            >
              (Xem chi tiết)
            </a>
          </div>
          <div className="title-1 font-bold mt-2 text-red-500">
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
  );
};

export default Promotion;
