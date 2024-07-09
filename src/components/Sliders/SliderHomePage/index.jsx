import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SliderImage from "../SliderImage";
const images = [
  {
    id: 1,
    url: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iPad%20Air%20M2-1_PC.jpg",
  },
  {
    id: 2,
    url: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iPhone%2015%20Pro%20Max%20T6_PC.jpg",
  },
  {
    id: 3,
    url: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20iMac%20T6_PC.jpg",
  },
  {
    id: 4,
    url: "https://shopdunk.com/images/uploaded/banner/banner%202024/thang_6/banner%20watch%209%20T6_PC.jpg",
  },
];
const Slide = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <SliderImage image={image} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slide;
