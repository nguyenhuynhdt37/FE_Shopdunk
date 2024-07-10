import { useState } from "react";
import SliderBrand from "../Sliders/SilerBrand";
import SliderImage from "../Sliders/SliderImage";

const ShowProduct = ({ images }) => {
  const handleSelectImage = (value) => {
    setCurrentSlide(value);
  };
  return (
    <div className="box-img">
      <div
        className="product-image rounded-lg p-8 mb-2"
        style={{
          width: "588px",
          height: "588px",
          backgroundColor: "#f5f5f7",
        }}
      >
        <SliderImage />
      </div>
      <div className="slider overflow-hidden" style={{ width: "588px" }}>
        <SliderBrand
          onSelectImage={handleSelectImage}
          images={images}
          node={"slideProduct"}
        />
      </div>
    </div>
  );
};

export default ShowProduct;
