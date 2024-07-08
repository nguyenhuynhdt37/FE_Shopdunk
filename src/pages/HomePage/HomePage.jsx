import Slide from "../../components/Sliders/SliderHomePage/Slider";
import SilerBrand from "../../components/Sliders/SilerBrand/SilerBrand";
import ListBoxProduct from "../../components/ListBoxProduct/ListBoxProduct";
import HomeNew from "../../components/HomeNews/HomeNew";
const HomePage = () => {
  return (
    <>
      <div className="slider mb-5">
        <Slide />
      </div>
      <div className="container pt-5 ">
        <div className="sider-brand mb-5">
          <SilerBrand />
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
    </>
  );
};

export default HomePage;
