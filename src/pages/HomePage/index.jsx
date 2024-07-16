import ListBoxProduct from "../../components/ListBoxProduct";
import HomeNew from "../../components/HomeNews/HomeNew";
import { SlideBanner, SlideGuest } from "../../components/Slide";

const HomePage = () => {
  return (
    <>
      <div className="box max-w-full overflow-x-hidden">
        <SlideBanner />
      </div>
      <div className="container pt-5 mx-auto">
        <SlideGuest />
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
