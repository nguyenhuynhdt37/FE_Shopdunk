import { useCallback, useState } from "react";
import SliderBrand from "../Sliders/SilerBrand";

const ShowProduct = ({ images }) => {
  const [image, setImage] = useState(images[0].link);
  const handleSelectImage = useCallback((image) => {
    setImage(image);
  }, []);
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
        <img src={image} alt="" className="image_show" />;
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
