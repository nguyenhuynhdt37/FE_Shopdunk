import React from "react";
import "./ItemProduct.scss";
import { Link } from "react-router-dom";
const ItemProduct = () => {
  return (
    <Link to="/iphone">
      <div className="box-item bg-white">
        <div className="box-image pt-5">
          <img
            src="https://shopdunk.com/images/thumbs/0024430_iphone-13_240.png"
            alt=""
            className="img object-cover w-full"
          />
        </div>
        <div className="info-product mt-10 mb-8 text-2.5xl font-bold flex ">
          <div className="product-name mr-2">iPhone 13</div>
          <div className="product-storage uppercase">128gb</div>
        </div>
        <div className="product-price flex text-2xl items-center pb-2">
          <div className="text-primary1 font-bold me-3">13.690.000₫</div>
          <div className="product__price--old me-3 text-xl text-zinc-400">
            24.990.000₫
          </div>
          <div className="percent-discount text-xl text-zinc-400">-45%</div>
        </div>
      </div>
    </Link>
  );
};

export default ItemProduct;
