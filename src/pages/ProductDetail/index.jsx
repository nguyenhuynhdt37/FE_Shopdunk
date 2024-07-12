import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./ProductDetail.scss";
import { ButtonColorBox } from "../../components/ProductDetail/Button";
import Promotion from "../../components/ProductDetail/Promotion";
import ShowProduct from "../../components/ShowProduct";
const productInfo = {
  name: "iPhone 13",
  colors: [
    {
      id: 0,
      color: "green",
      images: [
        {
          link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000575_alpine-green_550.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000569_alpine-green_550.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000568_alpine-green.webp",
        },
      ],
    },
    {
      id: 1,
      color: "blue",
      images: [
        {
          link: "https://shopdunk.com/images/thumbs/0000626_blue_550.png",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000628_blue_550.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000629_blue_550.jpeg",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000630_blue_550.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000631_blue_550.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000632_blue_550.webp",
        },
        {
          link: "https://shopdunk.com/images/thumbs/0000629_blue_550.jpeg ",
        },
      ],
    },
  ],
  storage: [
    {
      id: 0,
      name: "128GB",
      price: "13690000",
      oldPrice: "24690000",
    },
    {
      id: 1,
      name: "256GB",
      price: "15690000",
      oldPrice: "29690000",
    },
    {
      id: 2,
      name: "512GB",
      price: "19990000",
      oldPrice: "34690000",
    },
  ],
  color: [
    { name: "black" },
    { name: "pink" },
    { name: "red" },
    { name: "blue" },
  ],
};
const ProductDetail = () => {
  return (
    <div className=" bg-white text-xl">
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
            <Link to="/">{productInfo.name}</Link>
          </li>
        </ul>
        <div className="grid grid-cols-2 product-box">
          <ShowProduct imageProduct={productInfo.colors[1]} />
          <div className="ps-14">
            <h4 className="product_name text-4xl font-normal mb-3">
              {productInfo.name}
            </h4>
            <div className="h-0.5 bg-slate-200"></div>
            <div className="product-price flex mt-7 mb-9 items-center">
              <div className="current-price text-4xl font-bold mr-8 text-primary1">
                13.690.000₫
              </div>
              <div className="old-price text-2.5xl text-color-old line-through">
                24.690.000₫
              </div>
            </div>
            <div className="product_storage">
              <div className="title mb-6">Storage</div>
              {/* <ButtonStorageBox storages={productInfo.storage} /> */}
            </div>
            <div className="product_color mt-8">
              <div className="title mb-6">Color</div>
              <ButtonColorBox />
            </div>
            <Promotion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
