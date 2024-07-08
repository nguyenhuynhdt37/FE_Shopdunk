import React from "react";

const NewsItems = () => {
  return (
    <div className="hover:shadow-item rounded-lg overflow-hidden">
      <div className="picture">
        <img
          className="w-auto"
          src="https://shopdunk.com/images/thumbs/0026661_banner%20t%E1%BB%95ng%20T6_App_1600.jpeg"
          alt=""
        />
      </div>
      <div className="news-head p-10 bg-white">
        <div className="news-title h-48  font-bold text-2.5xl">
          Tổng hợp CTKM tháng 6 tại ShopDunk. Ưu đãi lên đến 11 Triệu cho sản
          phẩm Apple chính hãng
        </div>
        <div className="news-dates">
          <span className="news-date text-zinc-400 text-2xl">01/06/2024</span>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
