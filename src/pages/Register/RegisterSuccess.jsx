import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const RegisterSuccess = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto text-xl">
        <ul className="box-nav-bar py-3 flex leading-11 text-xl">
          <li className="item flex items-center">
            <Link to="/">Trang chủ</Link>
            <RxCaretRight className="w-10 relative top-0.5" />
          </li>
          <li className="item mr-2 flex items-center">
            <Link to="/">Đăng ký</Link>
          </li>
        </ul>
      </div>
      <div className="bg-backgroudDefault text-center py-56 text-2xl mx-auto">
        <div className="flex text-10xl justify-center mb-4">
          <IoCheckmarkDoneCircle className="text-darkGreen" />
        </div>
        <div className="title text-darkGreen font-bold text-3xl leading-11">
          Tài khoản của bạn đã được đăng ký thành công
        </div>
        <div className="goodluck text-1.5xl text-zinc-700 leading-11 mb-3">
          Chúc bạn tìm được sản phẩm ưng ý tại ShopDunk
        </div>
        <Link to="/login">
          <button className="goback cursor-pointer px-8 py-3 text-1.5xl font-normal rounded-xl bg-primary1 text-white">
            Quay lại đăng nhập
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterSuccess;
