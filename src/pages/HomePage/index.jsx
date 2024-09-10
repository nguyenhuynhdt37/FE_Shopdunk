import HomeNew from '../../components/HomePage/HomeNews/HomeNew'
import { SlideBanner, SlideGuest } from '../../components/Slide'
import ListCategory from '../../components/HomePage/ListCategory'

const HomePage = () => {
  return (
    <>
      <div className="box max-w-full overflow-x-hidden">
        <SlideBanner />
      </div>
      <div className="container pt-5 mx-auto">
        <SlideGuest />
        <ListCategory />
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
  )
}

export default HomePage
