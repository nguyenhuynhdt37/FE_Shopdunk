import Slide from "../../components/Sliders/SliderHomePage";
import SilerBrand from "../../components/Sliders/SilerBrand";
import ListBoxProduct from "../../components/ListBoxProduct";
import HomeNew from "../../components/HomeNews/HomeNew";
const images = [
  {
    Link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/B%C3%ACnh%20An%20_%20Ph%C6%B0%C6%A1ng%20Nga.png",
  },
  {
    Link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/HUy%E1%BB%81n%20Lizze%20_%20Qu%E1%BB%B3nh%20Koool.png",
  },
  {
    Link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Hu%E1%BB%B3nh%20Anh.png",
  },
  {
    Link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/H%C3%A0%20Vi%E1%BB%87t%20D%C5%A9ng.png",
  },
  {
    Link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/L%C3%AA%20B%E1%BB%91ng.png",
  },
  {
    Link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Quang%20Th%E1%BA%AFng.png",
  },
  {
    Link: "https://shopdunk.com/images/uploaded/banner/bonus%20banner/xx1/Thu%20M%C3%ADt.png",
  },
];
const HomePage = () => {
  return (
    <div>
      <div className="mb-5">{/* <Slide /> */}</div>
      <div className="container pt-5 mx-auto">
        <div className="sider-brand mb-5">
          <SilerBrand images={images} />
        </div>
        <div className="list-box-products pt-5">
          <ListBoxProduct />
          <ListBoxProduct />
          <ListBoxProduct />
          <ListBoxProduct />
        </div>
        <div className="banner-product mt-5 mb-5 pt-5">
          <img
            className="mt-5"
            src="https://shopdunk.com/images/uploaded/Trang%20ch%E1%BB%A7/2.jpeg"
            alt=""
          />
        </div>
        <div className="new-update">
          <HomeNew />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
