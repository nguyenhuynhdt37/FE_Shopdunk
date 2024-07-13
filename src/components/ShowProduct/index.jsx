import { useCallback, useState } from "react";
import SliderBrand from "../Sliders/SilerBrand";

const ShowProduct = ({ imageProduct }) => {
  const { images } = imageProduct;
  const [image, setImage] = useState(images[0].link);
  const handleSelectImage = useCallback((image) => {
    setImage(image);
  }, []);
  return (
    <div className="box-img sticky top-28" style={{ height: "69.5rem" }}>
      <div
        className="product-image rounded-lg p-8 mb-6"
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
