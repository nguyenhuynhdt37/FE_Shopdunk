import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./ProductDetail.scss";
// import SliderBrand from "../../components/Sliders/SilerBrand";
import ShowProduct from "../../components/ShowProduct/ShowProduct";
const images = [
  { link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp" },
  { link: "https://shopdunk.com/images/thumbs/0000575_alpine-green_550.webp" },
  { link: "https://shopdunk.com/images/thumbs/0000569_alpine-green_550.webp" },
  { link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp" },
  { link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp" },
  { link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp" },
  { link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp" },
];
const ProductDetail = () => {
  return (
    <div className=" bg-white">
      <div className="product-deails container p-0">
        <ul className="list-url flex py-4 text-1.5xl text-gray-700">
          <li className="url mr-2">
            <Link to="/">Home</Link>
            <ChevronRight className="w-10 ms-2" />
          </li>
          <li className="url mr-2">
            <Link to="/">iPhone</Link>
            <ChevronRight className="w-10 ms-2" />
          </li>
          <li className="url mr-2">
            <Link to="/">iPhone 13 series</Link>
            <ChevronRight className="w-10 ms-2" />
          </li>
          <li className="url mr-2">
            <Link to="/">iPhone 13</Link>
          </li>
        </ul>
        <div className="grid grid-cols-2 product-box">
          <ShowProduct images={images} />
          <div className=" bg-black h-96">dsdss </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
