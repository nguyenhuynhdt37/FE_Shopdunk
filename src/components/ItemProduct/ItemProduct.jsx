import React from "react";
import "./ItemProduct.scss";
const ItemProduct = () => {
  return (
    <div className="col-3">
      <div className="box-item bg-white">
        <div className="box-image">
          <img
            src="https://shopdunk.com/images/thumbs/0024430_iphone-13_240.png"
            alt=""
            className="img object-fit-cover w-100"
          />
        </div>
        <div className="info-product mt-5 mb-4 fs-3 fw-bold d-flex ">
          <div className="product-name me-2">iPhone 15</div>
          <div className="product-storage text-uppercase">128gb</div>
        </div>
        <div className="product-price d-flex fs-4 align-items-center pt-2">
          <div className="product__price--current me-3">13.690.000₫</div>
          <div className="product__price--old me-3 fs-5 text-secondary">
            24.990.000₫
          </div>
          <div className="percent-discount text-secondary fs-5">-45%</div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
