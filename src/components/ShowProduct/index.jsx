import { useCallback, useState } from "react";
import { SlideProduct } from "../Slide";
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
          width: "58.8rem",
          height: "58.8rem",
          backgroundColor: "#f5f5f7",
        }}
      >
        <img src={image} alt="" className="image_show" />
      </div>
      <div className="slider" style={{ width: "58.8rem" }}>
        <SlideProduct onSelectImage={handleSelectImage} images={images} />
      </div>
    </div>
  );
};

export default ShowProduct;
