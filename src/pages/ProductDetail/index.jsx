import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./ProductDetail.scss";
import { ButtonColorBox } from "../../components/ProductDetail/Button";
import Promotion from "../../components/ProductDetail/Promotion";
import ShowProduct from "../../components/ShowProduct";
import ButtonStorageBox from "../../components/ProductDetail/Button/ButtonStorage";
import ProductParameters from "../../components/ProductDetail/ProductParameters";
import { IoIosCheckmarkCircle } from "react-icons/io";

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
  storages: [
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
        <ul className="list-url  flex py-4 text-1.5xl text-gray-700">
          <li className="url mr-2 ">
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
        <div className=" relative grid grid-cols-2 product-box">
          <ShowProduct imageProduct={productInfo.colors[1]} />
          <div className="ps-14  pb-16">
            <h4 className="product_name text-4xl font-normal mb-3">
              {productInfo.name}
            </h4>
            <div className="h-0.5 bg-slate-200"></div>
            <ButtonStorageBox storages={productInfo.storages} />
            <div className="product_color mt-8">
              <div className="title mb-6">Color</div>
              <ButtonColorBox colors={productInfo.colors} />
            </div>
            <Promotion />
            <button
              type="button"
              className="btn rounded-xl bg-primary1 w-full h-24 text-2xl font-bold uppercase mt-8 btn-primary"
            >
              Buy Now
            </button>
            <div className="prd-policy rounded-xl p-6 border-1 mt-7 leading-10">
              <div className="polocy-item flex items-center">
                <IoIosCheckmarkCircle className="text-3xl mr-4 text-primary1" />
                Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C
              </div>
              <div className="polocy-item flex items-center">
                <IoIosCheckmarkCircle className="text-3xl mr-4 text-primary1" />
                Giao hàng nhanh toàn quốc
                <a href="" className="font-bold ms-2 text-primary1">
                  (chi tiết)
                </a>
              </div>
              <div className="polocy-item flex items-center">
                <IoIosCheckmarkCircle className="text-3xl mr-4 text-primary1" />
                Bảo hành chính hãng 1 năm
                <a href="" className="font-bold ms-2 text-primary1">
                  (chi tiết)
                </a>
              </div>
              <div className="polocy-item flex items-center">
                <IoIosCheckmarkCircle className="text-3xl mr-4 text-primary1" />
                Gọi đặt mua
                <span className="text-primary1 mx-2">1900.6626</span>
                <a href="tel:19006626" className="font-bold  text-primary1">
                  (chi tiết)
                </a>
              </div>
            </div>
          </div>
        </div>
        <ProductParameters />
      </div>
    </div>
  );
};

export default ProductDetail;
